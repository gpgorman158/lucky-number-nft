class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:login_attempts] = 0
            render json: user, status: :created
            
        else
            session[:login_attempts] ||=0
            session[:login_attempts] += 1
            render json: {errors: "Invalid Username or Password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    # private
    # def user_params
    #     params.permit(:username, :password, :password_confirmation)
    # end
end
