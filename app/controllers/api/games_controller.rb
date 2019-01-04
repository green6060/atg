class Api::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def show
  end

  def new
    @game = Game.new
  end

  def edit
  end

  def create
    game = Game.new(game_params)

    if game.save
      render json: Game.all
    else
      render json: game.errors, status: 422
    end
  end

  def update
  end

  def destroy
  end

private
  def game_params
    params.require(:game).permit(:game_name)
  end


end
