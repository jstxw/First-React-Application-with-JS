import React, { useState } from "react";
import "../css/Forum.css";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setComments([{ text: input, id: Date.now() }, ...comments]);
      setInput("");
    }
  };

  return (
    <div className="forum-container">
      <div className="comments-section">
        {comments.length === 0 ? (
          <div className="forum-empty-centered">
            <div className="forum-empty-icon">💬</div>
            <div className="forum-empty-title">No comments yet</div>
            <div className="forum-empty-desc">Be the first to start a conversation about your favorite movies!</div>
          </div>
        ) : (
          comments.map((comment) => (
            <div className="comment-box" key={comment.id}>
              {comment.text}
            </div>
          ))
        )}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          className="comment-input"
          type="text"
          placeholder="Type your comment about your favorite movie..."
          value={input}
          onChange={handleInputChange}
        />
        <button className="comment-submit" type="submit">Post</button>
      </form>
    </div>
  );
};

export default Forum; 