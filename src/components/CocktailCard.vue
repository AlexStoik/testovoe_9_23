<template>
  <div class="cocktail">
    <CocktailCardDescription :cocktail="cocktail" />
    <div class="cocktail__img">
      <img
        v-if="cocktailType"
        loading="lazy"
        :src="cocktail.strDrinkThumb"
      />
      <CocktailCardVariables
        v-if="haveVaribles()"
        :variables="variables"
        :curVariable="curVariable"
        @changeVariable="changeVariable"
      />
    </div>
  </div>
</template>

<script>
import CocktailCardVariables from '@/components/CocktailCardVariables.vue'
import CocktailCardDescription from '@/components/CocktailCardDescription.vue'

export default {
  components: {
    CocktailCardVariables,
    CocktailCardDescription
  },
  props: {
    cocktailType: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      curVariable: 0
    }
  },
  computed: {
    cocktail () {
      return this.cocktailType[this.curVariable]
    },
    variables () {
      const variables = []
      const cocktail = this.cocktailType

      for (const key in cocktail) {
        variables.push({
          id: cocktail.idDrink,
          key,
          name: cocktail[key].strDrink
        })
      }

      return variables
    }
  },
  methods: {
    haveVaribles () {
      return Object.keys(this.cocktailType).length > 1
    },
    changeVariable (variable) {
      this.curVariable = variable
    }
  }
}
</script>

<style lang="less" scoped>
@mobile: ~"(min-width: 360px) and (max-width: 768px)";

.cocktail {
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: scroll;

  &__img {
    border: solid 2px black;
    margin-top: 2rem;
    margin-right: 1rem;
    height: 40%;

    @media @mobile {
      margin-top: 1rem;
      margin-right: 0.5rem;
      height: 15%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
