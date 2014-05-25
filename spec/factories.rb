FactoryGirl.define do

	# normal user
	factory :user, class: Author do
		username "tester"
		email "foo@example.com"
		password "secret"
	end

end