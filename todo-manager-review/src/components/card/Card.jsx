import './card.css';

export default function Card({ children }) {
    return (
        <div className="card-area">
            {children}
        </div>
    )
}