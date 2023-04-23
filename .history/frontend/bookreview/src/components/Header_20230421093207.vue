<template>
    <div class="nav-bar-view">
        <header>
            <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
                <!-- Logo -->
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/img/logo.png" alt="logo" class="logo">
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!--  -->
            </nav>
        </header>
    </div>
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