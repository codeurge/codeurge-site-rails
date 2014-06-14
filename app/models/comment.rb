class Comment < ActiveRecord::Base
  belongs_to :article

  validates_presence_of :body
  validates_presence_of :article
  validates_length_of :body, :minimum => 2
end
