class Tagging < ActiveRecord::Base
  belongs_to :tag
  belongs_to :article

  validates_presence_of :tag
  validates_presence_of :article
end
