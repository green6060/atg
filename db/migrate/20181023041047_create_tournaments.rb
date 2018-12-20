class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :tournament
      t.string :_name
      t.text :tournament_description
      t.belongs_to :games, foreign_key: true

      t.timestamps
    end
  end
end
