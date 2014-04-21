Codeurge::Application.routes.draw do
	root to: 'pages#home'
	resources :articles do
		resources :comments
	end
	resources :tags
	resources :categories
	resources :authors

	resources :author_sessions, only: [ :new, :create, :destroy ]

	get 'login' => 'author_sessions#new'
	get 'logout' => 'author_sessions#destroy'

	get '/home' => 'pages#home'
	get '/blog' => 'articles#index'
end
