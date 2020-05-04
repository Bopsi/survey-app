<template>
    <view class="container">
        <status-bar background-color="white" bar-style="dark-content"/>

        <text-input class="form-input" v-model="email"/>

        <text-input :secureTextEntry="true" class="form-input" v-model="password"/>

        <button @press="signin" class="form-button" title="Sign In"></button>
    </view>
</template>

<script>
    import axios from "axios";
    import auth from "../auth";

    export default {
        name: "SignIn",
        props: {
            navigation: {
                type: Object
            }
        },
        data() {
            return {
                email: 'john.doe@acme.com',
                password: 'Acme@123'
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            async init() {
                const signedId = await auth.isSignedIn();
                if(signedId) {
                    await this.navigation.navigate("Surveys");
                }
            },
            async signin() {
                try {
                    let reply = await axios.post('http://192.168.0.108:3000/users/signin', {email: this.email, password: this.password})
                    if(reply.data.token) {
                        await auth.signIn(reply.data.token);
                        await this.navigation.navigate("Surveys");
                    }
                } catch(e) {
                    alert(e);
                } finally {

                }
            },
            goToSignUpScreen() {
                this.navigation.navigate("SignUp");
            }
        }
    }
</script>

<style>
    .form-input {
        height: 40;
        width: 80%;
        borderColor: gray;
        borderWidth: 1;
        margin: 5;
    }

    .form-button {
        backgroundColor: red;
    }

    .container {
        align-items: center;
        justify-content: center;
        flex: 1;
    }
</style>