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
  firstName: 'firstName_admin',
  lastName: 'lastName_admin',
  username: 'username_admin',
  email: 'admin@admin.com',
  password: 'password',
  level: 3,
)

puts "Done!"
puts "Test Admin Login Credentials - username: username_admin, Email: admin@admin.com, Password: password, Level 3 Access"

puts "Creating Moderator Account..."
@moderator = User.create(
  firstName: 'firstName_moderator',
  lastName: 'lastName_moderator',
  username: 'username_moderator',
  email: 'mod@mod.com',
  password: 'password',
  level: 2,
)

puts "Done!"
puts "Test Moderator Login Credentials - username: username_moderator, Email: mod@mod.com, Password: password, Level 2 Access"

puts "Creating User Account..."
@user = User.create(
  firstName: 'firstName_user',
  lastName: 'lastName_user',
  username: 'username_user',
  email: 'user@user.com',
  password: 'password',
)

puts "Done!"
puts "Test User Login Credentials - username: username_user, Email: user@user.com, Password: password, Level 1 Access"

#############################################################################################################

print "Creating announcements..."

# User.all.each do
#   5.times do
#     random_number = [1, 2].sample
#     if (random_number === 1) 
#       random_username = "username_admin"
#     elsif
#       random_username = "username_moderator"
#     else 
#       random_username = "Whoops"
#     end
#     Announcement.create(
#       body: Faker::HarryPotter.quote + ' ' + Faker::GameOfThrones.quote + ' ' + Faker::BackToTheFuture.quote,
#       user_id: random_number,
#       username: random_username,
#     )
#   end
# end

5.times do
  Announcement.create(
    body: Faker::HarryPotter.quote + ' ' + Faker::GameOfThrones.quote + ' ' + Faker::BackToTheFuture.quote,
)
end

puts "Done!"

##############################################################################################################

# print "Creating Comments..."

# announcement_count = 0
# Announcement.all.each do
#   announcement_count += 1
#   5.times do
#     random_user_id = [1, 2, 3].sample
#     Comment.create(
#       body: Faker::BackToTheFuture.quote,
#       user_id: random_user_id,
#       announcement_id: announcement_count,
#     )
#   end
# end
print "Creating comments..."

announcement_count = 0
Announcement.all.each do
  announcement_count += 1
  5.times do
    random_user_id = [1, 2, 3].sample
    Comment.create(
      comment: Faker::BackToTheFuture.quote,
      name: "Random",
      announcement_id: [1, 2, 3, 4, 5].sample,
    )
  end
end

puts "Done!"

##############################################################################################################

print "Creating games..."

game_array = [
  "PlayerUnknown's Battleground",
  "Overwatch", 
  "League of Legends", 
  "Counter-Strike: Global Offensive" 
]
count = 0
4.times do
  Game.create(
    game_name: game_array[count]
  )
  count = count + 1
end


print "Done!"

##############################################################################################################

print "Creating tournaments..."

5.times do
  Tournament.create(
    tournament_name: 'The ' + Faker::ElderScrolls.region + ' Tournament',
    tournament_description: 'A  test tournament held in the ' + Faker::ElderScrolls.region + ' region, named randomly after regions of the Elder Scrolls universe.',
    games_id: [1, 2, 3].sample
    )
end

##############################################################################################################

puts "Creation Log:"
puts " Users: #{User.count}"
puts " Announcements: #{Announcement.count}"
puts " Comments: #{Comment.count}"
puts " Games: #{Game.count}"
puts " Tournaments: #{Tournament.count}"

