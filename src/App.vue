<template>
  <router-view />
</template>

<style lang="less">
@mobile: ~"(min-width: 360px)";
@mobile-area: 340px;

@tablet: ~"(min-width: 768px)";
@tablet-area: 750px;

@desktop: ~"(min-width: 1024px)";
@desktop-area: 970px;

html, body {
  height: 90%;
}
#app {
  margin: auto;
  margin-top: 2rem;

  display: block;
  border: solid 2px black;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  @media @mobile {
    width: @mobile-area;
  }

  @media @tablet {
    width: @tablet-area;
  }

  @media @desktop {
    width: @desktop-area;
  }
}
</style>
