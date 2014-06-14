require 'spec_helper'

describe "Login" do
	before(:each) do
		@user = create(:user)
	end
	it "allows users to login" do
		visit 'login'
		fill_in "Email", :with => @user.email
		fill_in "Password", :with => @user.password
		click_button "Login"
	end
end
