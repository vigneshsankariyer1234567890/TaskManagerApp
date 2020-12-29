class CreateTaskCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :task_categories do |t|
      t.references :task, index:true
      t.references :category, index:true
      t.timestamps
    end
  end
end
