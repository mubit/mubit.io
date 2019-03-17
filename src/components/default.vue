<template>
  <div>
    <VHeader />
    <slot />
  </div>
</template>

<script>
  import VHeader from '@/components/Header';

  export default {
    components: {
      VHeader,
    },
  };
</script>
