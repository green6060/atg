class Api::AnnouncementsController < ApplicationController

  def index
    render json: Announcement.all.order("created_at DESC")
  end

  def new
    render json: Announcement.new
  end

  def create
    @announcement = Announcement.new(announcement_params)

    if @announcement.save
        redirect_to @announcement
    else
        render 'new'
    end
  end

  def show
    render json: Announcement.find(params[:id])
  end

  def update
    @announcement = Announcement.find(params[:id])

    if @announcement.update(announcement_params)
        redirect_to @announcement
    else
        render 'edit'
    end
  end

  def edit
    @announcement = Announcement.find(params[:id])
  end

  def destroy
    @announcement = Announcement.find(params[:id])
    @announcement.destroy

    redirect_to announcements_path

  end

  private

  def announcement_params
    binding.pry
    params.require(:announcement).permit(:body)
  end

end