class Article < ActiveRecord::Base
	
	has_many :comments
	has_many :taggings
	has_many :tags, through: :taggings
	has_many :categorizations
	has_many :categories, through: :categorizations

	belongs_to :author, :foreign_key => 'author_id'

	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
	validates_attachment_content_type :image, :content_type => %w(image/jpeg image/jpg image/png)

	validates :author_id, presence: true
  validates :title, presence: true
  validates :body, presence: true
  validates :created_at, presence: true

	def tag_list
	  self.tags.collect do |tag|
			    tag.name
					  end.join(", ")
	end

	def tag_list=(tags_string)
		tag_names = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
		new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
		self.tags = new_or_found_tags
	end

	def category_list
		self.categories.collect do |category|
			category.name
				end.join(", ")
	end

	def category_list=(categories_string)
		category_names = categories_string.split(",").collect{|s| s.strip.downcase}.uniq
		new_or_found_categories = category_names.collect { |name| Category.find_or_create_by(name: name) }
		self.categories = new_or_found_categories
	end

end
