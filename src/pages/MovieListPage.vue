<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import MovieCard from "../components/MovieCard.vue";
import Preloader from "../components/SVG/Preloader.vue";
import { useMovieListStore } from "../hooks/useMovieListStore";
import Checkbox from "../components/Checkbox.vue";
import { Movie, SortStatus } from "../utils/interfaces";
import { sortMovieList } from "../utils/sortMovieList";

const {
  loadMovie,
  movieList,
  setSortStatus,
  sortStatus,
  isLoading,
  isError,
} = useMovieListStore();

onMounted(async () => {
  await loadMovie();
});

const isSortedByProp = (status: SortStatus) => (sortStatus.value & status) === status;

const handleClick = (id: number) => {
  let value: number;
  if ((sortStatus.value | id) === 0b11) value = id;
  else value = sortStatus.value ^ id;
  setSortStatus(value);
};

const sotredList = ref<Movie[]>([]);

watchEffect(() => {
  sotredList.value = sortMovieList([...movieList.value], sortStatus.value);
});
</script>

<template>
  <main class="main">
    <h1 class="heading">Фильмы</h1>
    <nav class="nav">
      <Checkbox
        :is-checked="isSortedByProp(SortStatus.SORTED_BY_NAME)"
        id="checkbox_1"
        text="Отсортировать по названию"
        @click-event="handleClick"
      />
      <Checkbox
        :is-checked="isSortedByProp(SortStatus.SORTED_BY_YEAR)"
        id="checkbox_2"
        text="Отсортировать по году"
        @click-event="handleClick"
      />
    </nav>
    <div class="list loader" v-if="isLoading">
      <Preloader />
    </div>
    <div class="list error" v-else-if="isError">
      <p class="error-text">К сожалению, по вашему запросу ничего не найдено...</p>
    </div>
    <div class="list" v-else>
      <MovieCard
        v-for="movie in sotredList"
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
