require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_announcements
  5.times do
    body = Faker::HarryPotter.quote + ' ' + Faker::GameOfThrones.quote + ' ' + Faker::BackToTheFuture.quote
    publish_at = DateTime.now + rand(60) - 30
    published = true
    Announcement.create(body: body, publish_at: publish_at, published: published, user_id: 1)
  end
end