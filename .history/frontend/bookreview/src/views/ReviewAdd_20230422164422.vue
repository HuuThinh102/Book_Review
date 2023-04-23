<template>
    <div class="review-add container-fluid">
        <h1 class="text-center my-4" id="title">Thêm bài đánh giá</h1>
        <div class="container">
            <form class="container">
                <div class="form-group">
                    <label for="name-review" class="text-dark">Tên bài đánh giá</label>
                    <input type="text" class="form-control" id="name-review" v-model ="posts.nameReview">
                </div>
                <div class="form-group">
                    <label for="name-book" class="text-dark">Tên sách</label>
                    <input type="text" class="form-control" id="name-book" v-model ="posts.nameBook">
                </div>
                <div class="form-group">
                    <label for="content-creator" class="text-dark">Tên người đánh giá</label>
                    <input type="text" class="form-control" id="content-creator" v-model ="posts.contentCreator">
                </div>
                <div class="form-group">
                    <label for="author" class="text-dark">Tên tác giả</label>
                    <input type="text" class="form-control" id="author" v-model ="posts.author">
                </div>
                <div class="form-group">
                    <label for="descript" class="text-dark">Nội dung đánh giá</label>
                    <textarea class="form-control" id="descript" v-model ="posts.content"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label text-dark" for="pathURL">Chọn ảnh bìa sách</label><br>
               
                    <input type="file" name="name-file" id="pathURL" accept="image/*">
                </div>
                <button type="submit" class="btn btn-primary text-uppercase" @click="getNameFileImg">Thêm</button>
            </form>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            posts:{
                nameReview: null,
                contentCreator: null,
                nameBook: null,
                author: null,
                image: null,
                content: null
            }
        }
    },
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },
        addNewBook() {
            axios.post('http://localhost:3000/reviews/store', this.posts)
                // .then(res => console.log(res))
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm sách mới thành công")
                        this.posts.nameReview = "";
                        this.posts.contentCreator = "";
                        this.posts.nameBook = "";
                        this.posts.author = "";
                        this.posts.image = "";
                        this.posts.content = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm sách mới thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
    }
}
</script>
<style ></style>