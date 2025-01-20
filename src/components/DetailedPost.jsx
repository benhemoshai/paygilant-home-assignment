import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchPost,fetchComments } from "../services/postService"

function DetailedPost(){

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchPostAndComments = async () => {
        try {
          const [postData, commentsData] = await Promise.all([
            fetchPost(id),
            fetchComments(id)
          ])
          setPost(postData)
          setComments(commentsData)
          setIsLoading(false)
        } catch (err) {
          console.log("Error fetching post:", err);
          setError(err.message)
          setIsLoading(false)
        }
      }
  
      fetchPostAndComments()
    }, [id])
  
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
        <div className="max-w-4xl mx-auto px-4 py-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Post Header */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-300 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {post?.title}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/30" />
                <div>
                  <p className="font-medium">Post Writer</p>
                  <p className="text-sm opacity-75">Posted on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
    
            {/* Post Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {post?.body}
              </p>
            </div>
          </article>
    
          {/* Comments Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comments ({comments.length})
            </h2>
            
            <div className="space-y-8">
              {comments.map(comment => (
                <div 
                  key={comment.id} 
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                      {comment.email.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {comment.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {comment.email}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }
    

export default DetailedPost;