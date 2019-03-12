<template>
  <div class="messages">
    <div class="messages__console">
      <p
        v-for="message in turbine.store.data"
        :key="message"
        v-text="message"
      />
    </div>
  </div>
</template>

<script>
  import Turbine from '@/lib/turbine.ts';

  export default {
    props: {
      turbine: Turbine,
    },
  };
</script>

<style lang="scss" scoped>
  .messages {
    &__console {
      padding: 1rem;
      background: linear-gradient(-180deg,#f7f7f7,#e4e4e4);
      border-bottom: 1px solid #d0d0d0;
      p {
        font-family: 'ibm-plex-mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier;
        margin: 0;
        margin-bottom: 0.3rem;
        color: #2d2d2d;
      }
    }
  }
</style>
