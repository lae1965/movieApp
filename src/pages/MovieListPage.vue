<script setup lang="ts">
import { onMounted } from "vue";
import MovieCard from "../components/MovieCard.vue";
import Radio from "../components/Radio.vue";
import { useMovieListStore } from "../hooks/useMovieListStore";

const { movieList, loadMovieList } = useMovieListStore();

onMounted(async () => {
  loadMovieList();
});
</script>

<template>
  <main class="main">
    <h1 class="heading">Фильмы</h1>
    <nav class="nav">
      <Radio :is-checked="true" id="radio1" text="Отсортировать по названию" />
      <Radio id="radio2" text="Отсортировать по году" />
    </nav>
    <div class="list">
      <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding-block: 40px;
  width: 100%;
}

.heading {
  font-size: 32px;
  line-height: 32px;
  font-weight: 500;
  color: #ffffff;
}

.nav {
  width: 100%;
  padding-block: 16px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  gap: 32px;
}

.list {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
