<template>
    <!-- navbar -->
    <div>
        <b-navbar class="navbar navbar-expand-lg fixed-top navbar-light bg-light"  id="mainNav" style="background-color: #e3f2fd;">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><i class="fas fa-paw"></i>&nbsp;&nbsp; 멍냥</a>
                <b-button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </b-button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <b-navbar-brand href="#">Main</b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item href="home.html">Home</b-nav-item>
                            <b-nav-item-dropdown text="예약하기" right>
                                <b-dropdown-item href="#"><i class="far fa-hospital"></i>&nbsp;&nbsp; 병원</b-dropdown-item>
                                <b-dropdown-item href="#"><i class="far fa-user"></i>&nbsp;&nbsp; 미용실</b-dropdown-item>
                                <b-dropdown-item href="#"><i class="fas fa-hotel"></i>&nbsp;&nbsp; 호텔/유치원</b-dropdown-item>
                                <b-dropdown-item href="#"><i class="fas fa-coffee"></i>&nbsp;&nbsp; 카페</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item-dropdown text="커뮤니티" right>
                                <b-dropdown-item href="#">노하우 공유</b-dropdown-item>
                                <b-dropdown-item href="#">경험 공유</b-dropdown-item>
                                <b-dropdown-item href="#">멍냥 자랑</b-dropdown-item>
                                <b-dropdown-item href="#">질문 게시판</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item-dropdown text="프로필" right>
                                <b-dropdown-item href="#">나의 프로필</b-dropdown-item>
                                <b-dropdown-item href="#">나의 예약현황</b-dropdown-item>
                                <b-dropdown-item href="#">내가 쓴 글</b-dropdown-item>
                                <b-dropdown-item href="#">내가 쓴 댓글</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-form>
                                <b-form-input size="sm" class="mr-sm-2" style="height: 30px;" placeholder="Search"></b-form-input>
                                <b-button size="sm" class="my-2 my-sm-0" style="color: black;" type="submit" href="#"><i class="fas fa-search"></i></b-button>
                            </b-nav-form>


                            <b-nav-item-dropdown text="Lang" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>


                            <form class="form-inline my-2 my-lg-0">
                                <a class="nav-link btn btn-outline-secondary py-1 px-2 btn-sm my-2 mr-lg-1 ml-lg-3 mb-sm-2" href="login.html" style="font-size: 5px;">로그인</a>
                                <a class="nav-link btn btn-outline-secondary py-1 px-2 btn-sm my-2 mb-sm-2" href="signup.html" style="font-size: 5px;">회원가입</a> 
                            </form>

                            <b-button pill href="login.html">로그인</b-button>
                            <b-button pill href="signup.html">회원가입</b-button>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
            </div>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: "header",
}
</script>