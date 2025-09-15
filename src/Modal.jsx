// 컴포넌트로 구조를 분리하는 순서
// 1. 해당 컴포넌트 파일을 생성 (jsx)
// 2. function Modal(){return(<></>)} 구조를 만든다
// 3. export default 컴포넌트명
// 4. 사용하고자 하는 컴포넌트에서 import Modal from '위치'
// 5. <Modal /> 로 사용


// props drilling 방식
function Modal({color, title, currentIndex, createDate, details}) {
  return[
        <div className='modal' style={{background: color}}>
          <h4>{title[currentIndex]}</h4>
          <p>{createDate[currentIndex]}</p>
          <p>{details[currentIndex]}</p>
        </div>
  ]
}

export default Modal;