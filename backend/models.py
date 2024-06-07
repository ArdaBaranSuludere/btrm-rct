from config import db, ma
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

class Blogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    reading_time = db.Column(db.Integer, nullable=False)
    publish_date = db.Column(db.Date, nullable=False)
    views = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(2000), nullable=False)
    category = db.relationship('Category', back_populates="blogs")
    
    @property
    def author_username(self):
        return self.author.username if self.author else None

    @author_username.setter
    def author_username(self, username):
        self.author = User.query.filter_by(username=username).first()

    def __repr__(self):
        return '<Blog {}>'.format(self.title)

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    photograph = db.Column(db.String(256))
    blogs = db.relationship("Blogs", back_populates="category")

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class BlogsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Blogs

class CategorySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Category

    blogs = ma.Nested(BlogsSchema, many=True)
