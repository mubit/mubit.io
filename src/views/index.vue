<template>
  <Layout>
    <img
      class="logo"
      src="@/assets/mubit.png"
    >
    <TurbineWidget :turbine="turbine" />
  </Layout>
</template>

<script>
import { globalTurbine } from '@/lib/turbine.ts';
import TurbineWidget from '@/components/turbine/turbine-widget.vue';
import Layout from '@/components/default';

export default {
  components: {
    Layout,
    TurbineWidget,
  },
  data() {
    return {
      turbine: globalTurbine,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  max-height: 200px;
  max-width: 200px;
  width: auto;
  margin: auto;
}
</style>
