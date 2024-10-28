<template>
    <v-app>
        <v-container fluid class="fill-height">
            <v-row class="fill-height d-flex justify-center align-center">
            <v-col cols="12" md="8">
                <v-card class="pa-5">
                <v-row>
                    <v-col cols="15" md="10" class="d-flex justify-center align-center ">
                    <v-img
                        src="@/assets/ff.avif"
                        contain
                        class="elevation-3"
                        max-width="3000"

                    ></v-img>
                    <h1>
                        Trabajo con <span class="text-primary">NOSOTROS</span>
                    </h1>
                    </v-col>
                    <v-col cols="13" md="7">
                    
                    <v-btn color="primary">Empieza con nosotros</v-btn>
                    </v-col>
                    
                </v-row>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        </v-app>
    </template>
    
    <style scoped>
    .text-primary {
        color: orange; /* Ajusta a tu color primario */
    }
    
    .fill-height {
        height: 100vh;
    }
    </style>
    