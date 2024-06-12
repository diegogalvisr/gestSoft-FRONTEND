<template>
    <div>
        <header class="bg-black flex justify-between items-center py-5 px-6 fixed w-screen">
            <h1 class="text-white text-3xl font-bold">GestSoft</h1>
            <nav>
                <ul class="text-white flex gap-5">
                    <li class="hover:underline"><a href="home">Inicio</a></li>
                    <li class="hover:underline"><a href="home">Productos</a></li>
                    <li class="hover:underline"><a href="home#about">Sobre nosotros</a></li>
                    <li class="hover:underline"><a href="login">Iniciar Sesión</a></li>
                    <li class="hover:underline"><a href="formulario">Formulario Interes</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="flex justify-center">
                <div class="flex h-screen bg-gray-100">
                    <div class="m-auto">
                        <div>
                            <div class="mt-5 bg-white rounded-lg shadow">
                                <div class="flex">
                                    <div class="flex-1 py-5 pl-5 overflow-hidden">
                                        <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24"
                                            width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <path d="M4.5 2.5v19c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-19"
                                                fill="#f5f5f5" stroke="#000" stroke-opacity="0.1" />
                                            <path d="M4.5 2.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5m-10.5 0v19"
                                                fill="#f5f5f5" stroke="#000" stroke-opacity="0.1" />
                                            <path
                                                d="M10.5 6.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zM4.5 22.5v-19m15 19v-19"
                                                fill="none" stroke="#000" stroke-opacity="0.1" />
                                            <circle cx="10.5" cy="9.5" r="2.5" fill="#ff7e67" stroke="#000"
                                                stroke-opacity="0.1" />
                                        </svg>
                                        <h1 class="inline text-2xl font-semibold leading-none">Informacion Personal</h1>
                                    </div>
                                </div>
                                <div class="px-5 pb-5">
                                    <input placeholder="Nombre" v-model="formData.nombre"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                    <input placeholder="Correo Electronico" v-model="formData.correoElectronico"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                    <input placeholder="Direccion" v-model="formData.direccion"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                    <div class="flex">
                                        <div class="flex-grow w-1/4 pr-2">
                                            <select v-model="formData.genero"
                                                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                                <option value="" disabled selected>Genero</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                        <div class="flex-grow">
                                            <input placeholder="Celular" v-model="formData.celular"
                                                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-1 py-5 pl-5 overflow-hidden">
                                        <h1 class="inline text-2xl font-semibold leading-none">Prenda de interes</h1>
                                    </div>
                                    <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
                                </div>
                                <div class="px-5 pb-5">
                                    <select v-model="formData.nombrePrenda"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                        <option value="" disabled selected>Selecciona una prenda</option>
                                        <option value="POLO A RAYAS JERSEY SLIM FIT PARA HOMBRE">POLO A RAYAS JERSEY
                                            SLIM FIT PARA HOMBRE </option>
                                        <option value="POLO A RAYAS JERSEY SLIM FIT PARA HOMBRE">POLO A RAYAS JERSEY
                                            SLIM FIT PARA HOMBRE </option>
                                        <option value="POLO PREMIUM REGULAR FIT PARA HOMBRE">POLO PREMIUM REGULAR FIT
                                            PARA HOMBRE</option>
                                        <option value="CAMISETA POLO BUSSINES PARA HOMBRE">CAMISETA POLO BUSSINES PARA
                                            HOMBRE</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <select v-model="formData.talla"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                        <option value="" disabled selected>Talla de interes</option>
                                        <option value="S">S </option>
                                        <option value="XL">XL </option>
                                        <option value="L">L</option>
                                    </select>
                                    <select v-model="formData.color"
                                        class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-white-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                        <option value="" disabled selected>Color de interes</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Amarillo">Amarillo</option>
                                        <option value="L">L</option>
                                    </select>
                                </div>
                                <hr class="mt-4">
                                <div class="flex flex-row-reverse p-3">
                                    <div class="flex-initial pl-3">
                                        <button type="button" @click="enviarSolicitud"
                                            class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-white-200 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#FFFFFF">
                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                <path
                                                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                                    opacity=".3"></path>
                                                <path
                                                    d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z">
                                                </path>
                                            </svg>
                                            <span class="pl-2 mx-1">Enviar Solicitud</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="bg-black flex justify-between items-center py-2 px-6 w-screen">
            <h1 class="text-dark text-xl font-bold">GestSoft copyright by</h1>
            <div class="text-dark text-xl font-bold">
                <a href="https://github.com/JeanP78" target="_blank">JeanP78❤️</a>
                <a href="https://github.com/ghjh" target="_blank">Yksogeid</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                nombre: '',
                correoElectronico: '',
                direccion: '',
                genero: '',
                celular: '',
                nombrePrenda: '',
                talla: '',
                color: ''
            }
        };
    },
    methods: {
        enviarSolicitud() {
            fetch('http://localhost:8000/api/YKSecurity/crearFormInteres', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(this.formData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert('Solicitud enviada correctamente');
                })
                .catch(error => {
                    console.error('Error al enviar la solicitud:', error);
                    alert('Error al enviar la solicitud');
                });
            this.formData = {
                nombre: "",
                correoElectronico: "",
                direccion: "",
                genero: "",
                celular: "",
                nombrePrenda: "",
                talla: "",
                color: ""
            };
        }
    }
};
</script>
