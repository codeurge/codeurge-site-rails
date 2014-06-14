 # spec/factories_spec.rb

require 'spec_helper'

FactoryGirl.factories.map(&:name).each do |factory_name|
  describe "The #{factory_name} factory" do
     it 'is valid' do
      expect(build(factory_name)).to be_valid
     end
  end
end
