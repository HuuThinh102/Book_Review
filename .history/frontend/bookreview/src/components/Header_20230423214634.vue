<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img src="../assets/img/logo1.png" alt="..." class="logo ml-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active"> 
                    <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
                </li>

            </ul>
            <!-- UI reader -->
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item active ">
                    <router-link to="/auth/login" class="nav-link btn btn-primary text-white">Đăng nhập</router-link>
                </li>

                <li class="nav-item active">
                    <router-link to="/auth/register" class="nav-link btn btn-primary text-white mx-2" >Đăng ký</router-link>
                </li>
            </ul>
            <!-- UI writer -->
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        {{ this.nameUser }}
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <router-link to="/review/add" class="dropdown-item text-dark">Thêm đánh giá</router-link>
                        <router-link v-on:click="logoutUser()" to="/auth/login"  class="dropdown-item text-dark btn btn-link">Đăng xuất</router-link>
                    </div>
                </li>
            </ul>
            <!-- UI admin -->
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        {{ this.nameUser }}
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <router-link to="/admin/list-reviews" class="dropdown-item text-dark">Quản lý bài viết</router-link>
                        <router-link v-on:click="logoutUser()" to="/auth/login"  class="dropdown-item text-dark btn btn-link">Đăng xuất</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    computed: {
        // checkWriter() {
        //     return JSON.parse(localStorage.getItem("id"))[1] == "writer";
        // },
        // checkReader() {
        //     return JSON.parse(localStorage.getItem("id"))[1] == "reader";
        // },
        // checkAdmin() {
        //     return JSON.parse(localStorage.getItem("id"))[1] == "admin";
        // },
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

</style>