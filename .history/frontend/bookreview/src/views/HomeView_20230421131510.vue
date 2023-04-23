<template>
    <div class="home-view container-fluid">
        <h1 class="font-italic text-center" id="title">BOOK IS LIFE</h1>
        <div class="row">
            <div class="col-7">
                <h2 class="ml-4">Danh sách bài viết</h2>
                <template v-for="(review, index) in reviews" :key="index">

                    <div class="row border rounded ml-4 my-2" style="width: 50rem;">
                        <div class="col-md-3 my-4">
                            <img class="card-img-top " src="../assets/img/logo.png" alt="Card image cap">
                        </div>
                        <div class="">
                            <div class="card-body">
                                <h5 class="card-title">{{ review.nameReview }}</h5>
                                <ul>
                                    <li> Người viết: {{ review.contentCreator }}</li>
                                    <li> Sách: {{ review.nameBook }}</li>
                                    <li> Tác giả: {{ review.author }}</li>
                                </ul>
                            </div>
                            <!-- <router-link></router-link> -->
                        </div>
                    </div>

                </template>
            </div>
            <div class="col-1"></div>
            <div class="col-4">
                <div class="p-1">
                    <h4 class="px-1 py-3 text-center" id="title">
                        <q>Sách cho ta tri thức, sự hiểu biết</q>
                    </h4>
                    <img style="width: 100%;" src="../assets/img/book_Home.png" alt="">
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            reviews: []
        }
    },

    created() {
        axios.get('http://localhost:3000')
            .then(res => this.reviews = res.data._reviews)
            .catch(error => console.log(error));
    }
}
</script>
<style>
h1 {
    text-align: center;
}

#title {
    font-family: "Arial";
    color: #5250c7;
}

.card img {
    flex: 1
}
</style>