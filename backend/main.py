from flask import Flask, jsonify,request,session
from config import app, db
from models import Blogs, User, Category, BlogsSchema, CategorySchema, UserSchema
from flask_login import current_user, login_required, logout_user
from flask import request
import traceback, os
from datetime import datetime

app.secret_key = os.urandom(24)


@app.route('/api/users', methods=['GET'])
def get_user():
    users = User.query.all()
    user_schema = UserSchema(many=True)
    user_list = user_schema.dump(users)
    return jsonify(user_list)

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    blogs = Blogs.query.all()
    blogs_schema = BlogsSchema(many=True)
    blogs_list = blogs_schema.dump(blogs)
    return jsonify(blogs_list)

@app.route("/api/categories", methods=['GET'])
def get_categories():
    categories = Category.query.all()
    category_schema = CategorySchema(many=True)
    category_list = category_schema.dump(categories)
    return jsonify(category_list)

def find_user(username):
    return User.query.filter_by(username=username).first()

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.to_dict())
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/api/user_blogs', methods=['GET'])
def get_user_blogs():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'message': 'User not logged in!'}), 401
    blogs = Blogs.query.filter_by(author_id=user_id).all()
    blogs_schema = BlogsSchema(many=True)
    blogs_list = blogs_schema.dump(blogs)
    return jsonify(blogs_list), 200


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing username, email, or password!'}), 400

    user = User.query.filter_by(username=username, email=email).first()
    print(user.id)
    if user and user.check_password(password):
        session['user_id'] = user.id  # Store user_id in the session
        return jsonify({
            'message': 'Login successful!',
            'isLoggedIn': True,
            'isAdmin': user.is_admin  # Assuming 'is_admin' is a property on the User model
        }), 200
    else:
        return jsonify({'message': 'Login failed!'}), 401
    

@app.route('/checkauth', methods=['GET'])
def checkauth():
    user_id = session.get('user_id')
    print(f"Session user_id: {user_id}")
    
    if 'user_id' in session:
        return jsonify({'isLoggedIn': True}), 200
    else:
        return jsonify({'isLoggedIn': False}), 401


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


@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)  # Remove user_id from the session
    return jsonify({'message': 'Logout successful!'}), 200


@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'message': 'An internal error occurred',
        'details': str(error),
        'trace': traceback.format_exc()
    }), 500


@app.route('/submit_blog', methods=['POST'])
@login_required  # Sadece oturum açmış kullanıcılar bu görünüme erişebilir
def submit_blog():

    title = request.json['title']
    subtitle = request.json['subtitle']
    category = request.json['category']
    reading_time = request.json['reading_time']
    content = request.json['content']

    # Oturum açmış olan kullanıcının kimliğini al
    author_username = current_user.username

    # Kullanıcı adını kullanarak ilgili kullanıcının id'sini al
    user = User.query.filter_by(username=author_username).first()
    author_id = user.id

    # Yeni bir blog nesnesi oluştur ve publish_date ve views değerlerini ayarla
    new_blog = Blogs(title=title,
                      subtitle=subtitle,
                       category=category,
                        reading_time=reading_time,
                         content=content,
                          author_id=author_id,
                           author_username=author_username,
                            publish_date=datetime.now(),
                             views=0)

    # Veritabanına ekle ve değişiklikleri kaydet
    db.session.add(new_blog)
    db.session.commit()


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)