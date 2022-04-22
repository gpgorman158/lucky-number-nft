class NftsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: :create

    def index
        render json: Nft.all, status: :ok
    end

    def show
        nft = Nft.find_by(id: params[:id])
        render json: nft, status: 201
    end
end
