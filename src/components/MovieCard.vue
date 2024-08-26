<script setup lang="ts">
import { Movie as IMovie } from "../utils/interfaces";
import Movie from "./SVG/Movie.vue";

const { movie, isSingle } = defineProps<{ movie: IMovie; isSingle: boolean }>();
</script>

<template>
  <article class="card" :data-raised="!isSingle">
    <aside class="poster-wrapper">
      <img :src="movie.posterUrl" alt="poster" class="poster" />
    </aside>
    <div class="content">
      <RouterLink :to="`/single/${movie.id}`" class="link">
        <h1 class="title">{{ movie.title }}</h1>
      </RouterLink>
      <p class="properties" v-if="!!movie.yearGenres">{{ movie.yearGenres }}</p>
      <p class="properties director" v-if="!!movie.director">{{ movie.director }}</p>
      <p class="properties" v-if="!!movie.actors">
        Актёры:<span class="actors">{{ movie.actors }}</span>
      </p>
      <p class="description" v-if="!!movie.description">
        {{ movie.description }}
      </p>
      <div class="trapezoid" v-if="!!movie.duration">
        <p>{{ movie.duration }}</p>
        <Movie />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.card {
  width: 100%;
  min-height: 168px;
  background: #4d4747;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.card[data-raised="true"]:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
  transform: translateY(-8px);
}

.poster-wrapper {
  min-width: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
}

.poster {
  width: 112px;
  height: 168px;
}

.content {
  padding: 32px 32px 32px 24px;
  text-align: left;
  position: relative;
  width: 100%;
}

.link {
  text-decoration: none;
}

.title {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.properties {
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: #988f8f;
}

.director {
  margin-block: 8px 10px;
}

.actors {
  margin-left: 10px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #e5e5e5;
}

.description {
  margin-top: 14px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #ffffff;
}

.trapezoid {
  width: 184px;
  height: 30px;
  position: absolute;
  top: 32px;
  right: 0;
  background-color: #c4c4c4;
  clip-path: polygon(4% 0, 100% 0%, 100% 100%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
  }
}
</style>
