FactoryGirl.define do
  factory :tagging do |t|
  article
  tag
  t.created_at Time.now
  end
end
