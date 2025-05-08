import './input.css'
/*
export default function Input({ type, value, placeholder, className }) {
    return (
        <input type={type} value={value} placeholder={placeholder} className={className} />
    )
}
*/

export default function Input(props) {
    return (
        <input {...props} />
    )
}