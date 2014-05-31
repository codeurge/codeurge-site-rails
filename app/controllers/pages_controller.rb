class PagesController < ApplicationController


	def home
		@articles = Article.all.includes(:comments).
      where('articles.published = ?', true).
      order("created_at desc").
      limit(2)
	end
end