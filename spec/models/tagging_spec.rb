require 'spec_helper'

describe Tagging do

  let(:author) { FactoryGirl.create(:author) }
  let(:article) { FactoryGirl.create(:article) }
  let(:tag) { FactoryGirl.create(:tag) }

  describe "validations" do

    it "has to have a tag" do
      expect(FactoryGirl.build(:tagging, tag: nil)).to be_invalid
    end

    it "has to have an article" do
      expect(FactoryGirl.build(:tagging, article: nil)).to be_invalid
    end

  end
  
end
