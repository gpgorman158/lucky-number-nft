class User < ApplicationRecord
    has_secure_password
    has_many :joins, dependent: :destroy
    has_many :nfts, through: :joins
    validates :username, presence: true, uniqueness: true
end
