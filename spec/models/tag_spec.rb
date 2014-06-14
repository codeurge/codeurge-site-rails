require 'spec_helper'

describe Tag do

  describe "validations" do

    it "requires a name" do
      expect(FactoryGirl.build(:tag, name:nil)).to be_invalid
    end

    it "has to be unique" do
      expect(FactoryGirl.create(:tag, name:"tag")).to be_valid
      expect(FactoryGirl.build(:tag, name:"tag")).to be_invalid
    end

  end

end
