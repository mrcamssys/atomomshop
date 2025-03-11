<template>
    <footer class="text-center bg-body-tertiary">
        <!-- Grid container -->
        <div class="container pt-4">
            <!-- Section: Social media -->
            <section class="mb-4">
                <a v-for="(social, index) in socialLinks" :key="index"
                    class="btn btn-link btn-floating btn-lg text-body m-1" :href="social.link" role="button"
                    data-mdb-ripple-color="dark">
                    <i :class="social.icon"></i>
                </a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05); color:aliceblue">
            © {{ currentYear }} Copyright:
            <a class="text-body" href="https://atomomshop.com/">Atomomshop SAS</a>
        </div>
        <!-- Copyright -->
    </footer>
</template>

<script>
export default {
    data() {
        return {
            socialLinks: [
                { icon: "fab fa-facebook-f", link: "#!" },
                { icon: "fab fa-twitter", link: "#!" },
                { icon: "fab fa-google", link: "#!" },
                { icon: "fab fa-instagram", link: "#!" },
                { icon: "fab fa-linkedin", link: "#!" },
                { icon: "fab fa-github", link: "#!" }
            ],
            currentYear: new Date().getFullYear()
        };
    }
};
</script>

<style scoped>
footer {
    background-color: var(--footer-color);
    color: var(--text-color);
    padding: 20px 0;
}

.btn-link {
    color: var(--text-color) !important;
}

.btn-link:hover {
    color: var(--accent-color) !important;
}
.text-body{
    color: var(--accent-color) !important;
}
</style>