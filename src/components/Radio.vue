<script setup lang="ts">
const { isChecked, text, id } = withDefaults(
  defineProps<{ isChecked?: boolean; text: string; id: string }>(),
  {
    isChecked: false,
    text: "",
  }
);
</script>

<template>
  <input type="radio" :checked="isChecked" name="nav" :id="id" class="input" />
  <label :for="id" class="label">{{ text }}</label>
</template>

<style scoped lang="scss">
.input {
  appearance: none;
  position: absolute;
}

.label {
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: #c4c4c4;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background-color: transparent;
    border: 1px solid #c4c4c4;
  }
}

.input:checked+.label::before {
  content: "";
  background-color: rgba(255, 82, 82, 0.98);
  background-image: url(../assets/images/select.svg);
  background-repeat: no-repeat;
  background-position: center;
  border-color: transparent;
}
</style>
