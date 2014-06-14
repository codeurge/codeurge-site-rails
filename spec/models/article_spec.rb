require 'spec_helper'

describe Article do

  let(:author) { FactoryGirl.create(:author) }
  let(:article) { FactoryGirl.create(:article) }

  describe "validations" do

    it "requires a title" do
      expect(FactoryGirl.build(:article, title: nil)).to be_invalid
    end

    it "requires an author" do
      expect(FactoryGirl.build(:article, author: nil)).to be_invalid
    end

    it "requires a body" do
      expect(FactoryGirl.build(:article, body: nil)).to be_invalid
    end

    it "requires a published date" do
      expect(FactoryGirl.build(:article, created_at: nil)).to be_invalid
    end

  end

end
