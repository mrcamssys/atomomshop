<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
            <div class="container">
                <div class="logo-container">
                    <a class="navbar-brand" href="#">
                        <img src="/imagenes/logo2.png" alt="Logo" class="logo" />
                    </a>
                </div>

                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
                            <RouterLink class="nav-link" :class="{ active: item.active }" :to="item.link"><i :class="item.icon"></i> {{ item.name }}</RouterLink>
                        </li>
                        <li v-for="(item, index) in menuItemsURL" :key="index" class="nav-item">
                            <a class="nav-link" :class="{ active: item.active }" :href="item.link">
                                <i :class="item.icon"></i> {{ item.name }}
                            </a>
                        </li>
                        <!--<li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                           <!- - <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>-- >
                        </li>-->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            menuItems: [
                {
                    name: "Portada",
                    link: "/",
                    active: true,
                    icon: "bi bi-house"
                },
                
                {
                    name: "Vision",
                    link: "/Vision",
                    icon: "bi bi-boxes"
                },

                {
                    name: "Mision",
                    link: "/mision",
                    icon: "bi bi-bookmarks-fill"
                },

                {
                    name: "Portafolio",
                    link: "/portafolio",
                    icon: "bi bi-clipboard-data"
                },

                {
                    name: "Contacto",
                    link: "/about",
                    icon: "bi bi-envelope"
                }


            ],
            menuItemsURL: [
                /*
                {
                    name: "Portada",
                    link: "/",
                    active: true,
                    icon: "bi bi-house"
                },
                */
            ]
        };
    }
}
</script>

<style scoped>
.logo {
    width: 130px;
    /*margin-bottom: 1rem;*/
}

.logo-container {
    top: 0rem;
    position: absolute;
    padding: 0.3rem;
    padding-bottom: 1rem;
    background-color: var(--navbar-color-logo) !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 1% 100%);
    z-index: 2;
    padding: 15px 30px;
    text-align: center;
}
</style>
