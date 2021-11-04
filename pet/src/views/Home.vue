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
                                <img src="https://i.ytimg.com/vi/rPluY7E6wbU/maxresdefault.jpg" class="card-img-top img-fluid"  style="height: 220px; border-radius: 5px;" alt="...">
                            </div>
                        </div>
                        
                        <div class="card-body">
                            <b-button class="mx-2 float-right" size="sm" variant="warning" href="#">자세히 보기</b-button>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5">
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

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1024x408&t=inside">
                                    <b-button disabled pill variant="warning">Best</b-button>
                                    <h2>땡땡 동물병원</h2>
                                </b-carousel-slide>
                                
                                <b-carousel-slide img-src="https://cocotimes.kr/wp-content/uploads/2019/11/tica114m17080929_l.jpg">
                                    <b-button disabled pill variant="warning">Best</b-button>
                                    <h2>예쁜 미용실</h2>
                                </b-carousel-slide>

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside">
                                    <b-button disabled pill variant="warning">Best</b-button>
                                    <h2>호텔/유치원</h2>
                                </b-carousel-slide>

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside">
                                    <b-button disabled pill variant="warning">Best</b-button>
                                    <h2>카페</h2>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>

                    <div class="row my-lg-3 my-sm-5">
                        <div>
                            <b-card no-body>
                                <b-tabs card>
                                    <b-tab title="예약현황" active>
                                        <b-card-text>
                                            <div><b-button pill disabled size="sm" variant="info" class="my-1">D-6</b-button>&nbsp;&nbsp;&nbsp;땡땡 병원</div>
                                            <div><b-button pill disabled size="sm" variant="info" class="my-1">D-6</b-button>&nbsp;&nbsp;&nbsp;멍냥 카페</div>
                                            <div><b-button pill disabled size="sm" variant="info" class="my-1">D-6</b-button>&nbsp;&nbsp;&nbsp;예쁜 미용실</div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="새로생긴 가게">
                                        <b-card-text>네모네모 카페 오픈!!</b-card-text>
                                    </b-tab>
                                    <b-tab title="최근 본 가게">
                                        <b-card-text>동그라미 병원</b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
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
/*methods: {
    onSlideStart(slide) {
    this.sliding = true
    },
    onSlideEnd(slide) {
    this.sliding = false
    }
}*/
}
</script>