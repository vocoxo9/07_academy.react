import { useState } from 'react';
import CounterFunction from './components/CounterFunction';
import CounterClass from './components/CounterClass';

function App() {
  const [kind, setKind] = useState();

  return (
    <div>
      <h1>컴포넌트 : 리액트 앱의 구성 단위</h1>
      <button onClick={()=>{setKind('function')}}>함수형 컴포넌트</button>
      <button onClick={()=>{setKind('class')}}>클래스형 컴포넌트</button>

      {/* kind 상태에 따라 컴포넌트 내용을 표시 */}
      {/* {
        kind === 'function' ? <CounterFunction/> : <CounterClass />
      } */}
      
      { kind === 'function' && <CounterFunction /> }
      { kind === 'class' && <CounterClass /> }
      {/* <CounterFunction /> */}
      {/* <CounterClass /> */}
    </div>
  );
}

export default App;
