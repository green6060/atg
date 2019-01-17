class Announcement < ApplicationRecord
  has_many :comments, dependent: :destroy
end
