<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" v-for="item in features" :key="item.title">
            <FeatureCard :title="item.title" :icon="item.icon" :description="item.description" />
            </v-col>
        </v-row>
        </v-container>
    </template>
    
    <script>
    import FeatureCard from '@/components/FeatureCard.vue';
    
    export default {
        name: 'FeaturesComp',
        components: {
        FeatureCard
        },
        data: () => ({
        features: [
            { title: 'LEGAL', icon: 'mdi-scale-balance', description: 'Descripción de servicios legales.' },
            { title: 'CONTABLE', icon: 'mdi-calculator', description: 'Descripción de servicios contables.' },
            { title: 'Explotación', icon: 'mdi-handshake', description: 'Descripción de servicios de explotación.' },
            { title: 'SUCAME', icon: 'mdi-domain', description: 'Descripción de servicios de SUCAME.' },
            { title: 'BENEFICIO', icon: 'mdi-factory', description: 'Elaboracion de proyectos de ingeniería de detalle, permiso de insumos químicos, ampliación de capacidad de procesamiento.' },
            { title: 'PETITORIOS MINEROS', icon: 'mdi-briefcase-check', description: 'Descripción de servicios de petitorios mineros.' }
        ]
        })
    }
    </script>
    
    