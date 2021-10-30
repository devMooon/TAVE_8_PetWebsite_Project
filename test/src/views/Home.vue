<template>
<!-- Page header with logo and tagline-->
    <div>
        <header class="pt-5 pb-3 bg-light border-bottom">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">멍냥 사이트</h1>
                    <p class="lead mb-0">멍냥 호텔예약과 병원예약을 한번에! 간편한 예매를 경험 해보세요</p> 
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row my-5 justify-content-around">
                <div class="col-lg-7">
                    <div class="card">
                        <div class="card-header">
                            <div class="row my-2 mx-3">
                                <h4 class="my-1" style="font-family: 'Gaegu'"><span>10</span>월 <span>10</span>일 <span>일</span>요일</h4>
                            </div>                      
                        </div>
                            
                        <div class="container mt-3">
                            <div>
                                <img src="image/그림일기.png" class="card-img-top img-fluid"  style="height: 220px; border-radius: 5px;" alt="...">
                            </div>
                        </div>
                        
                        <div class="card-body">
                            
                            <a class="btn btn-warning btn-sm mr-2" style="font-family:'Gaegu';" href="#">일기 수정하기</a>
                            <a class="btn btn-warning btn-sm" style="font-family:'Gaegu';" href="#">일기 쓰러 가기</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5">  
                    <div class="row my-lg-0 my-sm-5">
                        <div style="border: 1px solid rgb(218, 218, 218); border-radius: 5px;">
                            <div>
                                <b-carousel
                                id="carousel-1"
                                v-model="slide"
                                :interval="4000"
                                controls
                                indicators
                                background="#ababab"
                                img-width="1024"
                                img-height="480"
                                style="text-shadow: 1px 1px 2px #333;"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                                >
                                <!-- Text slides with image -->
                                <b-carousel-slide
                                    caption="First slide"
                                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                    img-src="https://picsum.photos/1024/480/?image=52"
                                ></b-carousel-slide>

                                <!-- Slides with custom text -->
                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside">
                                    <h1>Hello world!</h1>
                                </b-carousel-slide>

                                <!-- Slides with image only -->
                                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                                <!-- Slides with img slot -->
                                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                                <b-carousel-slide>
                                    <template #img>
                                    <img
                                        class="d-block img-fluid w-100"
                                        width="1024"
                                        height="480"
                                        src="https://picsum.photos/1024/480/?image=55"
                                        alt="image slot"
                                    >
                                    </template>
                                </b-carousel-slide>

                                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                    </p>
                                </b-carousel-slide>
                                </b-carousel>
                                
                                <div>
                                    <h5><span class="badge badge-warning">Best</span> 땡땡 동물병원<b-badge>New</b-badge></h5>
                                    <p class="my-1"><span style="font-size: small;">4.3 ★★★★☆</span></p>
                                    <p style="font-size: small;">경기도 용인시 수지구 성복1로 62 KCC스위첸 101동 111, 112호.</p>
                                </div>
 
                                <p class="mt-4">
                                Slide #: {{ slide }}<br>
                                Sliding: {{ sliding }}
                                </p>
                            </div>

                            <div id="carouselExampleCaptions" class="carousel justify-content-around" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="container">
                                            <div class="row my-3 mx-3">
                                                <div class="col-6">
                                                    <img src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside" class="d-block img-fluid" alt="...">
                                                </div>
                                                <div class="col-6">
                                                    <b-badge pill variant="warning">Best</b-badge>                              
                                                    <h5><b-badge pill variant="warning">Best</b-badge>땡땡 동물병원</h5>
                                                    <p class="my-1"><span style="font-size: small;">4.3 ★★★★☆</span></p>
                                                    <div style="font-size: small;">경기도 용인시 수지구 성복1로 62 KCC스위첸 101동 111, 112호.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="container">
                                            <div class="row my-3 mx-3">
                                                <div class="col-6">
                                                    <img src="https://cocotimes.kr/wp-content/uploads/2019/11/tica114m17080929_l.jpg" class="d-block img-fluid" alt="...">
                                                </div>
                                                <div class="col-6">                                                        
                                                    <h5><span class="badge badge-warning">Best</span> 미용실</h5>
                                                    <p class="my-1"><span style="font-size: small;">4.3 ★★★★☆</span></p>
                                                    <div style="font-size: small;">경기도 용인시 수지구 성복1로 62 KCC스위첸 101동 111, 112호.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="container">
                                            <div class="row my-3 mx-3">
                                                <div class="col-6">
                                                    <img src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside" class="d-block img-fluid" alt="...">
                                                </div>
                                                <div class="col-6">                                                        
                                                    <h5><span class="badge badge-warning">Best</span> 호텔/유치원</h5>
                                                    <p class="my-1"><span style="font-size: small;">4.3 ★★★★☆</span></p>
                                                    <div style="font-size: small;">경기도 용인시 수지구 성복1로 62 KCC스위첸 101동 111, 112호.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="container">
                                            <div class="row my-3 mx-3">
                                                <div class="col-6">
                                                    <img src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside" class="d-block img-fluid" alt="...">
                                                </div>
                                                <div class="col-6">                                                        
                                                    <h5><span class="badge badge-warning">Best</span> 카페</h5>
                                                    <p class="my-1"><span style="font-size: small;">4.3 ★★★★☆</span></p>
                                                    <div style="font-size: small;">경기도 용인시 수지구 성복1로 62 KCC스위첸 101동 111, 112호.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon ml-0 pl-0" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row my-lg-3 my-sm-5">
                        <div style="border: 1px solid rgb(218, 218, 218); border-radius: 5px; width: 600px;">
                            <div class="row my-3 mx-3">
                                <b-nav tabs>
                                    <b-nav-item role="tab" active>예약현황</b-nav-item>
                                    <b-nav-item role="tab">예약현황</b-nav-item>
                                    <b-nav-item role="tab">예약현황</b-nav-item>
                                    <b-nav-item role="presentation">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">새로 생긴 가게</a>
                                    </b-nav-item>
                                    <b-nav-item role="presentation">
                                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">최근 본 가게</a>
                                    </b-nav-item>
                                </b-nav>
                            </div>
                            <div class="row my-3 mx-3">
                                <div class="tab-content mt-3 ml-3" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="mb-2"><span class="badge badge-pill badge-primary">D-6</span>&nbsp;&nbsp;&nbsp;땡땡 병원</div>
                                        <div class="mb-2"><span class="badge badge-pill badge-secondary">D-10</span>&nbsp;&nbsp;&nbsp;멍냥 카페</div>
                                        <div class="mb-2"><span class="badge badge-pill badge-info">D-12</span>&nbsp;&nbsp;&nbsp;예쁜 미용실</div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">네모네모 카페 오픈!!</div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">동그라미 병원 This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:This is a great place to talk about your webpage.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
    slide: 0,
    sliding: null
    }
},
methods: {
    onSlideStart(slide) {
    this.sliding = true
    },
    onSlideEnd(slide) {
    this.sliding = false
    }
}
}
</script>