FactoryGirl.define do
  factory :tag do |t|
    t.name { Faker::Lorem.words(1).to_s }
  end
end
