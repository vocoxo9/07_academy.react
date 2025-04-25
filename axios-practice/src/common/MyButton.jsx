export default function MyButton({ clickHandler, text }) {
    return (
        <button style={{ color: 'red', backgroundColor: 'white' }} 
                onClick={clickHandler}>{text}</button>
    );
}