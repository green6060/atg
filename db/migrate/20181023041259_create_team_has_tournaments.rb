class CreateTeamHasTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :team_has_tournaments do |t|
      t.belongs_to :tournament, foreign_key: true
      t.belongs_to :team, foreign_key: true

      t.timestamps
    end
  end
end
