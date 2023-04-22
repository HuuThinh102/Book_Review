<template>
    <div>
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 text-black">

                        <div
                            class="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form method="POST" @submit.prevent="loginUser" style="width: 23rem;">

                                <h3 class="d-flex justify-content-center fw-normal mb-3 pb-3" style="letter-spacing: 1px;">
                                    ĐĂNG NHẬP</h3>

                                <div class="form-outline mb-4">
                                    <input type="text" id="form2Example18" class="form-control form-control-lg"
                                        placeholder="Username" v-model="login.username" />
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg"
                                        placeholder="Password" v-model="login.password" />

                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-info btn-lg btn-block" type="submit">Login</button>
                                </div>

                                <p>Bạn chưa có tài khoản? <router-link to="/auth/register" class="link-info">Đăng ký tại
                                        đây</router-link></p>

                            </form>

                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src="../assets/img/login.png" alt="Login image" class="w-100 vh-100"
                            style="object-fit: cover; object-position: left;">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    data() {
        return {
            login: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        async refresh() {
            await setTimeout(function() {
                window.location.reload()
            },1);
        },

        async loginUser() {
            await axios.post('http://localhost:3001/auth/login', this.login)
                .then(res => {
                    if (res.data.status == 200) {
                        window.alert('Đăng nhập thành công\nXin chào ' + res.data.user.name);
                        const values = [res.data.user.name, res.data.user.role];
                        localStorage.setItem('id', JSON.stringify(values));
                        
                        this.$router.push('/');
                        this.refresh()
                    }
                    if (res.data.status == 404) {
                        window.alert("Sai tài khoản hoặc mật khẩu")
                    }
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style></style>