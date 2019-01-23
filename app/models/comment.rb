class Comment < ApplicationRecord
  belongs_to :announcement

  # def self.announcement_comments(announcement_id)
  #   select('comments.*, name, comment')
  #   .joins('INNER JOIN users u ON u.id = user_id')
  #   .where('announcement_id = ?', announcement_id)
  #   .order('updated_at DESC')
  # end
end
