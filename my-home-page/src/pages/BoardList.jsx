
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";


function BoardList() {
    return (
        <>
            <div class="outer">

                <br /><br />
                <div class="inner-area" style={{padding: '5% 10%'}}>
                    <h2>자유 게시판</h2>
                    <br />

                    <a href="" class="btn" style={{float : 'right'}}>글쓰기</a>
                    <br />

                    <br />
                    <table class="list-area table table-hover" align="center">
                        <thead>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>작성일</th>
                            <th>첨부파일</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>마지막 공지사항 제목</td>
                                <td>admin</td>
                                <td>10</td>
                                <td>2024-04-01</td>
                                <td>■</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>공지사항 제목 4</td>
                                <td>admin</td>
                                <td>10</td>
                                <td>2024-03-21</td>
                                <td>■</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>공지사항 제목 3</td>
                                <td>admin</td>
                                <td>30</td>
                                <td>2024-03-07</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항 제목 2</td>
                                <td>admin</td>
                                <td>50</td>
                                <td>2024-02-22</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>공지사항 제목 1</td>
                                <td>admin</td>
                                <td>130</td>
                                <td>2024-01-07</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <Pagination />

                    <br clear="both" />

                    <SearchForm />
                    <br /><br />
                </div>
                <br /><br />
            </div>
        </>
    );
}

export default BoardList;
