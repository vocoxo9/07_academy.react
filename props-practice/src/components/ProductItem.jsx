
function ProductItem({name, price, isSale}) {
// function ProductItem(props){
// props.name, props.price, props.isSale 등으로 갖다 써야함

    return (
        <div style={{border : '1px solid skyblue', padding : '2rem', margin : '2rem'}}>
            <h3>{name}</h3>
            <p>{price}</p>
            {isSale && "세일 중"}
        </div>
    );
}

export default ProductItem;