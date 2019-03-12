<template>
  <div class="status-board">
    <TurbineStatus
      v-for="turbine in turbines"
      :key="turbine.label"
      :turbine="turbine"
    />
  </div>
</template>

<script>
  import TurbineStatus from '@/components/turbine/turbine-status';
  import Turbine from '@/lib/turbine.ts';

  export default {
    components: {
      TurbineStatus,
    },
    props: ['turbines'],
  };
</script>

<style lang="scss" scoped>
  .status-board {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row;
    flex-flow: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    .status {
      &:first-child {
        padding: 0;
      }
    }
  }

  .status-board__title {
    font-weight: bold;
    margin: 0;

    @media(max-width: 450px) {
      display: none
    }
  }
</style>
