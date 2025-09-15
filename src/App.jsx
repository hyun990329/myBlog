import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {

  // 데이터 바인딩
  let post = '강남 제육 맛집';
  const [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '자바 스터디'
  ]);
  const [createDate, setCreateDate] = useState([
    '2025-05-01',
    '2025-06-01',
    '2025-07-01'
  ]);

  // 좋아요 숫자를 보관할 스테이트
  const [like, setLike] = useState([0, 0, 0]);


  function changeTitle () {
    const newTitle = [...title]
    newTitle[0] = '여자 코트 추천'
    setTitle(newTitle)
  }

  // Modal 페이지의 노출 작업
  const [modal, setModal] = useState(false);


  return (
    <div className='App'>
      <div className='black-bg'>
        React + vite 로 만드는 블로그
      </div>
      {/* <h4 style={{color:'red', fontSize:'20px'}}>{post}</h4> */}

      {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle)
      }}>글 정렬하기</button>

      <div className='list'>
        <h4>{title[0]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[0]++
          setLike(newLikes)
        }}>👍</span>{like[0]}
        <button onClick={changeTitle}>변경</button>
        </h4>
        <p>작성일 : {createDate[0]}</p>
      </div>  

      <div className='list'>
       <h4>{title[1]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[1]++
          setLike(newLikes)
        }}>👍</span>{like[1]}</h4>
        <p>작성일 : {createDate[1]}</p>
      </div>
      
      <div className='list'>
        <h4>{title[2]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[2]++
          setLike(newLikes)
        }}>👍</span>{like[2]}</h4>
        <p>작성일 : {createDate[2]}</p>
      </div>

        {/* 상세 페이지 나타날 곳 */}
        {modal ? <Modal />: null}
    </div>
  )
}

export default App
