<template>
    <header class="bg-black flex justify-between items-center py-5 px-6 fixed w-screen">
        <h1 class="text-white text-3xl font-bold ">
            GestSoft
        </h1>
        <nav>
            <ul class="text-white flex gap-5">
                <li class="hover:underline"><a href="#">Inicio</a></li>
                <li class="hover:underline"><a href="#">Productos</a></li>
                <li class="hover:underline"><a href="#about">Sobre nosotros</a></li>
                <li class="hover:underline"><a href="login">Iniciar Sesión</a></li>
                <li class="hover:underline"><a href="#">Registrarse</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="w-full">
            <img class="object-cover w-full h-[40vh]" src="https://loremflickr.com/640/360" alt="">
        </section>
        <div class="mx-32">

            <section class="py-4">
                <h1 class="text-center font-bold text-2xl">
                    PRODUCTOS
                </h1>
                <div class="py-4 flex flex-wrap gap-2 justify-center">
                    <Product v-for="(_, index) in 10" :key="index" name="XTZ 150" description="La mejor moto del mundo"
                        price="1'000.000.000.000.000"
                        imageUrl="https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xtz150_azul.png" />

                </div>
            </section>

            <section>
                <h1 id="about" class="font-bold text-2xl text-center mb-2">Sobre Nosotros</h1>
                <p>
                    En [Nombre de la Tienda], nos apasiona la moda y creemos que cada prenda debe contar una historia
                    única. Desde
                    nuestra fundación, nos hemos dedicado a ofrecer una selección curada de ropa de alta calidad,
                    combinando
                    estilo,
                    comodidad y sostenibilidad.
                </p>

                <h1 class="font-bold text-2xl">¿Quiénes Somos?</h1>
                <p>
                    Somos una tienda de ropa que se especializa en brindar a nuestros clientes las últimas tendencias y
                    clásicos
                    atemporales. Con un equipo de expertos en moda, nos aseguramos de que cada pieza en nuestra tienda
                    refleje
                    nuestro
                    compromiso con la excelencia y el buen gusto.
                </p>

                <h1 class="font-bold text-2xl">Nuestra Filosofía</h1>
                <p>
                    Calidad y Estilo: Seleccionamos cuidadosamente nuestras colecciones para ofrecer prendas que no solo
                    sean
                    elegantes, sino también duraderas. Creemos que la moda debe ser accesible y asequible sin
                    comprometer la
                    calidad.
                </p>
                <p>
                    Sostenibilidad: Nos comprometemos a minimizar nuestro impacto ambiental. Trabajamos con proveedores
                    que
                    comparten
                    nuestra visión de prácticas responsables y materiales sostenibles.
                </p>
                <p>
                    Diversidad y Inclusión: Valoramos la diversidad y nos esforzamos por ofrecer una amplia gama de
                    estilos y
                    tallas
                    para que todos puedan encontrar algo que les encante. Celebramos la individualidad y creemos que la
                    moda es
                    una
                    forma de expresión personal.
                </p>
                <p>
                    Nuestro Compromiso
                    Nos esforzamos por ofrecer una experiencia de compra inigualable. Desde el momento en que entras en
                    nuestra
                    tienda, ya sea física o en línea, hasta que recibes tu pedido, estamos aquí para asegurarnos de que
                    cada paso
                    sea
                    sencillo y agradable. Nuestro equipo de atención al cliente está siempre disponible para ayudarte a
                    encontrar
                    exactamente lo que buscas y para responder cualquier pregunta que puedas tener.
                </p>

                <h1 class="font-bold text-2xl">Contáctanos</h1>
                <p>
                    Para más información sobre nuestras colecciones, ofertas especiales o cualquier otra consulta, no
                    dudes en
                    ponerte
                    en contacto con nosotros a través de [detalles de contacto: teléfono, correo electrónico, formulario
                    en
                    línea].
                    Síguenos en nuestras redes sociales para mantenerte al día con las últimas novedades y tendencias.
                </p>

                <p>Gracias por elegir [Nombre de la Tienda]. Estamos emocionados de ser parte de tu viaje de moda y
                    estilo.</p>


            </section>
        </div>

    </main>
    <footer class="bg-black flex justify-between items-center py-2 px-6 w-screen">
        <h1 class="text-white text-xl font-bold">GestSoft copyright by</h1>
        <div class="text-white text-xl font-bold">
            <a href="https://github.com/JeanP78" target="_blank"> JeanP78❤️</a>
            <a href="https://github.com/ghjh" target="_blank"> Yksogeid</a>
        </div>
    </footer>
</template>
<script>
import Product from '@/components/Product.vue';
export default {
    name: 'home',
    components: {
        Product
    }

}
</script>
