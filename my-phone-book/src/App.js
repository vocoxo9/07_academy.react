import PhoneInput from "./components/PhoneInput";

function App() {
  return (
    <div className="App">
      <h2>My Phone Book</h2>
      <PhoneInput />
      <hr />
      
    <table>
      <thead>
        <th>이름</th>
        <th>연락처</th>
      </thead>
      <tbody>
        연락처가 없을 경우 "저장된 연락처가 없습니다." 출력
      </tbody>
    </table>
    </div>
  );
}

export default App;
