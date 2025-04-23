import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";

function NoticeList() {

    return (
        <>
            <div class="outer">
                <br /><br />
                <div class="innerOuter" style={{padding : '5% 10%'}}>
                    <h2>공지사항</h2>
                    <br />

                    <a href="" class="btn" style={{float : 'right'}}>글쓰기</a>
                    <br />

                    <br />
                    <table class="table table-hover notice-list" align="center">
                        <thead>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>마지막 공지사항 제목</td>
                                <td>admin</td>
                                <td>2024-04-01</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>공지사항 제목 4</td>
                                <td>admin</td>
                                <td>2024-03-21</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>공지사항 제목 3</td>
                                <td>admin</td>
                                <td>2024-03-07</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항 제목 2</td>
                                <td>admin</td>
                                <td>2024-02-22</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>공지사항 제목 1</td>
                                <td>admin</td>
                                <td>2024-01-07</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <Pagination />

                    <br clear="both" />

                    <SearchForm />
                </div>
                <br /><br />
            </div>
        </>
    );
}

export default NoticeList;


