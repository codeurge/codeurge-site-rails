FactoryGirl.define do

	# normal user
	factory :user, aliases: [:author, :commenter], class: Author do
		username {Faker::Internet.user_name}
		email {Faker::Internet.email}
		password {Faker::Internet.password}
	end

end
