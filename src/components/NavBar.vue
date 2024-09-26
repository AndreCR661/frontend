<template>
    <v-app-bar scroll-behavior="hide" app color="blue darken-4" style="max-width: 100%; margin: auto;">
        <v-img
            src="@/assets/logo.png"
            class="mr-4"
            contain
            height="40"
            width="40"
        ></v-img>
    
        <v-spacer></v-spacer>
    
        <v-btn class="transparent" dark style="margin-right: 10px;" @click="goToPage('contacto')">
            Contacto
        </v-btn>
    
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="transparent"
                dark
                v-bind="attrs"
                v-on="on"
                style="margin-right: 10px;"
            >
                OPCIONES
            </v-btn>
            </template>
            <v-list>
            <v-list-item @click="goToPage('option1')">
                <v-list-item-title>Option 1</v-list-item-title>
            </v-list-item>
            <v-list-item @click="goToPage('option2')">
                <v-list-item-title>Option 2</v-list-item-title>
            </v-list-item>
            <v-list-item @click="goToPage('option3')">
                <v-list-item-title>Option 3</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
    
        <v-btn class="yellow darken-3" dark style="margin-right: 10px;" @click="goToLogin">
            LOGIN
        </v-btn>
        </v-app-bar>
    </template>
    
    <script>
    export default {
        name: 'NavBar',
        methods: {
        goToPage(page) {
            // Lógica para navegar a la página correspondiente
            console.log('Navegar a:', page);
        },
        goToLogin() {
            this.$router.push({ name: 'Login' });
        }
        }
    }
    </script>
    