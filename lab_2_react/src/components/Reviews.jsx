import { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const variant = 18; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="card-custom">
      <h2 className="title-blue"> ВІДГУКИ РОБОТОДАВЦІВ</h2>
      <div className="reviews-list">
        {comments.map(c => (
          <div key={c.id} className="review-item">
            <b className="review-email">{c.email}</b>
            <p className="review-body">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}