<template>
    <view class="container">
        <text>Your Surveys</text>
        <template v-for="survey in surveys">
            <text>{{survey.name}}</text>
        </template>
    </view>
</template>

<script>
    import axios from "axios";
    import auth from "../auth";

    export default {
        name: "Surveys",
        props: {
            navigation: {
                type: Object
            }
        },
        data() {
            return {
                currentUser: null,
                token: null,
                http: null,
                surveys: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            async init() {
                const obj = await auth.isSignedIn();
                if(obj) {
                    this.currentUser = obj.currentUser;
                    this.token       = obj.token;
                    this.http        = axios.create({
                        baseURL: 'http://192.168.0.108:3000/',
                        headers: {'x-access-token': this.token}
                    });
                    await this.getSurveys();
                } else {
                    await this.navigation.navigate("SignIn");
                }
            },
            async getSurveys() {
                try {
                    //console.log('>>', this.http.getUri());
                    let reply    = await this.http.get('http://192.168.0.108:3000/surveys');
                    this.surveys = reply.data;
                    console.log(this.surveys);
                } catch(e) {
                    console.error(e);
                } finally {

                }
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
        /*justify-content: center;*/
        flex: 1;
    }
</style>