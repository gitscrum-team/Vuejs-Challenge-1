<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand style="cursor:default">
                <img alt="SyncYD" src="./assets/logo_white.png" height="32" />
                <sub>&nbsp;&nbsp;Menu</sub>&nbsp;
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" disabled>Home</b-nav-item><!--
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
                </b-navbar-nav>
            </b-collapse>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item disabled>v1.0.0</b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>-->
        <router-view style="margin-top:40px" />
    </div>
</template>

<style lang="scss">
    @import 'styles/main.scss';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

</style>
