class CreateAnnouncements < ActiveRecord::Migration[5.2]
  def change
    create_table :announcements do |t|
      t.text :body
      t.belongs_to :users, foreign_key: true

      t.timestamps
    end
  end
end
