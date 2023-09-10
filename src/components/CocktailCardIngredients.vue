<template>
  <div>
    <div>List of ingredients:</div>
    <div
      v-for="item in ingredients"
      :key="item.id"
    >{{ item.measure }} {{ item.ingredient }}</div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
}
</script>
