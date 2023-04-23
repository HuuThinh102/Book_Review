<template>
    <div class="home-view">
        <h1 class="display-4 font-italic text-center" id="title">BOOK IS LIFE</h1>
        <div class="row">
            <div class="col-md-8">
                <h2 class="ml-4">Danh sách bài viết</h2>
            </div>
            <div class="col-md-4">
                <div class="border-top p-1">
                    <h4 class="px-1 py-3 text-center" id="title">
                        <q>Sách cho ta tri thức, sự hiểu biết</q>
                    </h4>
                </div>
            </div>

        </div>

        <div class="sections my-4 row ml-4">
            <template v-for="(review, index) in reviews" :key="index">

                <div class="row border rounded" style="width: 60rem;">
                    <div class="col-md-4 mt-4">
                        <img class="card-img-top " src="../assets/img/logo.png" alt="Card image cap">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">{{ review.nameReview }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </template>


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

.card img{
    flex:1
}
</style>