class Api::AnnouncementsController < ApplicationController
  before_action :set_announcement, only: [:show, :update, :destroy]

  def index
    render json: Announcement.all.order("created_at DESC")
  end

  def show
    render json: @announcement
  end


  def new
    @announcement = Announcement.new
  end

  def edit
  end

  def create
    announcement = Announcement.new(announcement_params)

    if announcement.save
      render json: build_announcement(announcement)
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

    def build_announcement(announcement)
      {
        id: announcement.id,
        body: announcement.body,
        user_id: announcement.user_id,
        created_at: announcement.created_at,
        updated_at: announcement.updated_at,
      }
    end

    def set_announcement
      @announcement = Announcement.find(params[:id])
    end

    def announcement_params
      params.require(:announcement).permit(:body, :user_id)
    end
end
