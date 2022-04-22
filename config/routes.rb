Rails.application.routes.draw do
  resources :joins, only: [:create]
  resources :nfts
  resources :users, only: [:index, :update]

  get "/auto_login", to: "users#show"
  post "/sign_up", to: "users#create"

  post '/login_back', to: "sessions#create"
  delete '/logout_back', to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
