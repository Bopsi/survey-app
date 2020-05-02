<template>
    <view class="container">
        <status-bar background-color="white" bar-style="dark-content"/>

        <text-input class="form-input" v-model="email"/>

        <text-input :secureTextEntry="true" class="form-input" v-model="password"/>

        <button @press="signin" class="form-button" title="Sign In"></button>
    </view>
</template>

<script>
    export default {
        name: "SignIn",
        props: {
            navigation: {
                type: Object
            }
        },
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            signin() {
                alert("Signing u in");
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