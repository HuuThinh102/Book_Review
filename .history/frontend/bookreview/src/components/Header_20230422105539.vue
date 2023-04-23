<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img src="../assets/img/logo1.png" alt="..." class="logo">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                </li>

                <!-- UI of reader -->
                <div class="my-2 my-lg-0 dropdown-menu-writer" >
                    <li class="nav-item active">
                        <router-link v-if="this.$route.path != '/auth/register' && !this.nameUser" to="/auth/register"
                            class="btn text-light bg-primary mr-2">Đăng ký</router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link v-if="this.$route.path != '/auth/login' && !this.nameUser" to="/auth/login"
                            class="btn text-light bg-primary">Đăng nhập</router-link>
                    </li>

                    <!-- UI of writer -->
                    <li  v-if="this.role == 'writer'" class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle mb-1" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ this.nameUser }}
                            </a>

                            <div class="dropdown-menu text-dark mt-2 menu-admin"
                                aria-labelledby="navbarDropdown">

                                <router-link to="/" class="dropdown-item text-dark">
                                    <i class="fas fa-book"></i>
                                    Thêm bài viết
                                </router-link>                  
                                <!-- <div class="dropdown-divider"></div>
                                <router-link v-on:click="logoutUser()" class="dropdown-item text-dark" to="/">
                                    <i class="fas fa-sign-out-alt"></i>
                                    Đăng xuất
                                </router-link> -->
                            </div>
                        </li>
                    
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    computed: {
        nameUser() {
            const name = JSON.parse(localStorage.getItem("id"))[0];
            return name || null;
        },
        role() {
            const position = JSON.parse(localStorage.getItem("id"))[1];
            return position || null;
        },
    },
    methods: {

        logoutUser() {
            localStorage.clear();
            window.location.reload();
        }

    },
}
</script>

<style scoped>
.logo {
    width: 40px;
}

a {
    color: #fff;
    text-decoration: none;
}

i {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 8px 0 0;
}
.dropdown-menu-writer{
    float: right;
}
</style>