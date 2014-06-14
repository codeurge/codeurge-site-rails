class Category < ActiveRecord::Base
	has_many :categorizations
	has_many :articles, through: :categorizations

  validates_presence_of :name
  validates_presence_of :slug

	def to_s
		name
	end
end
