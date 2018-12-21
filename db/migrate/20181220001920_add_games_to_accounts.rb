class AddGamesToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_reference :accounts, :game, foreign_key: true
  end
end
