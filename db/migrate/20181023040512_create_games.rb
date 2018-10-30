class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :game_name
      t.belongs_to :accounts, foreign_key: true

      t.timestamps
    end
  end
end
