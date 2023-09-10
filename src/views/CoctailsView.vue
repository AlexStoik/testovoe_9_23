<template>
  <div class="cocktails">
    <CocktailsMenu />
    <CocktailCard
      v-if="cocktail.length !== 0"
      :key="cocktail_code"
      :cocktailType="cocktail"
    />
  </div>
</template>

<script>
import CocktailCard from '@/components/CocktailCard.vue'
import CocktailsMenu from '@/components/CocktailsMenu.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    CocktailsMenu,
    CocktailCard
  },
  data () {
    return {
      cocktail_code: '',
      cocktail: []
    }
  },
  watch: {
    $route (to, from) {
      this.cocktail_code = to.path.slice(1)
      this.getCocktail()
    }
  },
  mounted () {
    this.cocktail_code = this.$route.path.slice(1)
    this.getCocktail()
  },
  methods: {
    ...mapActions({
      fetchCocktail: 'fetchCocktail'
    }),
    async getCocktail () {
      this.cocktail = await this.fetchCocktail(this.cocktail_code)
    }
  }
}
</script>

<style lang="less" scoped>
.cocktails {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 0.7rem;
}
</style>
