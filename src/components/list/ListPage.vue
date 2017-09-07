<template lang="html">
  <div class="body">
    <!-- <ListHeader></ListHeader> -->
    <BeerCard></BeerCard>
    <BeerCard></BeerCard>
    <TabMenu></TabMenu>
  </div>
</template>

<script>
import ListHeader from '@/components/list/ListHeader';
import BeerCard from '@/components/list/BeerCard';
import TabMenu from '@/components/common/TabMenu';

export default {
  components: {
    ListHeader,
    BeerCard,
    TabMenu,
  },
};
</script>

<style lang="css">
.body {
  height: 100%;
}
</style>
