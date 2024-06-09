<template>
    <article class="w-52 border p-2 rounded-sm">
        <img :src="imageUrl" alt="">
        <div>
            <h1 class="text-center"><strong>{{ name }}</strong></h1>
            <p class="text-center leading-4 my-1">{{ description }}</p>
            <p class="text-center"><strong>${{ price }}</strong></p>
        </div>
        <footer class="flex items-center justify-center">
            <button class="border rounded-md  border-black px-2 py-1">Agregar al carrito</button>
        </footer>
    </article>
</template>

<script>
export default {
    name: 'Product',
    props: {
        name: String,
        description: String,
        price: Number,
        imageUrl: String
    }
}
</script>

<style lang="">

</style>
