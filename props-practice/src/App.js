import ProductItem from "./components/ProductItem";

const productList = [
  {
    id : 1, name : '텀블러', price : 9000, isSale : false
  },
  {
    id : 2, name : '교과서', price : 13600, isSale : true
  },
  {
    id : 3, name : '아이패드', price : 520000, isSale : false
  }
];

// * Props Drilling
//   : 부모가 가지고 있는 데이터를 자식에게 전달하여
//     자식이 사용할 수 있도록 하는 것
function App() {
  return (
    <div>
        <h1>상품 목록</h1>
        <div style={{display : 'flex'}}>
          {/* 임의의 배열을 반복하여 컴포넌트에게 데이터를 전달 */}
          {/* productList 길이만큼 화면에 제품이름만 출력 */}
          {/* 
            대상객체.map(function(변수명){
              // 반복적으로 수행할 내용
            })
          */}
          {
            productList.map((item)=> {
              return (
                <ProductItem 
                key={item.id}
                name={item.name}
                price={item.price}
                isSale={item.isSale}
                />
              );
            })
          }
        </div>
    </div>
  );
}

export default App;
