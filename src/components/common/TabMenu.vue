<template lang="html">
  <md-bottom-bar>
    <md-bottom-bar-item md-icon="home" md-active></md-bottom-bar-item>
    <md-bottom-bar-item md-icon="add" @click.native='navigateRegForm'></md-bottom-bar-item>
    <md-bottom-bar-item md-icon="favorite"></md-bottom-bar-item>
  </md-bottom-bar>
</template>

<script>
export default {
  methods: {
    navigateRegForm() {
      this.$router.push('new');
    },
  },
};
</script>

<style lang="css">
  .md-tabs {
    position: absolute;
    bottom: 0;
  }
  .md-tabs-content {
    height: 0 !important;
  }
</style>
