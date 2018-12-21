class Account < ApplicationRecord
  belongs_to :users
  belongs_to :games
end
