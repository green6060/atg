class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :tournament
      t.string :_name
      t.text :tournament_description

      t.timestamps
    end
  end
end
