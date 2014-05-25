require 'spec_helper'
require 'capybara/rails'

describe "Logins" do
	before(:each) do
		@user = create(:user)
	end
	it "allows @users to login" do
		visit login_path
		fill_in "Email", :with => @user.email
		fill_in "Password", :with => @user.password
		click_button "Login"
	end
end