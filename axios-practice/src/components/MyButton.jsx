

export default function MyButton({clickHandler, text}){

    return ( 
    <>
        <button style={{color : 'plum', backgroundColor : 'whitesmoke', border : '3px solid whitesmoke', margin : '1rem'}} 
                onClick={clickHandler}>{text}</button>
        {/* <p>{data.r1}</p> */}
    </>
    );

}