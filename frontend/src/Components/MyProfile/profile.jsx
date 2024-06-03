import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            {/* Profil resmi */}
            <div className="profile-image">
                <img className="author-my-photo mr-2" src="\src\assets\images\default.jpg" alt="" />
                    {/* <img className="blog-img" src="assets/images/default.jpg" style="border-radius: 0%;" alt="Varsayilan Resim" > */}
                    
                    <form action="{{ url_for('upload_profile_image') }}" method="POST" encType="multipart/form-data">
                        <input type="file" name="image" />
                        <button type="submit">Profil Resmi Yükle</button>
                    </form>

                <p>Kullanıcı Adı: </p>
                <p>E-posta: </p>
            </div>
        </div>
    );
};

export default Profile;
