class Api::TournamentsController < ApplicationController
  def index
    render json: Tournament.all
  end

  def new
    @tournament = Tournament.new
  end

  def create
    tournament = Tournament.new(tournament_params)

    if tournament.save
      render json: Tournament.all
    else
      render json: tournament.errors, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def tournament_params
    params.require(:tournament).permit(:tournament_name)
  end

end
