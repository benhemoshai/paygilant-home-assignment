import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className="block bg-white rounded-3xl shadow hover:shadow-lg transition-shadow h-full"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Post Title */}
        <h2 className="text-xl font-semibold mb-4 line-clamp-2">{post.title}</h2>
        
        {/* Post Body */}
        <p className="text-gray-600 line-clamp-6 border-t border-gray-100 pt-4 flex-grow">
          {post.body}
        </p>

        {/* Read More */}
        <span className="text-blue-600 text-sm font-medium self-end mt-4 hover:translate-x-1 transition-transform flex items-center">
          Read more →
        </span>
      </div>
    </Link>
  );
}

export default PostCard;
