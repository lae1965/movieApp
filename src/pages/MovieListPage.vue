<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCard from "../components/MovieCard.vue";
import Radio from "../components/Radio.vue";
import Preloader from "../components/SVG/Preloader.vue";
import { useMovieListStore } from "../hooks/useMovieListStore";
import { Movie } from "../utils/interfaces";

const { getMovieList, loadMovieList, isLoading, isError } = useMovieListStore();
const movieList = ref<Movie[]>([]);

onMounted(async () => {
  await loadMovieList();
  movieList.value = getMovieList();
});
</script>

<template>
  <main class="main">
    <h1 class="heading">Фильмы</h1>
    <nav class="nav">
      <Radio :is-checked="true" id="radio1" text="Отсортировать по названию" />
      <Radio id="radio2" text="Отсортировать по году" />
    </nav>
    <div class="list loader" v-if="isLoading">
      <Preloader />
    </div>
    <div class="list error" v-else-if="isError">
      <p class="error-text">К сожалению, по вашему запросу ничего не найдено...</p>
    </div>
    <div class="list" v-else>
      <MovieCard
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
        :is-single="false"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding-block: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
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

.loader {
  align-items: center;
  justify-content: center;
  flex: 1;
}

.error-text {
  font-size: 32px;
  line-height: 32px;
  font-weight: 500;
  color: #ffffff;
}
</style>
