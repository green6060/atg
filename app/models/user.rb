# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :teams, through: :user_has_teams, dependent: :destroy
  has_many :games, through: :accounts, dependent: :destroy
  has_many :announcements, dependent: :destroy
  has_many :comments, through: :announcements, dependent: :destroy
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
