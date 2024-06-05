import React, { useState } from 'react';
import './blog_submit.css'
import SubmitBlogService from '../SubmitBlogService';

const BlogSubmit = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: '',
    readingTime: '',
    content: '',
    author_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertArticle(formData) // Form gönderme işlemi burada yapılır, örneğin fetch veya axios ile backend'e gönderilebilir    
    console.log('Form submitted:', formData);
  };

  const insertArticle = (formData) =>{
    SubmitBlogService.InsertArticle({formData})
    .then((response) => props.insertedArticle(response))
    .catch(error => console.log('error',error))
  }

  return (
    <div className="submit_container">
      <div className="blog-submit-form">
        <h2>Blogunuzu girin.</h2>
        <form id="submit_blog" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="title"
                  type="text"
                  id="title"
                  placeholder="Title*"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="subtitle"
                  type="text"
                  id="subtitle"
                  placeholder="Subtitle*"
                  required
                  value={formData.subtitle}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="category"
                  type="text"
                  id="category"
                  placeholder="Category*"
                  required
                  value={formData.category}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="readingTime"
                  type="text"
                  id="reading_time"
                  placeholder="Reading Time*"
                  required
                  value={formData.readingTime}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <textarea
                  name="content"
                  rows="6"
                  id="content"
                  placeholder="Content*"
                  required
                  value={formData.content}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" className="main-dark-button">
                  Submit Blog
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default BlogSubmit;
