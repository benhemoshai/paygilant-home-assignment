import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { fetchPosts } from "../services/postService";
import {Search, BookOpen, X} from "lucide-react";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]); // For displaying filtered results
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const [error, setError] = useState(null)


    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
                setFilteredPosts(data); // Initialize filteredPosts with all posts
            } catch (err) {
                console.log("Error fetching posts:", err);
                setError(err.message)

            } finally {
                setIsLoading(false);
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

    if (isLoading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-pulse text-xl text-gray-600">
              Loading...
            </div>
          </div>
        );
      }

      if (error) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-xl text-red-500 bg-red-50 p-4 rounded-lg shadow">
              Error: {error}
            </div>
          </div>
        );
      }
    

    return (
    <div className="p-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <BookOpen className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Latest Posts
            </h1>
            </div>
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
            {filteredPosts.length} posts available
            </span>
        </div>
        

        {/* Search Bar */}
        <div className="mb-8 relative">
        <div className="relative max-w-md mx-auto">
            {/* Search Icon */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            {/* Search Input */}
            <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />

                {/* Clear Button ('X') */}
                {searchQuery && (
                <button
                    type="button"
                    onClick={() => {
                    setSearchQuery("");
                    setFilteredPosts(posts); // Reset the filteredPosts
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                )}
        </div>
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
