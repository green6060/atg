class Game < ApplicationRecord
  has_many :accounts
  has_many :tournaments
end
