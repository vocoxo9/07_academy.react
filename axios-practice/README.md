# axios-practice
통신 연습 프로젝트

## dependency 추가
- react-router-dom : 라우팅 관련 라이브러리  
(2025-04-24)
- axios : 통신 관련 라이브러리  
(2025-04-24)


---

## Memo
- HTTP 통신 : HTTP를 기반으로 클라이언트와 서버 간의 데이터 통신
    > HTTP(Hyper Text Transfer Protocol) : 웹에서 사용되는 통신 프로토콜(규약)  
     : 브라우저(클라이언트)가 서버로 요청을 보내고, 서버는 그에 해당하는 응답을 돌려주는 구조
    - HTTP Method (요청 방식)
        - GET : 조회
        - POST : 생성
        - PUT : 전체 수정
        - PATCH : 부분 수정
        - DELETE : 삭제
    - HTTP Request (요청) 구성 요소
        - URL : 요청 주소
        - Method : 요청 방식
        - Headers : 요청 정보 (인증)
        - Body : 요청 시 전달 데이터(POST, PUT, PATCH 방식에서 사용)
    - HTTP Response (응답) 구성 요소
        - status : 응답 상태 코드 (200 : 정상, 400~ : 요청오류, 500~ : 서버오류)
        - headers : 응답 정보
        - body : 응답 데이터

---

- Promise : 비동기 작업에 대한 완료 또는 실패 결과를 나타내는 객체
    - 비동기 작업이 수행되는 메소드에서 동기처리가 된 것과 같이 값을 반환하는 객체
    - 작업에 대한 결과를 제공한다라는 의미로서 promise를 반환
        - promise 상태 : pending, fulfilled, rejected
            - pending (대기) : 초기 상태. promise가 진행 중이며 아직 완료되지 않음
            - fulfilled (완료) : 작업이 성공적으로 완료된 상태 (결과 값을 반환)
            - rejected (거부) : 작업이 실패된 상태 (오류를 반환)

---

- axios : Promise 기반의 HTTP 통신 라이브러리
    - 비동기 통신을 처리, RESP API 통신 시 자주 사용
    - 주요 메소드
        - GET 요청 : 데이터를 요청 (조회)
            > axios.get(url)
        - POST 요청 : 데이터를 전송 (생성)
            > axios.post(url, data)
        - PUT 요청 : 기존 데이터를 수정 (갱신)
            > axios.put(url, data)  
            > axios.patch(url, data)
        - DELETE 요청 : 기존 데이터를 삭제
            > axios.delete(url)
    - 요청 헤더, 쿼리 파라미터, 타임아웃 등 다양한 옵션 설정 가능
    - promise를 반환하기 때문에 then()/catch()를 사용하거나 async/await 방식 사용
