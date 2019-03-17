<template>
  <header>
    <h4 class="header__title">
      mubit.io
    </h4>
    <StatusBoard :turbines="turbines" />
  </header>
</template>

<script>
  import { globalTurbine, localTurbine } from '@/lib/turbine.ts';
  import StatusBoard from '@/components/turbine/StatusBoard';

  export default {
    components: {
      StatusBoard,
    },
    data() {
      const turbines = [globalTurbine];
      if (process.env.NODE_ENV === 'development') {
        turbines.push(localTurbine);
      }
      return {
        turbines,
      };
    },
  };
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    line-height: 2rem;
    padding: 0.75rem 0rem;
  }

  .header__title {
    text-align: center;
  }

  .status-board {
    margin: 0 1rem;
  }
</style>
