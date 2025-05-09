import './logo.css';
export default function Logo({ multiple, big, className }) {
    return (
        <p className={`logo-area ${big ? " big": ""} ${className}`}>
            TODO {multiple && <br />}MANAGER
        </p>
    )
}