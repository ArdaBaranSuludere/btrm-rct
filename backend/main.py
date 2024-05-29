from flask import Flask, jsonify,request
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


def find_user(username):
    return User.query.filter_by(username=username).first()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing username, email, or password!'}), 400

    user = User.query.filter_by(username=username, email=email).first()

    if user and user.check_password(password):
        return jsonify({'message': 'Login successful!'}), 200
    else:
        return jsonify({'message': 'Login failed!'}), 401
    


from flask import request

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username:
        return jsonify({'message': 'Missing username!'}), 400
    if not email:
        return jsonify({'message': 'Missing email!'}), 400
    if not password:
        return jsonify({'message': 'Missing password!'}), 400

    existing_user = User.query.filter_by(username=username).first()

    if existing_user:
        return jsonify({'message': 'Username already exists!'}), 409

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully!'}), 201


@app.route('/logout', methods=['POST'])
def logout():
    # Burada ek bir işlem yapmanız gerekmeyebilir.
    # Tarayıcıda oturum yönetimi genellikle ön uç tarafında yapılır.
    # Oturum yönetimi için Flask-Login gibi bir kütüphane kullanabilirsiniz.
    return jsonify({'message': 'Logout successful!'}), 200



if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
