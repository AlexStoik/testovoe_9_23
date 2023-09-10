<template>
  <div>
    Variables:
    <div
      v-for="variable in variables"
      :class="[variable.key == curVariable ? 'cocktail__variable_current' : '', 'cocktail__variable']"
      :key="variable.id"
      @click="changeVariable(variable.key)"
    >{{ variable.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    variables: {
      type: Array,
      required: true
    },
    curVariable: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeVariable (variable) {
      this.$emit('changeVariable', parseInt(variable))
    }
  }
}
</script>

<style lang="less" scoped>
.cocktail__variable {
  cursor: pointer;
  font-size: small;
  color: blue;

  &_current {
    color: gray;
  }
}
</style>
