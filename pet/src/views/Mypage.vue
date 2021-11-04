<template>
    <b-container>
        <div style="height: 120px;"></div>
    <!-- Page Wrapper -->
    <div id="wrapper">
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <b-nav class="navbar navbar-expand navbar-light bg-white topbar mb-5 static-top shadow">
                    
                    <b-container>
                        <h4><b-avatar size="lg" class="mr-2"></b-avatar>문서연님의 마이페이지</h4>
                        <span><b-button size="sm" href="#" variant="primary">프로필 수정하기</b-button></span>
                    </b-container>
                </b-nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->
                

                    <!-- Content Row -->
                    <div class="row">
                        <h3 class="my-5">예약현황</h3>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" border-variant="info">
                                <b-card-body>
                                    <b-card-text class="row no-gutters align-items-center">
                                        <div class="col mr-2">                                                  
                                            <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                                            <strong class="primary">&nbsp;&nbsp;야옹이</strong>
                                            <div style="height: 15px;"></div>    
                                            <div><b-button pill variant="warning" size="sm">D-2</b-button> 10-11 15시 땡땡병원</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </b-card-text>
                                    <b-button size="sm" href="#" variant="primary">자세히 보기</b-button>
                                </b-card-body>
                            </b-card>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" border-variant="warning">
                                <b-card-body>
                                    <b-card-text class="row no-gutters align-items-center">
                                        <div class="col mr-2">                                                  
                                            <b-avatar src="https://image.news1.kr/system/hp/2019/1/20/3477555/dims/optimize/300/300" size="3rem"></b-avatar>
                                            <strong class="primary">&nbsp;&nbsp;멍멍이</strong>
                                            <div style="height: 15px;"></div>    
                                            <div><b-button pill variant="warning" size="sm">D-7</b-button> 10-25 12시 미용실</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </b-card-text>
                                    <b-button size="sm" href="#" variant="primary">자세히 보기</b-button>
                                </b-card-body>
                            </b-card>
                        </div>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" border-variant="success">
                                <b-card-body>
                                    <div style="height: 50px;"></div>
                                    <b-card-text class="row no-gutters align-items-center">
                                        예약 정보가 없습니다.
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" border-variant="success">
                                <b-card-body>
                                    <div style="height: 50px;"></div>
                                    <b-card-text class="row no-gutters align-items-center">
                                        예약 정보가 없습니다.
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>               
                    </div>

                    

                    <!-- Content Row -->
                    <div class="row">
                        <h3 class="my-5">일기쓰기</h3>
                        <!-- Content Column -->
                        <div class="col-lg-6 mb-4">

                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header">
                                    <div class="row my-2 mx-3">
                                        <h5 class="my-1">{{ value }}</h5>
                                    </div>                      
                                </div>
                                    
                                <div class="container mt-3">
                                    <div>
                                        <img src="https://i.ytimg.com/vi/rPluY7E6wbU/maxresdefault.jpg" class="card-img-top img-fluid" alt="...">
                                    </div>
                                </div>
                                
                                <div class="container card-body">
                                    <table border="1" class="table-bordered" style="text-align:center; border: 1px solid #444444; width:100%">                                            
                                        <tr :key="i" v-for="i in 4">
                                            
                                                <span :key="j" v-for="j in 10">
                                                    <td>{{ text[(i - 1)*10 + (j - 1)] }}</td>                                                  
                                                </span>
                                            
                                        </tr>
                                    </table>

                                    <b-button class="mx-2 float-right" size="sm" variant="warning" href="#">자세히 보기</b-button>
                                </div>                                
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4">

                            <!-- Illustrations -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">수정</h6>
                                </div>
                                <div class="card-body">                                    
                                    
                                    <div class="mb-3">
                                        <label class="my-2" for="example-datepicker">날짜 선택</label>
                                        <b-form-datepicker
                                        id="datepicker-buttons"
                                        v-model="value"
                                        today-button
                                        reset-button
                                        close-button
                                        locale="ko"
                                        ></b-form-datepicker>
                                    </div>
                                    
                                    <b-form-group class="mb-3">
                                        <label class="my-2" for="example-datepicker">이미지 선택</label>                                     
                                        <b-form-file id="file-image"></b-form-file>                                        
                                    </b-form-group>

                                    <div class="mb-3">
                                        <label class="my-2" for="example-datepicker">텍스트 입력</label>
                                        <b-form-textarea
                                        id="textarea"
                                        v-model="text"
                                        placeholder="Enter something..."
                                        rows="3"
                                        max-rows="6"
                                        ></b-form-textarea>
                                        
                                        <pre class="mt-3 mb-0">{{ text }}</pre>
                                    </div>

                                    <b-row>
                                        <b-col class="col-10"></b-col>
                                        <b-col class="col-2">
                                            <b-button variant="info" class="float-right">저장</b-button>
                                        </b-col>                                        
                                    </b-row>
                                    

                                </div>
                            </div>                            
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    </b-container>
</template>
<script>
export default {
    methods: {
    formatNames(files) {
        alert(files);
        return files.length === 1 ? files[0].name : `${files.length} files selected`
    }
    },
    data() {
    return {
        value: '',
        text: '',
    }
    }
}

</script>