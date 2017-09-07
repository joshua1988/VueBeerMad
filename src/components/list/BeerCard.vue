<template lang="html">
  <md-card md-with-hover>
    <md-card-media md-ratio="16:9">
      <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/20638089_1421949364508024_4683921321974763140_n.jpg?oh=7a7620f0634f5f5dae68a4ced3ae8108&oe=5A1D6A1E" alt="Craft Beer">

      <md-ink-ripple></md-ink-ripple>
    </md-card-media>

    <md-card-actions>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>bookmark</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>share</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {

};
</script>

<style lang="css">
img {
  height: 10px;
}
.md-card {
  padding: 0.5rem;
  margin-top: auto;
}
</style>
