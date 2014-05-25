class PagesController < ApplicationController


	def home
		@articles = Article.all.includes(:comments).order("created_at desc").limit(2)
	end
end