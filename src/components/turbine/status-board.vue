<template>
  <div class="status-board">
    <StatusCircle
      v-for="t in turbines"
      :key="t.label"
      :turbine="t"
    />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  import StatusCircle from '@/components/turbine/status-circle.vue';
  import { Turbine } from '@/lib/turbine';

  @Component({
    components: {
        StatusCircle,
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
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    flex-wrap: wrap;
    box-pack: center;
    box-orient: horizontal;
    box-direction: normal;
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
