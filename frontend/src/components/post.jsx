import React, { useEffect, useState } from "react";
import Atbash from "../assets/atbash.jpg";



const Post = ({post}) => {
  const [likesCount, setLikesCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {

    setLikesCount(post.likes);
    setShareCount(post.shares);
    setComments(post.comments);
    console.log(post);
  }, [post]);

  const handleLike = () => {
    setLikesCount(likesCount + 1);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      console.log(comments);
      setNewComment("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
       
        className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.description}
          </p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center" onClick={handleLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-gray-600 dark:text-gray-300 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{post.likes} Likes</span>
            </div>
            <div className="flex items-center" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-gray-600 dark:text-gray-300 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{post.shares} Shares</span>
            </div>
            <div className="flex items-center" onClick={toggleComments}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-gray-600 dark:text-gray-300 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">Comments</span>
            </div>
          </div>
          {showComments && (
            <div className="mb-4">
              {post.comments.map((comment, index) => (
                <div key={index} className="mb-1 text-gray-700 dark:text-gray-400">
                  <p>{comment.name}: {comment.body}</p>
                  <small>{new Date(comment.created_at).toLocaleString()}</small>
                </div>
              ))}
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="border p-1 w-full"
              />
              <button
                onClick={handleAddComment}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Add Comment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
