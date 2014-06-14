FactoryGirl.define do
  factory :comment do |c|
    c.body { Faker::Lorem.words(20).to_s }
    article
    c.created_at Time.now
  end
end
