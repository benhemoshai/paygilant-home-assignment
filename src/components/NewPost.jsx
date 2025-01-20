import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createPost} from '../services/postService';
import {Send, PenLine} from "lucide-react";

function NewPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({title: title, body: content, userId: 1})
            .then((data) => {
                console.log('Post Created:', data);
                alert('Post created successfully!');
                navigate('/');
            })
            .catch((error) => {
                console.log('Error creating post:' ,error);
            });
    };



    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
                <div className="flex items-center space-x-3">
                    <PenLine className="w-8 h-8 text-white" />
                    <h1 className="text-2xl font-bold text-white">Create New Post</h1>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter an engaging title..."
                            required
                        />
                    </div>

                    {/* Content Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Content
                        </label>
                        <textarea
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={8}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                            placeholder="Write your post content here..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-white
                                bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 
                                transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                        >
                            <span>Publish Post</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default NewPost;
