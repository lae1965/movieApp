<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCard from "../components/MovieCard.vue";
import ArrowLeft from "../components/SVG/ArrowLeft.vue";
import Preloader from "../components/SVG/Preloader.vue";
import { useMovieListStore } from "../hooks/useMovieListStore";
import { Movie } from "../utils/interfaces";
import { useRoute } from "vue-router";

const {
  loadSingleMovie,
  getSingleMovie,
  getMovieList,
  isLoading,
  isError,
} = useMovieListStore();
const route = useRoute();
const movieId = +route.params.id;

const movie = ref<Movie>({
  id: 0,
  title: "",
  yearGenres: "",
  director: "",
  actors: "",
  description: "",
  duration: "",
  posterUrl: "",
});

onMounted(async () => {
  const movieList = getMovieList();
  const findMovie = movieList.find((item) => item.id === movieId);
  if (findMovie) movie.value = findMovie;
  else {
    await loadSingleMovie(movieId);
    movie.value = getSingleMovie();
  }
});
</script>

<template>
  <section class="single">
    <nav class="nav">
      <RouterLink to="/" class="link">
        <ArrowLeft />
        <p class="back">Назад к списку</p>
      </RouterLink>
    </nav>
    <div class="list loader" v-if="isLoading">
      <Preloader />
    </div>
    <div class="list error" v-else-if="isError">
      <p class="error-text">К сожалению, по вашему запросу ничего не найдено...</p>
    </div>

    <div class="list" v-else>
      <MovieCard :movie="movie" :is-single="true" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.single {
  padding-block: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav {
  width: 100%;
  padding-block: 16px;
  border-bottom: 1px solid #c4c4c4;
}

.link {
  display: flex;
  gap: 20px;
}

.back {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: rgba(255, 82, 82, 0.98);
  text-decoration-line: underline;
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
