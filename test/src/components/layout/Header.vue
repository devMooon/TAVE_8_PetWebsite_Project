<template>
    <!-- navbar -->
        <b-navbar class="fixed-top bg-white topbar mb-4 static-top" toggleable="lg" type="light" style="background-color: #f3f3f3;">
        <b-container class="bv-example-row">
            <b-navbar-brand href="/">멍냥</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
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
                        <b-dropdown-item href="/Mypage">나의 프로필</b-dropdown-item>
                        <b-dropdown-item href="#">나의 예약현황</b-dropdown-item>
                        <b-dropdown-item href="#">내가 쓴 글</b-dropdown-item>
                        <b-dropdown-item href="#">내가 쓴 댓글</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav class="ml-5">
                    <span><b-form-input size="sm" class="ml-2" placeholder="Search"></b-form-input></span>
                    <span><b-button size="sm" type="submit"><font-awesome-icon icon="search" /></b-button></span>
                    <span><b-button size="sm" type="submit" variant="outline-secondary" href="/Login" style="font-size:10px">로그인</b-button></span>
                    <span><b-button size="sm" type="submit" variant="outline-secondary" href="/Signup" style="font-size:10px">회원가입</b-button></span>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: "header",
}
</script>