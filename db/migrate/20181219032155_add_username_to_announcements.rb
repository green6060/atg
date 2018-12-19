class AddUsernameToAnnouncements < ActiveRecord::Migration[5.2]
  def change
    add_column :announcements, :username, :string, null: false
  end
end
