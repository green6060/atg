class Game < ApplicationRecord
  belongs_to :accounts
  belongs_to :tournaments
end
