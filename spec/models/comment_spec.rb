require 'spec_helper'

describe Comment do

  let(:author) { FactoryGirl.create(:author) }
  let(:article) { FactoryGirl.create(:article) }

  describe "validations" do

    it "requires a body" do
      expect(FactoryGirl.build(:comment, body: nil)).to be_invalid
    end

    it "requires a body at least 2 characters long" do
      expect(FactoryGirl.build(:comment, body: "a")).to be_invalid
    end

    it "requires an associated article" do
      expect(FactoryGirl.build(:comment, article: nil)).to be_invalid
    end

  end

end
