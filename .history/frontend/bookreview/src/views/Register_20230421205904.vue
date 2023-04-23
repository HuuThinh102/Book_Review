<!-- <template>
    
</template>

<script>

import axios from "axios"

export default {
    components: {
        
    },
    data() {
        return {
            posts: {
                name: null,
                role: null,
                username: null,
                password: null,
                phone: null,
            }
        }
    },
    
    methods: {
        registerUser() {
            axios.post('http://localhost:3000/register', this.posts)
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Đăng ký thành công");
                    }
                    else if (res.data.status === 500) {
                        window.alert("Đăng ký thất bại");
                    }
                    this.posts.name = "";
                    this.posts.position = "";
                    this.posts.gender = "";
                    this.posts.username = "";
                    this.posts.password = "";
                })
                .catch(err => console.log(err))
        },
    }
};
</script>

<style>

</style> -->
