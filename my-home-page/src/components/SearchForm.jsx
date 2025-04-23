

function SearchForm() {

    return (
        <>
            <form action="" class="search-form">
                <div class="select">
                    <select name="condition" id="" class="custom-select form-select">
                        <option value="writer">작성자</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                    </select>
                </div>
                <div class="text text-sm">
                    <input type="text" class="form-control" name="keyword" />
                </div>
                <button class="btn-search btn">검색</button>
            </form>
        </>
    );
}

export default SearchForm;