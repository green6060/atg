class Tournament < ApplicationRecord
  has_many :teams, through: :team_has_tournament, dependent: :destroy
end
