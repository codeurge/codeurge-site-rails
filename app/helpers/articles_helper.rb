module ArticlesHelper
	def article_params
		params.require(:article).permit(:title, :body, :category_list, :tag_list, :image, :published)
	end
end