from flask import Flask, jsonify
from config import app, db
from models import Blogs,User



@app.route('/api/users', methods=['GET'])
def get_user():
    users = User.query.all()
    user_list = [user.to_dict() for user in users]

    return jsonify(user_list)


@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    blogs = Blogs.query.all()
    blogs_list = [blog.to_dict() for blog in blogs]
    return jsonify(blogs_list)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
