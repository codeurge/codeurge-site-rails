require 'spec_helper'

describe Category do

  describe "validations" do

    it "requires a name" do
      expect(FactoryGirl.build(:category, name:nil)).to be_invalid
    end

    it "requires a slug" do
      expect(FactoryGirl.build(:category, slug:nil)).to be_invalid
    end

  end

end
