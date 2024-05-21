// [ 상품리스트 서브컴포넌트 : GoodsList ] //

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// console.log(guData);

export default function GoodsList({ viewDetail, updateIdx }) {
  // viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // updateIdx - 부모컴포넌트의 setIdx 상태관리변수의 메서드
  // 코드리턴구역 ////////////////
  return (
    <ul>
      {
        // 반복요소 li에 key속성을 쓸것을
        // 리액트는 필수적이라고 함!
        // 어디에 쓰나? 업데이트시 순번구분을 위함
        // node.js개발환경에서는 안쓰면 에러남!
        guData.map((v, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                // a요소 기본이동막기
                e.preventDefault();
                // 상태변수 viewList 업데이트
                // setViewList메서드가 viewDetail로 들어옴
                viewDetail(false);
                // setIdx메서드가 updateIdx로 들어옴
                updateIdx(i);
              }}
            >
              <ol className="glist">
                <li>
                  <img src={`./images/vans/vans_${v.idx}.jpg`} alt="신발" />
                </li>
                <li>{v.gname}</li>
                <li>가격 : {v.gprice}원</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} //////////// GoodsList 컴포넌트 //////////
