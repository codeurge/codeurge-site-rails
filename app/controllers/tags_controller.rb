class TagsController < ApplicationController
	def show
		@tag = Tag.find(params[:id])
	end

	private
		before_filter :require_login, only: [:destroy]
end
