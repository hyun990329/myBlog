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

  // Modal 페이지의 노출 작업
  const [modal, setModal] = useState(false);

  // 직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, setCurrentIndex] = useState(null);

  // 제목 클릭 시 모달 보이기
  function handleTitle(index) {
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 변동 없어야 함
    if(! modal) {
      // 1. 현재 모달이 닫혀 있으면 연다
      setModal(true);
      setCurrentIndex(index);
    } else if(currentIndex == index) {
      // 2. 같은 타이틀이 선택 된 경우
      setModal(false);
    } else {
      setCurrentIndex(index);
      
    }
  }


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
       {title.map((item, index)=>{
        
        return(
        <div>
          <h4 onClick={()=> handleTitle(index)}>
            {title[index]}
            <span onClick={()=>{
                const newLikes = [...like]
                newLikes[index]++
                setLike(newLikes)
        }}>👍</span>{like[index]}
        </h4>
        <p>작성일 : {createDate[index]}</p>)
        </div>
       )})}
      </div>  

      

        {/* 상세 페이지 나타날 곳 */}
        {modal ? <Modal />: null}
    </div>
  )
}

export default App
