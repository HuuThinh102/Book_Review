<template>
    <div class="home-view container-fluid">
        <h1 class="text-center my-4" id="title">Thêm bài đánh giá</h1>
        <div class="container">
            <form class="container">
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên bài đánh giá</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model ="posts.nameReview">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên sách</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model ="posts.nameBook">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên người đánh giá</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model ="posts.contentCreator">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên tác giả</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model ="posts.author">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Nội dung đánh giá</label>
                    <textarea class="form-control" id="descript" v-model ="posts.content"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label text-dark" for="pathURL">Chọn ảnh bìa sách</label><br>
               
                    <input type="file" name="name-file" id="pathURL">
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
            axios.post('http://localhost:3000/admin/books/store', this.posts)
                // .then(res => console.log(res))
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm sách mới thành công")
                        this.posts.name = "";
                        this.posts.author = "";
                        this.posts.description = "";
                        this.posts.quantity = "";
                        this.posts.image = "";
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