class Team < ApplicationRecord
  has_many :tournaments, through: :team_has_tournaments, dependent: :destroy
  has_many :users, through: :user_has_team, dependent: :destroy
end
