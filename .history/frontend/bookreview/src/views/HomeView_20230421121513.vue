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

        <div class="sections row">
            <template v-for="(book, index) in filteredList" :key="index">

                <div v-if="index < 20" class="card" style="width: 16rem;">
                    <router-link :to="'/books/' + book.slug">
                        <img class="card-img-top" :src="path + book.image" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ book.name }}</h5>
                        <p class="card-text">{{ book.author }}</p>
                        <span>
                            <i class="id-book">Mã sách: {{ book.ID }}</i>
                        </span>
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
            .then( res => this.reviews = res.data._reviews )
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
</style>