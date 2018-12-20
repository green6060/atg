require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#################################################################################################
puts "Creating Admin Account..."

@admin = User.create(
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  level: 3,
)

puts "Done!"
puts "Test Admin Login Credentials - Email: admin@admin.com, Password: password, Level 3 Access"

puts "Creating Moderator Account..."
@moderator = User.create(
  firstName: 'moderator',
  lastName: 'moderator',
  email: 'mod@mod.com',
  password: 'password',
  level: 2,
)

puts "Done!"
puts "Test Moderator Login Credentials - Email: mod@mod.com, Password: password, Level 2 Access"

puts "Creating User Account..."
@user = User.create(
  firstName: 'user',
  lastName: 'user',
  email: 'user@user.com',
  password: 'password',
)

puts "Done!"
puts "Test User Login Credentials - Email: user@user.com, Password: password, Level 1 Access"

#############################################################################################################

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

##############################################################################################################

print "Creating games..."
games = [
  "PlayerUnknown's Battleground",
  "Overwatch", 
  "League of Legends", 
  "Counter-Strike: Global Offensive" 
]
count = 0
4.times do
  Game.create(
    game_name: games[count]
  )
  count = count + 1
end


print "Done!"

##############################################################################################################
print "Creating tournaments..."

5.times do
  Tournament.create(
    tournament_name: 'The ' + Faker::ElderScrolls.region + ' Tournament',
    tournament_description: 'A  test tournament held in the ' + Faker::ElderScrolls.region + ' region, named randomly after regions of the Elder Scrolls universe.'
  )
end


puts "Creation Log:"
puts " Users: #{User.count}"
puts " Announcements: #{Announcement.count}"
puts " Games: #{Game.count}"
puts " Tournaments: #{Tournament.count}"

