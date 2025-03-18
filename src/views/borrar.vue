<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const pokemons = ref([]); // Reactive state for data

const getData = async () => {
    try {
        const { data } = await axios.get("/api/api_user.php");
        pokemons.value = data; // ✅ Assign to pokemons.value, NOT pokemons
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Fetch data when the component mounts
onMounted(() => {
    getData();
});
</script>

<template>
    <h1>Pokemons</h1>
    <ul v-if="pokemons.length > 0">
        <li v-for="poke in pokemons" :key="poke.id">
            {{ poke.name }}
        </li>
    </ul>
    <p v-else>No data available.</p>

    <div class="card mt-3">
        <div class="card-body">
            <pre>{{ JSON.stringify(pokemons, null, 2) }}</pre>
        </div>
    </div>
</template>
