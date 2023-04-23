<template>
    <div class="review-detail">
        <h2>{{  }}</h2>
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
        axios.get('http://localhost:3000')
            .then(res => this.reviews = res.data._reviews)
            .catch(error => console.log(error));
    }
}
</script>
<style>
    
</style>