from config import db
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    table_args = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(256))
    is_admin = db.Column(db.Boolean, default=False)
    photograph = db.Column(db.String(255))  # Dosya yolu için String tipinde bir sütun

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'is_admin': self.is_admin,
            'photograph': self.photograph,
        }

    
class Blogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    reading_time = db.Column(db.Integer, nullable=False)
    publish_date = db.Column(db.Date, nullable=False)
    views = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(2000), nullable=False)
    
    @property
    def author_username(self):
        return self.author.username if self.author else None



    @author_username.setter
    def author_username(self, username):
        self.author = User.query.filter_by(username=username).first()

    def __repr__(self):
        return '<Blog {}>'.format(self.title)

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'title': self.title,
            'subtitle': self.subtitle,
            'category': self.category,
            'reading_time': self.reading_time,
            'publish_date': self.publish_date.isoformat() if self.publish_date else None,
            'views': self.views,
            'content': self.content,
        }
