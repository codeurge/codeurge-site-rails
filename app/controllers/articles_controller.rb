class ArticlesController < ApplicationController

  before_filter :require_login, except: [:index, :show]
  before_filter :all_categories

	include ArticlesHelper

	def index
    if current_user
     @articles = Article.all.limit(10).reorder('created_at DESC')
    else
      @articles = Article.where('articles.published = TRUE').limit(10).reorder('created_at DESC')
    end
	end

	def show
		@article = Article.find(params[:id])
		@comment = Comment.new
		@comment.article_id = @article.id
	end

	def new
		@article = Article.new
	end

	def create
		@article = Article.new(article_params) # Pulls the article hash and assigns it to one with the same keys
		@article.author_id = current_user.id
    if verify_recaptcha
      @article.save
      flash.notice = "Article #{@article.title} Created!"
      redirect_to article_path(@article)
    else
      flash.error = "Article #{@article.title} not created!"
      render :new
    end
	end

	def destroy
		@article = Article.find(params[:id])
		@article.destroy

		flash.notice = "Article #{@article.title} Removed!"

		redirect_to articles_path
	end

	def edit
		@article = Article.find(params[:id])
	end

	def update
		@article = Article.find(params[:id])
		@article.update(article_params)

		flash.notice = "Article #{@article.title} Updated!"

		redirect_to article_path(@article)
	end

	private
		def all_categories
			@categories = Category.all
		end
end