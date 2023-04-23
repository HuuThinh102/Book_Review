<template>
    <Header></Header>
    <div class="review-detail">
        <h1 class="text-center my-4" id="title">BOOK IS LIFE</h1>
        <div class="review-detail-header">
            <h3>{{ review.nameReview }}</h3>
            <img :src="path + review.image" alt="Card image cap">
            <p style="font-style: italic;">Tác giả: {{ review.author }}</p>
            <h6 class="content">Người đánh giá: {{ review.contentCreator }}</h6>
            <p class="content">{{ review.content }}</p>
        </div>
        
    </div>
    <Footer></Footer>
</template>
<script>
import axios from "axios"
import staticPath from "../assets/staticPath"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    component:{
        Header,Footer
    },
    data() {
        return {
            review: null
        }
    },

    computed:{
        id() {
            return this.$route.params.id
        },

        path() {
            return staticPath
        }
    },

    created() {
        axios.get('http://localhost:3000/reviews/detail/' + this.id)
            .then(res => this.review = res.data)
            .catch(error => console.log(error));
    }
}
</script>
<style>
    
    .review-detail-header{
        text-align: center;
    }
    .content{
        text-align: justify;
        margin: 2% 10% 5%;
    }
</style>