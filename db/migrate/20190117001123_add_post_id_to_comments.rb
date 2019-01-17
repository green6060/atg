class AddPostIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :announcement_id, :integer
  end
end
