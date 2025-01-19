import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch all posts
export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
};

//Fetch a post by its ID
export const fetchPost = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${id}`)
    return response.data
  }


export const fetchComments = async (postId) => {
const response = await axios.get(`${API_BASE_URL}/comments?postId=${postId}`)
return response.data
}

// Create a new post
export const createPost = async (postData) => {
    const response = await axios.post(`${API_BASE_URL}/posts`, postData);
    return response.data;
};
