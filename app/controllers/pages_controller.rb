class PagesController < ApplicationController


	def home
		@articles = Article.all.includes(:comments).order("created_at asc").limit(2)
	end
end