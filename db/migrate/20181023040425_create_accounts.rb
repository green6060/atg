class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :account_name
      t.belongs_to :users, foreign_key: true

      t.timestamps
    end
  end
end
