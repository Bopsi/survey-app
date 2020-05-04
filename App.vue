<template>
    <app-navigator></app-navigator>
</template>

<script>
    import {
        createAppContainer,
        createDrawerNavigator,
        createStackNavigator
    } from "vue-native-router";

    import SignIn from "./src/screens/SignIn.vue";
    import SignUp from "./src/screens/SignUp.vue";
    import Surveys from "./src/screens/Surveys.vue"

    const DrawerNavigator = createDrawerNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp,
        Surveys: Surveys
    },
    {
        initialRouteName: 'SignIn'
    }
    );

    const StackNavigator = createStackNavigator(
    {
        Drawer: DrawerNavigator,
        SignIn: SignIn,
        SignUp: SignUp,
        Surveys: Surveys
    },
    {
        initialRouteName: 'SignIn',
    }
    );

    const AppNavigator = createAppContainer(StackNavigator);

    export default {
        components: {AppNavigator},
    }
</script>