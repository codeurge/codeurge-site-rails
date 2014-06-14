source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'

# Use postgresql as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', "~> 4.0.2"

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

gem 'paperclip' # file attachments

gem 'sorcery' # magical authentication

gem 'haml-rails' # still using HAML in some places.

gem 'slim-rails' # slim templates, faster than HAML

gem 'bootstrap-sass' # for bootstrap

gem "recaptcha", :require => "recaptcha/rails" # reCaptcha for Article comments

group :test, :development do
  gem 'rspec-rails'
  gem 'factory_girl_rails'
end

group :development do
	gem 'childprocess', '0.3.6'
  gem 'spork-rails'
	gem 'guard'
	gem 'guard-rspec'
	gem 'guard-spork'
	gem 'guard-livereload'
  gem 'rspec-legacy_formatters'
  gem 'fuubar'
end

group :test do
  gem 'faker'
	gem 'capybara'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
