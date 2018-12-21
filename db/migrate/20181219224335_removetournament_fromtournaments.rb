class RemovetournamentFromtournaments < ActiveRecord::Migration[5.2]
  def change
    remove_column :tournaments, :tournament
    remove_column :tournaments, :_name
  end
end
