import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', text: 'Great post!' },
    { id: 2, author: 'Bob', text: 'Thanks for sharing.' }
  ]);

  const [newComment, setNewComment] = useState({ author: '', text: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewComment(prevComment => ({
      ...prevComment,
      [name]: value
    }));
  };

  const handleAddComment = event => {
    event.preventDefault();
    if (newComment.author && newComment.text) {
      const updatedComments = [...comments, { ...newComment, id: Date.now() }];
      setComments(updatedComments);
      setNewComment({ author: '', text: '' });
    }
  };

  return (
      <div style={{margin:'20px'}}>
        <h1>Complex JSX Element</h1>
        <p>This techub is about complex JSX element example.</p>

        <h2>Comments</h2>
        <ul className="comments">
          {comments.map(comment => (
              <li key={comment.id} className="comment">
                <h3>{comment.author}</h3>
                <p>{comment.text}</p>
              </li>
          ))}
        </ul>

        <h2>Add a New Comment</h2>
        <form onSubmit={handleAddComment}>
          <div>
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={newComment.author}
                onChange={handleInputChange}
            />
          </div>
          <div style={{marginTop:'10px'}} >
            <label htmlFor="text">Comment:</label>
            <textarea
                id="text"
                name="text"
                value={newComment.text}
                onChange={handleInputChange}
            />
          </div>
          <button  style={{marginTop:'10px',color:'green',border:'2px solid black',fontSize:'20px'}} type="submit">Add Comment</button>
        </form>
      </div>
  );
}

export default App;
