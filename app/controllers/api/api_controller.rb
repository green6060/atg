class Api::ApiController < ApplicationController
  before_action :set_announcement, only: [:show, :update, :destroy]

  def index
    render json: Announcement.all
  end

  def show
    render json: Announcement.get_announcement(@announcement.id)
  end

  def create
    announcement = announcements.create(announcement_params)
    user = User.find(announcement.user_id)
    if announcement.save
      render json: build_announcement(announcement, user)
    else
      render_error(announcement)
    end
  end

  def update
    if @announcement.update(announcement_params)
      user = User.find(@announcement.user_id)
      render json: build_announcement(@announcement, user)
    else
      render_error(@announcement)
    end
  end

  def destroy
    @announcement.destroy
  end

  private

  def build_announcement(announcement, user)
    {
      id: announcement.id,
      body: announcement.body,
      created_at: announcement.created_at,
      updated_at: announcement.updated_at,
      published: announcement.published,
      user_id: announcement.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  end

  def set_announcement
    @announcement = Announcement.find(params[:id])
  end

  def announcement_params
    params.require(:announcement).permit(
      :announcement_id,
      :body,
      :user_id
      )
  end
end

end
