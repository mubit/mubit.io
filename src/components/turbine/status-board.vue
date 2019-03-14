<template>
  <div class="status-board">
    <TurbineStatus
      v-for="turbine in turbines"
      :key="turbine.label"
      :turbine="turbine"
    />
  </div>
</template>

<script lang="ts">

import TurbineStatus from '@/components/turbine/turbine-status.vue';
import { Turbine } from '@/lib/turbine';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    components: {
        TurbineStatus,
    },
})
export default class StatusBoard extends Vue {

    @Prop()
    private turbines!: Turbine[];

    constructor() {
        super();
    }
}

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
