<template lang="html">
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">BeerMad</h2>

    <md-button class="md-icon-button">
      <md-icon @click.native='navigateRegForm'>add</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    navigateRegForm() {
      this.$router.push('new');
    },
  },
};
</script>

<style lang="css">

</style>
