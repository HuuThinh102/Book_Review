<template>
    <div class="review-detail">
        <h2>{{ review.nameReview }}</h2>
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
        path() {
            return staticPath
        }
    },

    created() {
        axios.get('http://localhost:3000/reviews/detail/:id')
            .then(res => this.reviews = res.data._reviews)
            .catch(error => console.log(error));
    }
}
</script>
<style>
    
</style>