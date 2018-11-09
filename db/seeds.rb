require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Admin Accounts..."

@admin = User.create(
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@admin.com',
  password: 'password',
)

print "Done! Email: admin@admin.com Password: password"

print "Creating announcements..."

User.all.each do
  5.times do
    Announcement.create(
      body: Faker::HarryPotter.quote + ' ' + Faker::GameOfThrones.quote + ' ' + Faker::BackToTheFuture.quote,
      user_id: 1
    )
  end
end

print "Done!"

puts "Creation Log:"
puts " Announcements: #{Announcement.count}"
puts " Users: #{User.count}"
