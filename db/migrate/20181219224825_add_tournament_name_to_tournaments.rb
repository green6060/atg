class AddTournamentNameToTournaments < ActiveRecord::Migration[5.2]
  def change
    add_column :tournaments, :tournament_name, :string
  end
end
