<script setup>
import listadoTallas from '@/views/pages/solicitudes/listadoSolicitudes.vue';
import nuevaTallas from '@/views/pages/solicitudes/nuevaVenta.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [

    {
        title: 'Listado Solicitudes',
        icon: 'bx-lock-open',
        tab: 'listTallas',
    },
    {
        title: 'Nueva Venta',
        icon: 'bx-user',
        tab: 'newTalla',
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
            <VWindowItem value="listTallas">
                <listadoTallas />
            </VWindowItem>
            <!-- Account -->
            <VWindowItem value="newTalla">
                <nuevaTallas />
            </VWindowItem>
        </VWindow>
    </div>
</template>
