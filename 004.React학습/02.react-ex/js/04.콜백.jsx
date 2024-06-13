// 04.콜백 : useCallback

// 축구선수에게 좋아요 표시하는 컴포넌트
function MarkLike() {
    console.log("MarkLike컴포넌트 랜더링");
  // 세명의 선수에 대한 좋아요 상태관리 변수
  const [son, setSon] = React.useState(false);
  const [danaka, setDanaka] = React.useState(false);
  const [lee, setLee] = React.useState(false);
  /*********************************************** 
      [ 리액트 성능 최적화를 위한 문제인식!!! ]
      -> 하나의 버튼 클릭시 하나만 변경됨에도 불구하고
      모든 버튼이 새롭게 업데이트 되어 화면에 리랜더링됨
      이때 호출되는 함수도 새로 만들어져서 호출됨!
      -> 이게 효율성과 최적화에 문제로 나타남!!!
      어떻게 기존에 만들어진 함수를 다시 로딩하지 않을 수 있지?
      방법은 바로 >>> 메모이제이션 !!! <<<
      ->>> useCallback() 사용!
      
      - 아래와 같이 의존성변수를 등록하여 변경여부에 따라
      함수를 기존에 로딩한 것으로 재사용!!! 해주는것이
      useCallback이다!!!
  
      const [의존성변수, set의존성변수] = useState(초기값);
      const 콜백 = useCallback(() => {}, 
      [의존성변수]);
  
    ***********************************************/
  // 코드리턴 /////////////////
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "70px",
          color: "hotpink",
          textShadow: "5px 5px 2px #555",
        }}
      >
        좋아요~! 부탁해요!!
      </h1>
    </div>
  );
} ///////////// MarkLike 컴포넌트 ////////////
/// 좋아요 서브 컴포넌트 /////////
const ShowLike = ({ name, sts, fn }) => {
  // name - 선수명 / sts - 상태변수 / fn - 변경함수
  console.log({ name, sts });
  // 코드리턴 ////////////
  return (
    <div style={{ padding: "10px" }}>
      <button onClick={fn} style={{ fontSize: "100px" }}>
        {name} {sts ? "👍" : "👎"}
      </button>
    </div>
  );
}; ///////// ShowLike 컴포넌트 /////////////
// 컴포넌트 출력하기 ///////
ReactDOM.render(<MarkLike />, document.querySelector("#root"));
