class PostsController < ApplicationController
  before_action :set_post, only: [:show, :destroy]
  wrap_parameters format: []

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    post = Post.find_by(id: params[:id])
    if post
      post.update(post_params)
      render json: post
    else
      render json: { error: "post not found" }, status: :not_found

    end

  end

def increment_likes
    post = Post.find_by(id: params[:id])
    if post
      post.update(likes: post.likes + 1)
      render json: post
    else
      render json: { error: "post not found" }, status: :not_found
    end
end

  # DELETE /posts/1
  def destroy
    # @post.destroy(params[:id])
    post = Post.find_by(id: params[:id])
    if post
      post.destroy
      head :no_content
    else
      render json: { error: "post not found" }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      # params.require(:post).permit(:title, :image, :likes, :body, :id)
      params.permit(:title, :image, :likes, :body, :id)
    end
end
