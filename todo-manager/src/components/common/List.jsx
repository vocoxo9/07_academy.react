import '../../assets/list.css';

export default function List() {

    return (
        <div className="list">
            <div className="list-left">
                <p>스프링과 친해지기</p>
            </div>
            <div className="list-right">
                <button id="complete">V</button>
                <button id="incomplete">X</button>
            </div>
        </div>
    );
}