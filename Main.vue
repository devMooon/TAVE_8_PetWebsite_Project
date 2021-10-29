<template>
    <html lang="ko">
<head>
    <title>Login</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light"  id="mainNav" style="background-color: #e3f2fd;">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><i class="fas fa-paw"></i>&nbsp;&nbsp; 멍냥</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#">Main</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                예약하기
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"><i class="far fa-hospital"></i>&nbsp;&nbsp; 병원</a>
                                <a class="dropdown-item" href="#"><i class="far fa-user"></i>&nbsp;&nbsp; 미용실</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-hotel"></i>&nbsp;&nbsp; 호텔/유치원</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-coffee"></i>&nbsp;&nbsp; 카페</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">기타</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                커뮤니티
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">노하우 공유</a>
                                <a class="dropdown-item" href="#">경험 공유</a>
                                <a class="dropdown-item" href="#">멍냥 자랑</a>
                                <a class="dropdown-item" href="#">질문 게시판</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                나의 프로필
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">나의 프로필</a>
                                <a class="dropdown-item" href="#">나의 예약현황</a>
                                <a class="dropdown-item" href="#">내가 쓴 글</a>
                                <a class="dropdown-item" href="#">내가 쓴 댓글</a>
                            </div>
                        </li>
                </ul>
                
                <form class="form-inline my-2 my-lg-0">
                    <a class="nav-link btn btn-outline-secondary btn-sm my-2 my-sm-0 mr-1" href="login.html" style="font-size: 5px;">로그인</a>
                    <a class="nav-link btn btn-outline-secondary btn-sm my-2 my-sm-0 mx-1" href="login.html" style="font-size: 5px;">회원가입</a> 
                </form>
            </div>
        </div>
    </nav>

    <div class="container">
        <div style="height: 150px;"></div>
        <h1 class="text-center mb-5">로그인</h1>
        <div class="row my-3 justify-content-around">
            <button class="btn btn-outline-secondary" style="font-size: 15px; width: 400px;">
                <img src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg" alt="" style="width: 25px;">&nbsp;&nbsp;
                Google로 로그인
            </button>
        </div>
        <div class="row my-3 justify-content-around">
            <button class="btn btn-outline-secondary" style="font-size: 15px; width: 400px;">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAxzz///8AxjcAxCZQ0Gjc9N/m9+jR8dbQ9Ntp2YMAxjgAxCwAxTAAxTP7//3p+Osfy01R1HC068Hx/PTL8tVIz2O77cfF7ct/3pXX9d8Awx+L4aA70F+Y5KlJ0mqn6LcszVWh5rB024yH4Jtg2oBa1Xau6bwozVMQgS/cAAACxklEQVR4nO3c7W7aQBBG4Vm7QPGabwqBkBSSpr3/O6yUKi0EbK8NjTKvzvPbWnHixWInks0AAAAAAAAAAAAAAAAAAAAAAAAAQEORJ4kJS8WbrXRLxbdFP8FknjcuFVeTlJXWH5yYfQlphmXTUvnXpIV6zX+rm0ouHE+LhqW8F4Zl0010XxjuGhL9FzbtU/+FYbOtXUqgMNzXPugVCsMuq1lKonAzqllKojA81OxTjcLwWH0XRQr78oXhe+UHVCkMs6q7KFM4sYqfNjKFYV7xPNUprDoqChUuLu9TocKwuvgTXKkwPF3ap1KFF4+KUoVheeF5qlUY7s4TxQrH+7Ojolhh2JzdRLXC85GGXOHZSEOvsPfuJuoVhsNpomDhu6OiYmE/O/5po1h4OtKQLDzZp5qFx0dFzcLjkYZo4dFIQ7Xw3z5VLQzrt08sW/h3pKFb+DbS0C0My1y9MDxH9cLx61FRuTBsSvXC15GGdmHYZ+qF/VK9MByiemGYbdUL+87v4aT5ksPSdeGPRfM1CZd85sKXtOv8Fg63P9ULS0v4KrouHI0e1QstP6gXWt5XL8x26oUWH9QLrdyoF2a7sXihxWf1wtRjruPCwq7dp5+90Mon9UKLa/XCYpp2DvRbaOVQvdDyuXphMbpmn3ootNE1Iw0XhRavGGn4KCyy7kdFH4U2mqkXXjHS8FJoses+dVPYeaThptDivXqhld2Oio4KO440HBV2HGl4KrRt2n8MHRd2Gmm4Kuw00vBVaHGlXthhpOGssMNIw1th+5GGu8Iia7lP3RW2Pir6K2x7VHRYWBStjooOC1vuU4+FFg/qhRZ76oXZL/XCNiMNp4UtRhpeC7N96lHRa6HFO/VCyxNHGh9dWOx6gwSbl7r3ev5ZaZqy0GBQ9TK0/ybxjeWNgTd99zkAAAAAAAAAAAAAAAAAAAAAAAAACb8BlaxF0SY61+4AAAAASUVORK5CYII=" alt="" style="width: 25px;">&nbsp;&nbsp;
                Naver로 로그인
            </button>
        </div>
        <div class="row mt-3 mb-5 justify-content-around">
            <button class="btn btn-outline-secondary" style="font-size: 15px; width: 400px;">
                <img src="https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT.jpg" alt="" style="width: 25px;">&nbsp;&nbsp;
                Kakao로 로그인
            </button>
        </div>
        <div style="height: 50px;"></div>
        <hr>
        <div class="row mt-4 mb-5 justify-content-around">
            <span style="font-size: 15px;" >또는 이메일로 로그인</span>
        </div>

        <form>
            <div class=" row mx-5 justify-content-around">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1" style="font-weight: 900;">이메일</label>
                        <input type="email" placeholder="이메일을 입력하세요." class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style="font-weight: 900;">비밀번호</label>
                        <input type="password" placeholder="비밀번호를 입력하세요." class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1" style="font-size:15px;">아이디 기억하기</label>
                    </div>
                    <div class="row my-5 justify-content-around">
                        <button class="btn btn-primary" type="submit" style="font-size: 15px; width: 300px;">
                            로그인
                        </button>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        </form>
        <hr>
        <div class=" row mx-5 justify-content-around">
            <div class="col-3"></div>
            <div class="col-6">
                <a class="row my-3" style="font-size:medium; color: rgb(3, 146, 22);">멍냥이 처음이신가요? ...</a>
                <a class="row my-3" style="font-size:medium; color: rgb(3, 146, 22);">비밀번호를 잊으셨나요? ...</a>
            </div>
            <div class="col-3"></div>
        </div>
        
        <div style="height: 150px;"></div>
    </div>
    
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; 개발자 : 김현지 나림 문서연 박혜린 최수정 </p></div>
    </footer>

</body>
</html>
</template>
<script>
export default {
    name: "main",
};
</script>
