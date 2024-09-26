<template>
        <v-footer color="blue darken-4" padless>
        <v-container fluid>
            <v-row class="py-4 white--text">
            <!-- Logo y descripción -->
            <v-col cols="12" md="4" class="d-flex flex-column align-center text-center">
                <v-img
                    src="@/assets/logo.png" 
                    class="mr-4"
                    contain
                    height="80"
                    width="80"
                ></v-img>
                <p class="mt-4 px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam, saepe aspernatur minima mollitia sunt reiciendis dignissimos sit officia sapiente veritatis, numquam molestiae quae quo facilis, cumque perspiciatis dolorem? Explicabo.
                </p>
            </v-col>
            
            <!-- Enlaces rápidos -->
            <v-col cols="12" md="4" class="text-center">
                <h3>Síguenos en</h3>
                <div class="d-flex justify-center">
                <v-icon class="mx-2">mdi-facebook</v-icon>
                <v-icon class="mx-2">mdi-instagram</v-icon>
                <v-icon class="mx-2">mdi-whatsapp</v-icon>
                <v-icon class="mx-2">mdi-youtube</v-icon>
                <v-icon class="mx-2">mdi-tiktok</v-icon>
                </div>
            </v-col>
            
            <!-- Información de contacto -->
            <v-col cols="12" md="4" class="text-center">
                <h3>Contáctanos</h3>
                <p><v-icon class="mr-2">mdi-phone</v-icon>951 216 491</p>
                <p><v-icon class="mr-2">mdi-map-marker</v-icon>Calle Mercaderes 406, oficina 301, Arequipa, Perú</p>
                <p><v-icon class="mr-2">mdi-email</v-icon>contacto@ejemplo.com</p>
            </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-container>
        </v-footer>
    </template>
    
    <script>
    export default {
        name: 'FooterComp',
        data() {
        return {
            links: ['Inicio', 'Nosotros', 'Servicios', 'Contáctanos']
        }
        }
    }
    </script>
    
    <style scoped>
    .text-center {
        text-align: center;
    }
    
    .d-flex {
        display: flex;
    }
    
    .flex-column {
        flex-direction: column;
    }
    
    .align-center {
        align-items: center;
    }
    
    .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    
    .py-4 {
        padding-top: 16px;
        padding-bottom: 16px;
    }
    
    .mx-2 {
        margin-left: 8px;
        margin-right: 8px;
    }
    
    .mr-2 {
        margin-right: 8px;
    }
    
    .v-footer {
        background-color: #003366;
    }
    
    .white--text {
        color: #ffffff;
    }
    
    .justify-center {
        justify-content: center;
    }
    </style>
    