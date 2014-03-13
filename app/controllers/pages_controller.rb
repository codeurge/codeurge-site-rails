class PagesController < ApplicationController
	def home
		@articles = Article.includes(:comments).order("created_at asc").limit(2)
	end

	def about
	end

	def services
	end
	
	def contact
	end
end
