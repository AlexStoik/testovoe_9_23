<template>
  <div class="navigation">
    <nav class="navigation__items">
      <router-link
        v-for="cocktail in cocktailsList"
        :key="cocktail"
        :to="'/' + cocktail"
      >
        {{ cocktail }}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      cocktailsList: state => state.cocktailsList
    })
  }
}
</script>

<style lang="less">
@mobile: ~"(min-width: 360px) and (max-width: 768px)";

.navigation {
  border-right: solid 1px black;
  padding-top: 3rem;

  &__items {
    display: grid;
    grid-template-rows: repeat(4, 2rem);
    grid-row-gap: 0.5rem;

    a {
      text-decoration: none;
      text-transform: capitalize;
      display: flex;
      color: black;
      padding-left: 2rem;
      align-items: center;

      @media @mobile {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }

      &.router-link-exact-active {
        border: solid 2px #cccccc;
        background-color: #f3f3f3;
      }
    }
  }

  @media @mobile {
    padding-top: 1.5rem;
  }
}
</style>
