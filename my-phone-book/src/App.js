import './App.css';
import PhoneInput from './components/PhoneInput';
import PhoneList from './components/PhoneList';
import { useState } from 'react';
import PhoneContext from './contexts/PhoneContext';

/*
  * 리액트에서는 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트의 상태를 직접 변경할 수 없다.
    따라서, 하위 컴포넌트에서 발생한 이벤트를 상위 컴포넌트에서 처리하도록 하는
           상태 끌어올리기 패턴을 사용한다. (State lifting up)

  * Props를 통해 데이터가 전달될 때 하위 컴포넌트에서 필요하지 않은 props를 계속
    전달해야 하는 상황이 발생된다. (props drilling, 상태 내리꽂기)
    > 단점 : 코드의 가독성이 떨어지고, 유지보수성을 떨어뜨릴 수 있다.
      --> 이를 해결하기 위해 React Context 또는 Redux 와 같은 
                            상태 관리 라이브러리를 사용하기도 한다.
*/
function App() {
  const [list, setList] = useState([]);

  const addPhone = (data) => {

    setList([...list, data]);
    // 전개 연산자 (...) : 기존 배열(객체) 내용을 복사하고,
    //                    그 뒤에 새 항목을 추가함
  }

  return (
    <div>
      <h2>My Phone Book</h2>
      {/* 2. 하위 컴포넌트에 전역 상태를 전달하기 위한 Provider 추가 */}
      <PhoneContext.Provider value={{ list, addPhone }}>
        {/*<PhoneInput addPhone={addPhone} />*/}
        <PhoneInput />
        <hr />
        {/* <PhoneList list={list} /> */}
        <PhoneList />
      </PhoneContext.Provider>
    </div>
  );
}

export default App;