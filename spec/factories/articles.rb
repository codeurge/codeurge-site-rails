FactoryGirl.define do
  factory :article do |a|
    a.title { Faker::Lorem.words(4).to_s }
    a.body { Faker::Lorem.words(20).to_s }
    author 
    a.created_at Time.now
  end
end
