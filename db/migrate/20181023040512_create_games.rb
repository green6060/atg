class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :games_id, :primary_key
      t.string :game_name
      
      t.timestamps
    end
  end
end
