class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :money
  has_many :nfts
end
