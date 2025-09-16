function Blog({ posts, handleLike, handleTitle, sortPosts }) {
  return (
    <div className="blog-container">
      <button onClick={sortPosts}>글 정렬하기</button>
      <div className="list">
        {posts.map((post, index) => (
          <div key={index}>
            <h4 onClick={() => handleTitle(index)}>
              {post.title}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(index);
                }}
              >
                {' '}
                👍
              </span>{' '}
              {post.like}
            </h4>
            <p>작성일: {post.createDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;