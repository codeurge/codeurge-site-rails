class CategoriesController < ApplicationController
	def show
		@category = Category.find(params[:id])
	end

	private
		before_filter :require_login, only: [:destroy]
end
