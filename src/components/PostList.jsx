import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { fetchPosts } from "../services/postService";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]); // For displaying filtered results
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
                setFilteredPosts(data); // Initialize filteredPosts with all posts
            } catch (err) {
                console.log("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter posts based on the query
        const filtered = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(query)
        );
        setFilteredPosts(filtered);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Latest Posts</h1>
                <span className="text-gray-500">{filteredPosts.length} posts</span>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Post List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
                ) : (
                    <p>No posts available</p>
                )}
            </ul>
        </div>
    );
}

export default PostList;
