# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# posts = Post.create([
#     {title: "JavaScript v Ruby", image: "https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/", body:"Blog Post 1"},
#     {title: "JavaScript v Python", image: "https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/", body:"Blog Post 2 "},
#     {title: "Python v Ruby", image: "https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/", body:"Blog Post 3"},])

posts = Post.create(
    [
        {
        title: "Ruby vs JS",
        image: "https://api.time.com/wp-content/uploads/2015/04/google-sign.jpg",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
        },
        {
        title: "Ruby on Rails",
        image: "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?cs=srgb&dl=pexels-markus-spiske-965345.jpg&fm=jpg",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
        title: "Quick Start Overview",
        image: "https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366",
        body: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.\n\nFor a complete introduction to React Router, do the Tutorial\nFor a deeper understanding of concepts, see Main Concepts"
        },
        ]
)
