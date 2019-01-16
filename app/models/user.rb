# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :teams, through: :user_has_teams
  has_many :games, through: :accounts
  has_many :announcements
  has_many :comments, through: :announcements
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
