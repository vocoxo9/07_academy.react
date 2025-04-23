
function Join() {
    return (
        <>
            <div class="outer">
                <br /><br />
                <div class="inner-area">

                    <h2>회원가입</h2>
                    <br />
                    <form action="" method="post">

                        <div class="form-group">
                            <label for="userId">* ID </label>
                            <input type="text" class="form-control mb-3" name="" id="userId" placeholder="Enter ID.." required />

                            <label for="userPwd">* Password </label>
                            <input type="password" class="form-control mb-3" name="" id="userPwd" placeholder="Enter Password.."
                                required />

                            <label for="checkPwd">* Password Check </label>
                            <input type="password" class="form-control mb-3" id="checkPwd" placeholder="Enter Password.."
                                required />

                            <label for="userName">* Name </label>
                            <input type="text" class="form-control mb-3" name="" id="userName" placeholder="Enter Name.."
                                required />

                            <label for="email"> &nbsp; Email </label>
                            <input type="email" class="form-control mb-3" name="" id="email" placeholder="Enter Email.." />

                            <label for="age"> &nbsp; Age </label>
                            <input type="number" class="form-control mb-3" name="" id="age" placeholder="Enter Age.." />

                            <label for="phone"> &nbsp; Phone </label>
                            <input type="tel" class="form-control mb-3" name="" id="phone" placeholder="Enter Phone(-제외).." />

                            <label for="address"> &nbsp; Address </label>
                            <input type="text" class="form-control mb-3" name="" id="address" placeholder="Enter Address.." />

                            <label for=""> &nbsp; Gender</label> &nbsp;&nbsp;
                            <input type="radio" class="mb-3" name="" id="Male" value="M" />
                            <label for="Male">남자</label> &nbsp;&nbsp;
                            <input type="radio" class="mb-3" name="" id="Female" value="F" />
                            <label for="Female">여자</label><br />

                        </div>
                        <br />
                        <div class="btns" align="center">
                            <button type="submit" class="btn">회원가입</button>
                            <button type="reset" class="btn">초기화</button>
                        </div>
                    </form>
                </div>
                <br /><br />
            </div>
        </>
    );
}

export default Join;


