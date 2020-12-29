class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duedate, :category_ids

  def category_ids
    object.task_categories.map(&:category_id)
  end

end
