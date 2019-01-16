class Api::CommentsController < ApplicationController
  before_action :set_announcement, only: [:show, :create, :update]


  def index
  end

  def create
  end

  def show
    render json: Comment.announcement_comments(@announcement.id)
  end

  def update
  end

  def destroy
  end

  private
  def set_announcement
    @announcement = Announcement.find(params[:announcement_id])
  end


end
