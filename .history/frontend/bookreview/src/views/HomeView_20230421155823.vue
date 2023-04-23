<template>
    <div class="home-view container-fluid">
        
        <div class="row">
            <div class="col-8">
                <h2 class="ml-4">Danh mục bài viết</h2>
                <template v-for="(review, index) in reviews" :key="index">

                    <div class="row border rounded ml-4 my-3" style="width: 50rem;">
                        <div class="col-md-3 my-4">
                            <img class="card-img-top " :src="path + review.image" alt="Card image cap">
                        </div>
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">{{ review.nameReview }}</h5>
                                <ul>
                                    <li> Người viết: {{ review.contentCreator }}</li>
                                    <li> Sách: {{ review.nameBook }}</li>
                                    <li> Tác giả: {{ review.author }}</li>
                                </ul>
                                <router-link to="/reviews/detail/:id" class="btn btn-link">Xem bài viết</router-link>
                            </div>
                        </div>
                    </div>

                </template>
            </div>
            <div class="col-4">
                <div class="p-1 ">
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
import staticPath from "../assets/staticPath"

export default {
    data() {
        return {
            reviews: []
        }
    },

    computed:{
        path() {
            return staticPath
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
.card-img-top {
    height: 100%;
}
</style>