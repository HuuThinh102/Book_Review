<template>
    <Header></Header>
    <h1 class="text-uppercase">Quản lý bài viết</h1>
    <hr color="black">
    <div class="list-reviews">
        
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên bài đánh giá</th>
                    <th scope="col">Người đánh giá</th>
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>
            <tbody v-for="(review, index) in books" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ review.ID }}</td>
                    <td>{{ review.name }}</td>
                    
                    <td>
                        <router-link :to="'/admin/books/' + review._id + '/edit'" class="btn btn-link">Sửa</router-link>
                        <a href="" class="btn btn-link" @click="getIdBook(review)" :data-id="review._id" data-toggle="modal"
                            data-target="#delete-book-modal">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    <Footer></Footer>
</template>
<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Header, Footer
    }
}
</script>
<style scoped></style>