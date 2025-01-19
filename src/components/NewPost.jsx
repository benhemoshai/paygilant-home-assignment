import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createPost} from '../services/postService';

function NewPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({title: title, body: content, userId: 1})
            .then((data) => {
                console.log('Post Created:', data);
                alert('Post added successfully!');
                navigate('/');
            })
            .catch((error) => {
                console.log('Error creating post:' ,error);
            });
    };



    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-3xl shadow-md" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Add New Post</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content:
                    </label>
                    <textarea
                        name="content"
                        className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required

                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewPost;
