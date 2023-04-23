<template>
    <div class="col-md-12">
        <div class="card card-container" style=" border: solid 1px #5250C7; border-radius: 15px; box-shadow: 10px 10px 8px #CBCAFF">
            <img
                id="profile-img"
                src="../assets/img/register.png"
                alt="Cannot load the image"
                class="profile-img-card"
            />
            <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="username" style="color: #5250C7">Tên đăng nhập</label>
                        <Field
                            name="username"
                            type="text"
                            class="form-control"
                        />
                        <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="email" style="color: #5250C7">E-mail</label>
                        <Field name="email" type="email" class="form-control" />
                        <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="password" style="color: #5250C7">Mật khẩu</label>
                        <Field
                            name="password"
                            type="password"
                            class="form-control"
                        />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>

                    <div class="form-group my-3">
                        <button
                            class="btn btn-sm btn-outline-secondary btn-block"
                            :disabled="loading"
                        >
                            <span
                                v-show="loading"
                                class="spinner-border spinner-border-sm"
                            ></span>
                            Đăng ký
                        </button>
                    </div>
                </div>
            </Form>

            <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
            >
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapGetters } from "vuex";
import axios from "axios"

export default {
    name: "Register",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            posts: {
                name: null,
                role: null,
                username: null,
                password: null
                phone: null,
            }
        }
    },
    computed: {
        ...mapGetters([
            "userLoggedIn"
        ]),
    },
    mounted() {
        if (this.userLoggedIn) {
            this.$router.push("/profile");
        }
    },
    methods: {
        async handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            const [error, data] = await this.handle(
                this.$store.dispatch("register", user)
            );
            if (error) {
                console.log(error);
                this.message = "Đăng ký thất bại";
                this.successful = false;
                this.loading = false;
            } else {
                this.message = data.message;
                this.successful = true;
                this.loading = false;
            }
        },
    },
};
</script>

<style>

</style>
