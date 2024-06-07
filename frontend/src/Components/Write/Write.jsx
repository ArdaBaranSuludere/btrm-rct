import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Write.css'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.content || "");
    const [title, setTitle] = useState(state?.title || "");
    const [subtitle, setSubtitle] = useState(state?.subtitle || "");
    const [category, setCategory] = useState(state?.category || "");
    const [readingTime, setReadingTime] = useState(state?.reading_time || "");
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const blogData = {
            title,
            subtitle,
            category,
            reading_time: readingTime,
            content: value,
            file: file,
        };
    
        try {
            const response = await fetch('http://127.0.0.1:5000/submit_blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify(blogData),
                credentials: 'include'
            });
    
            if (!response.ok) {
                const error = await response.text();
                console.error("Response not OK:", error);
                throw new Error(`Failed to submit the blog: ${error}`);
            }
    
            alert("Blog submitted successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error submitting blog:", error);
            alert(`An error occurred while submitting the blog: ${error.message}`);
        }
    };

    return (
    <div className="write-container">
        <div className="add">
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Reading Time"
                        value={readingTime}
                        onChange={(e) => setReadingTime(e.target.value)}
                    />
                    <div className="editorContainer">
                        <ReactQuill
                            className="editor"
                            theme="snow"
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </div>
                <div className="menu">
                    <div className="item">
                        <h1>Publish</h1>
                        <span>
                            <b>Status: </b> Draft
                        </span>
                        <span>
                            <b>Visibility: </b> Public
                        </span>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <label className="file" htmlFor="file">
                            Upload Image
                        </label>
                        <div className="buttons">
                            <button type="submit">Save as a draft</button>
                            <button type="submit">Publish</button>
                        </div>
                    </div>
                    <div className="item">
                        <h1>Category</h1>
                        {["art", "science", "technology", "cinema", "design", "food"].map(category => (
                            <div className="cat" key={category}>
                                <input
                                    type="radio"
                                    checked={category === category}
                                    name="cat"
                                    value={category}
                                    id={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                                <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Write;