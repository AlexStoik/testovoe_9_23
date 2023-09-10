<template>
  <div class="cocktail__description">
    <div class="cocktail__title">{{ cocktail.strDrink }}</div>
    <div class="cocktail__params">
      <div>{{ cocktail.strCategory }}</div>
      <div>{{ cocktail.strAlcoholic }}</div>
      <div>{{ cocktail.strGlass }}</div>
    </div>
    <div class="cocktail__instaction">
      <div>Instructions:</div>
      <div>{{ cocktail.strInstructions }}</div>
    </div>
    <CocktailCardIngredients :ingredients="ingredients" />
  </div>
</template>

<script>
import CocktailCardIngredients from '@/components/CocktailCardIngredients.vue'

export default {
  components: {
    CocktailCardIngredients
  },
  props: {
    cocktail: {
      Object,
      required: true
    }
  },
  computed: {
    ingredients () {
      const ingredients = []

      for (let i = 1; this.cocktail[`strIngredient${i}`] !== null; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`]
        const measure = this.cocktail[`strMeasure${i}`]

        ingredients.push({
          id: new Date(),
          ingredient,
          measure
        })
      }

      return ingredients
    }
  }
}
</script>

<style lang="less" scoped>
@mobile: ~"(min-width: 360px) and (max-width: 768px)";

.cocktail__description {
  display: grid;
  grid-template-rows: 1rem 3rem repeat(2, minmax(2rem, max-content));
  gap: 2rem;
  padding: 2rem;

  @media @mobile {
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
