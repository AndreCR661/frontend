<template>
    <v-app>
        <v-container class="fill-height d-flex justify-center align-center" fluid>
            <v-card class="pa-5" max-width="400">
            <v-card-title class="text-center">
                <span class="headline">Iniciar Sesión</span>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="login">
                <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    prepend-icon="mdi-email"
                    type="email"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Contraseña"
                    prepend-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    required
                >
                    <template v-slot:append>
                    <v-icon @click="showPassword = !showPassword">
                        {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
                    </v-icon>
                    </template>
                </v-text-field>
                <v-btn type="submit" color="primary" block>Iniciar Sesión</v-btn>
                </v-form>
            </v-card-text>
            </v-card>
        </v-container>
        </v-app>
    </template>
    
    <script>
    export default {
        name: 'LoginPage',
        data() {
        return {
            email: '',
            password: '',
            showPassword: false
        };
        },
        methods: {
        login() {
            // Aquí agregar la lógica para iniciar sesión
            console.log('Iniciar sesión con:', this.email, this.password);
        },
        goToRegister() {
            // Aquí agregar la lógica para navegar a la página de registro
            console.log('Navegar a la página de registro');
        }
        }
    }
    </script>
    
    <style scoped>
    .fill-height {
        min-height: 100vh;
    }
    
    .pa-5 {
        padding: 20px;
    }
    
    .text-center {
        text-align: center;
    }
    
    .d-flex {
        display: flex;
    }
    
    .justify-center {
        justify-content: center;
    }
    
    .align-center {
        align-items: center;
    }
    </style>
    