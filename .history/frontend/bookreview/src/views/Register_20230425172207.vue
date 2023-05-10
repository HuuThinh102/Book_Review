<template>
    <div class="register">
        <h1>ĐĂNG KÝ</h1>
        <div class="register-user-view">
            <section class="h-100 h-custom" style="">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-8 col-xl-6">
                            <div class="card rounded-3">
                                <img src="../assets/img/register1.png" class="w-100"
                                    style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
                                    alt="Sample photo">
                                <div class="card-body p-4 p-md-5">

                                    <form method="POST" class="px-md-2" @submit.prevent="registerUser">

                                        <div class="form-outline mb-2 mx-5">
                                            <label class="form-label" for="name">Name</label>
                                            <input type="text" id="name" class="form-control" placeholder="Tên"
                                                v-model="posts.name" />
                                        </div>




                                        <div class="form-outline mb-2 mx-5">
                                            <div class="form-outline">
                                                <label class="form-label" for="username">Username</label>
                                                <input placeholder="Username" type="text" id="username"
                                                    v-model="posts.username" class="form-control" />
                                            </div>
                                        </div>



                                        <div class="form-outline mb-2 mx-5">
                                            <div class="form-outline">
                                                <label class="form-label" for="password">Password</label>
                                                <input placeholder="Password" type="password" id="password"
                                                    v-model="posts.password" class="form-control" />
                                            </div>

                                        </div>


                                        <div class="form-outline mb-1 mx-5">
                                            <div class="form-outline">
                                                <label class="form-label" for="username">Phone</label>
                                                <input placeholder="Điện thoại" type="text" id="username"
                                                    v-model="posts.phone" class="form-control" />
                                            </div>

                                        </div>


                                        <button type="submit" class="btn btn-success btn-lg mb-1 mx-5 mt-4">Đăng ký</button>
                                        <button type="button" v-on:click="comebackHome()" class="btn btn-secondary btn-lg mb-1 mx-5 mt-4">Về trang chủ</button>
                                    </form>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        
    </div>
</template>

<script>

import axios from "axios"

export default {
    components: {

    },
    data() {
        return {
            posts: {
                name: null,
                username: null,
                password: null,
                phone: null,
            }
        }
    },

    methods: {
        registerUser() {
            axios.post('http://localhost:3001/auth/signup', this.posts)
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Đăng ký thành công");
                    }
                    else if (res.data.status === 500) {
                        window.alert("Đăng ký thất bại");
                    }
                    this.posts.name = "";
                    this.posts.username = "";
                    this.posts.password = "";
                    this.posts.phone = "";
                })
                .catch(err => console.log(err))
        },

        comebackHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style scoped>
.register {
    margin-top: 12px;
}
</style>
