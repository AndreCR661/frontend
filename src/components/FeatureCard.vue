<template>
    <v-card class="feature-card" @mouseover="showDescription = true" @mouseleave="showDescription = false">
        <v-card-title class="justify-center">
            <v-icon v-if="!showDescription" size="48">{{ icon }}</v-icon>
        </v-card-title>
        <v-card-text class="text-center" v-if="!showDescription">
            {{ title }}
        </v-card-text>
        <v-card-text class="description text-center" v-if="showDescription">
            {{ description }}
        </v-card-text>
        </v-card>
    </template>
    
    <script>
    export default {
        name: 'FeatureCard',
        props: {
        title: String,
        icon: String,
        description: String
        },
        data() {
        return {
            showDescription: false
        };
        }
    };
    </script>
    
    <style scoped>
    .feature-card {
        transition: all 0.3s ease;
        height: 200px;
    }
    
    .feature-card .v-icon {
        color: #003366;
    }
    
    .description {
        display: none;
    }
    
    .feature-card:hover .description {
        display: block;
    }
    </style>
    