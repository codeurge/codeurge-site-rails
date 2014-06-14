FactoryGirl.define do
  factory :category do |c|
    c.name { Faker::Lorem.words(1) }
    c.slug { c.name }
  end
end
