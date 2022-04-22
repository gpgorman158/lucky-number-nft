class NftSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :value

  def value
    "$#{self.object.value}"
  end

end
