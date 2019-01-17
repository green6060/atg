class Game < ApplicationRecord
  has_many :accounts, dependent: :destroy
  has_many :tournaments, dependent: :destroy
end
