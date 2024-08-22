<script setup lang="ts">
import MovieCard from "../components/MovieCard.vue";
import ArrowLeft from "../components/SVG/ArrowLeft.vue";
import { useMovieListStore } from "../hooks/useMovieListStore";

const { movieList } = useMovieListStore();
</script>

<template>
  <section class="single">
    <nav class="nav">
      <RouterLink to="/" class="link">
        <ArrowLeft />
        <p class="back">Назад к списку</p>
      </RouterLink>
    </nav>
    <div class="list">
      <MovieCard :movie="movieList[0]" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.single {
  padding-block: 40px;
  width: 100%;
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
</style>
