import { Component } from 'react';

class CounterClass extends Component{
    // 생성자 정의
    constructor(props){     // 부모 컴포넌트로부터 전달된 데이터를 담은 객체
        super(props);       // 부모클래스(component)의 생성자를 호출
        this.state = {count : 0};
        // => state 필드에 객체를 초기화(상태를 관리하는 객체)
    }

    // function handlerClick() {}
    handlerClick = () => {
        // 상태를 변경(업데이트) --> setState 메소드 사용
        this.setState({count : this.state.count + 1});
    }

    // * 생명주기
    // - 처음 렌더링된 시점 (컴포넌트가 생성되었을 때)
    componentDidMount(){
        console.log("componentDidMount:::");
    }

    // - 상태가 변경되었을 때
    componentDidUpdate(){
        console.log("componentDidUpdate:::");
    }

    // - 해당 컴포넌트가 소멸될 때
    componentWillUnmount(){
        console.log("componentWillUnmount:::")
    }
    render(){
        return (
            <div>
                <h2>클래스형 컴포넌트</h2>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handlerClick}>+</button>
            </div>
        );
    }    
}

export default CounterClass;