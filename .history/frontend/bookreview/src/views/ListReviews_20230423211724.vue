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
            <tbody v-for="(review, index) in reviews" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ review.nameReview }}</td>
                    <td>{{ review.contentCreator }}</td>
                    <td>
                        <a href="" class="btn btn-link" @click="getIdReview(review)" :data-id="review._id" data-toggle="modal"
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
    },
    data(){
        return {
            reviews: [],
            id: null
        }
    },
    created() {
        axios.get('http://localhost:3001/admin/list-reviews')
            .then(res => {
                this.reviews = res.data._reviews;
            })
            .catch(err => {
                console.log(err)
            });
    },
    methods: {
        getIdReview(review) {
            this.id = review._id;
        },
        // deleteBook() {
        //     axios.delete('http://localhost:3001/books/' + this.id)
        //         .then(() => {
        //             console.log(this.id);
        //             this.$router.push('/admin/stored/books');
        //             window.alert("Xóa thành công")
        //             window.location.reload()
        //         })
        //         .catch(err => console.log(err));
        // },
    }
}
</script>
<style scoped></style>