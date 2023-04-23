<template>
    <div class="home-view container-fluid">
        <h1 class="text-center my-4" id="title">Thêm bài đánh giá</h1>
        <div class="container">
            <form class="container">
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên bài đánh giá</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên sách</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên người đánh giá</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Tên tác giả</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-dark">Nội dung đánh giá</label>
                    <textarea class="form-control" id="descript"></textarea>
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
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },
    }
}
</script>
<style ></style>