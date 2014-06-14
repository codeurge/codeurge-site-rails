require 'spec_helper'

describe Author do
  let(:author) { FactoryGirl.create(:author) }

  describe "validations" do

    it "requires a username" do
      expect(FactoryGirl.build(:author, username:nil)).to be_invalid
    end

    it "requires an email address" do
      @user = expect(FactoryGirl.build(:author, email: nil)). to be_invalid
    end

    describe "when email is already taken" do
      before do
        FactoryGirl.create(:user, email: "new_user@example.com")
        @user_with_same_email = FactoryGirl.build(:user, email: "new_user@example.com")
        @user_with_same_email.save
      end
      it { expect(@user_with_same_email).to be_invalid }
    end

    describe "when username is already taken" do
      before do
        FactoryGirl.create(:user, username: "codeurge")
        @user_with_same_username = FactoryGirl.build(:user, username: "codeurge")
        @user_with_same_username.save
      end
      it { expect(@user_with_same_username).to be_invalid }
    end

  end

end
