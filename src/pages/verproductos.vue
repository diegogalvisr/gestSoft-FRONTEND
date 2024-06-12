<script setup>
import listadoTallas from '@/views/pages/productos/listadoProductos.vue';
import nuevoProducto from '@/views/pages/productos/nuevoProducto.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [

    {
        title: 'Listado Productos',
        icon: 'bx-lock-open',
        tab: 'listProductos',
    },
    {
        title: 'Nuevo Producto',
        icon: 'bx-lock-open',
        tab: 'newProducto',
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
            <VWindowItem value="listProductos">
                <listadoTallas />
            </VWindowItem>
            <VWindowItem value="newProducto">
                <nuevoProducto />
            </VWindowItem>

        </VWindow>
    </div>
</template>
