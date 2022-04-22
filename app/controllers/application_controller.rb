class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authorize_user

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
