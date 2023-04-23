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
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
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