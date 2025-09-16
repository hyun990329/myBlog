import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import Header from './Header';
import Blog from './Blog';

function App() {
  const [posts, setPosts] = useState([
    { title: '남자 코트 추천', createDate: '2025-05-01', details: '심플한 디자인의 코트로 가을에 잘 어울림', like: 0 },
    { title: '강남 우동 맛집', createDate: '2025-06-01', details: '강남 우동의 찐 맛집! 먹어보진 않았음', like: 0 },
    { title: '자바 스터디', createDate: '2025-07-01', details: '자바 스터디는 말 만하고 못함', like: 0 },
  ]);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // 좋아요 증가 함수
  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].like += 1;
    setPosts(newPosts);
  };

  // 제목 클릭 시 모달 토글
  const handleTitle = (index) => {
    if (modal && currentIndex === index) {
      setModal(false); // 같은 제목 클릭 시 모달 닫기
    } else {
      setModal(true); // 다른 제목 클릭 시 모달 열기
      setCurrentIndex(index);
    }
  };

  // 글 정렬 함수
  const sortPosts = () => {
    const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    setPosts(sortedPosts);
  };

  return (
    <div className="app-container">
      <Header />
      <Blog posts={posts} handleLike={handleLike} handleTitle={handleTitle} sortPosts={sortPosts} />
      {modal && (
        <Modal
          color="lightblue"
          title={posts[currentIndex].title}
          createDate={posts[currentIndex].createDate}
          details={posts[currentIndex].details}
        />
      )}
    </div>
  );
}

export default App;