<template>
  <div>
    <VHeader />
    <slot />
  </div>
</template>

<script>
  import VHeader from '@/components/header';

  export default {
    components: {
      VHeader,
    },
  };
</script>
