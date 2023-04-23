<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img src="../assets/img/logo.png" alt="..." class="logo">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
                </li>
                
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <router-link to="/" class="btn text-light bg-primary mr-2">Đăng ký</router-link>
                <router-link to="/" class="btn text-light bg-primary">Đăng nhập</router-link>
            </form>
        </div>
    </nav>
</template>

<script>

export default {
    computed: {
        id() {
            const name = JSON.parse(localStorage.getItem("id"))[0];
            return name || null;
        },
        position() {
            const position = JSON.parse(localStorage.getItem("id"))[1];
            return position || null;
        }
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
</style>