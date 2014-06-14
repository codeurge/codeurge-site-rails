class Author < ActiveRecord::Base
  authenticates_with_sorcery!
	validates_confirmation_of :password, message: "should match confirmation", if: :password

  validates_presence_of :email
  validates_uniqueness_of :email

  validates_presence_of :username
  validates_uniqueness_of :username

	has_many :articles
end
