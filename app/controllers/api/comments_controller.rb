class Api::CommentsController < ApplicationController

  def create
    @announcement = Announcement.find(params[:announcement_id])
    @comment = @announcement.comments.create(params[:comment].permit(:name, :comment))
    redirect_to announcement_path(@announcement)
  end

  def show
    render json: Comment.announcement_comments(@announcement.id)
  end

  def destroy
    @announcement = announcement.find(params[:announcement_id])
    @comment = @announcement.comments.find(params[:id])
    @comment.destroy
    redirect_to announcement_path(@announcement)
  end


end
