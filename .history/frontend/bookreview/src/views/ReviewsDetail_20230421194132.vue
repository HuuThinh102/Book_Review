<template>
    <div class="review-detail">
        <div class="review-detail-header">
            <h3>{{ review.nameReview }}</h3>
            <img :src="path + review.image" alt="Card image cap">
            <h5>Tác giả: {{ review.author }}</h5>
            <h5>Người đánh giá: {{ review.contentCreator }}</h5>
            <p class="content">{{ review.content }}</p>
        </div>
        
    </div>
</template>
<script>
import axios from "axios"
import staticPath from "../assets/staticPath"

export default {
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
        margin: auto 10%;
    }
</style>