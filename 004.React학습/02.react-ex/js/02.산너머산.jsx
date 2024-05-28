// 산너머산 메인 컴포넌트

/********************************************** 
    1. props로 데이터를 전달하여 제목출력하기 
    -> props Down으로 데이터를 하위 컴포넌트에 전달
**********************************************/

// 스타일 객체
const cssObj = {
    padding: '20px',1
    borderRadius:'10px',
    width:'60%',
    margin:'20px auto',
    textAlign:'center',
    fontSize:'40px',
    color:'#fff',
    backgroundImage:'linear-gradient(to bottom,skyblue,navy)'
};

// 메인 컴포넌트 ////////////
function MyHome(){
    return <MyRoom aa="세계의 산" bb="🌄" cc={cssObj} />;
} /////// MyHome 컴포넌트 ///////////////
function MyRoom({aa,bb,cc}){
    return <MyBag cc={aa} dd={bb} cdata={cc} />;
} /////// MyRoom 컴포넌트 ///////////////

function MyBag({cc,dd,cdata}){
    return <MyEnd ee={cc} ff={dd} cdata={cdata} />;
} /////// MyBag 컴포넌트 ///////////////

function MyEnd({ee,ff,cdata}){
    return <div
    style={cdata}
    >🌞{ee + ff}</div>;
} /////// MyEnd 컴포넌트 ///////////////

// 화면출력 ///////////
ReactDOM.render(<MyHome />,
document.querySelector("#root1"));




/****************************************************** 
    2. 컨텍스트 프로바이더를 사용하여 산정보 셋팅하기
******************************************************/

// 메인 컴포넌트 ////////////
function 큰집(){
    // 코드 리턴구역 ///////
    return(<할아버지 />);
} ////////////// 큰집 ///////////////////

///// 서브컴포넌트 ////////
function 할아버지(){
    // 코드 리턴구역 ///////
    return(<아버지 />);
} ////////////// 할아버지 ///////////////////
function 아버지(){
    // 코드 리턴구역 ///////
    return(<아들 />);
} ////////////// 아버지 ///////////////////
function 아들(){
    // 코드 리턴구역 ///////
    return(<손녀 />);
} ////////////// 아들 ///////////////////
function 손녀(){
    // 코드 리턴구역 ///////
    return(<이야기 />);
} ////////////// 손녀 ///////////////////


