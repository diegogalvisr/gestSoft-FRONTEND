<script setup>
import listadoColores from '@/views/pages/colores/listadoColores.vue';
import nuevoColor from '@/views/pages/colores/nuevoColor.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [

    {
        title: 'Listado Tallas',
        icon: 'bx-lock-open',
        tab: 'listColor',
    },
    {
        title: 'Nueva Talla',
        icon: 'bx-user',
        tab: 'newColor',
    }
]
</script>

<template>
    <div>
        <VTabs v-model="activeTab" show-arrows>
            <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
                <VIcon size="20" start :icon="item.icon" />
                {{ item.title }}
            </VTab>
        </VTabs>
        <VDivider />

        <VWindow v-model="activeTab" class="mt-5 disable-tab-transition">
            <!-- Listado Tallas -->
            <VWindowItem value="listColor">
                <listadoColores />
            </VWindowItem>
            <!-- Account -->
            <VWindowItem value="newColor">
                <nuevoColor />
            </VWindowItem>
        </VWindow>
    </div>
</template>
