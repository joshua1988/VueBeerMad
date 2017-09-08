<template lang="html">
  <form>
    <md-button class="md-raised md-primary">
      <md-icon>photo</md-icon>
      <input type="file" accept="image/*" capture="camera"/>
    </md-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      src: null,
    };
  },
  methods: {
    selectPhoto() {
      console.log('hello');
    },
  },
};
</script>

<style lang="css">
</style>
