# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t1 = Task.create(title: "Buy a gift", description: "for my close friend", duedate: "2021-01-01")
t2 = Task.create(title: "Do homework", description: "it's math", duedate: "2021-01-02")
t3 = Task.create(title: "Build an App", description: "very difficult", duedate: "2021-01-03")
t4 = Task.create(title: "Learn React", description: "javascript is important", duedate: "2021-01-04")
t5 = Task.create(title: "Go for training", description: "become a sportsman", duedate: "2021-01-05")

c1 = Category.create(name: "Academics")
c2 = Category.create(name: "Sports")
c3 = Category.create(name: "Social life")

TaskCategory.create(task: t1, category: c3)
TaskCategory.create(task: t2, category: c1)
TaskCategory.create(task: t3, category: c1)
TaskCategory.create(task: t4, category: c1)
TaskCategory.create(task: t5, category: c2)