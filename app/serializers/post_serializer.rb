class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body, :likes
end
