class JoinsController < ApplicationController

    def create
        join = Join.create!(join_params)
        render json: join, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    private
    def join_params
        params.permit(:user_id, :nft_id)
    end
end
