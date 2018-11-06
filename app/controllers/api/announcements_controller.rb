class Api::AnnouncementsController < ApplicationController
  before_action :set_announcement, only: [:show, :update, :destroy]

  def index
    render json: Announcement.all
  end

  def show
    render json: @announcement
  end

  def create
    announcement = Announcement.new(announcement_params)

    if announcement.save
      render json: announcement
    else
      render json: announcement.errors, status: 422
    end
  end

  def update
    if @announcement.update(announcement_params)
      render json: @announcement
    else
      render json: @announcement.errors, status: 422
    end
  end

  def destroy
    @announcement.destroy
  end

  private
    def set_announcement
      @announcement = Announcement.find(params[:id])
    end

    def announcement_params
      params.require(:announcement).permit(:body)
    end
end
