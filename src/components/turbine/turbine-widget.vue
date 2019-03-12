<template>
  <div class="widget">
    <div class="widget__hints">
      <p class="widget__hints__try">
        Try it out
      </p>
      <p class="widget__hints__code">
        curl https://turbine.mubit.io/v1/rtm/mubit.welcome -d 'Hello world'
      </p>
    </div>
    <div class="widget__shell">
      <MessagesShell :turbine="turbine" />
      <SendMessage :turbine="turbine" />
    </div>
  </div>
</template>

<script>
import MessagesShell from '@/components/turbine/messages-shell';
import SendMessage from '@/components/turbine/send-message';
import Turbine from '@/lib/turbine.ts';

export default {
  components: {
    MessagesShell,
    SendMessage,
  },
  props: {
    turbine: Turbine,
  },
};
</script>

<style lang="scss" scoped>
.widget {
  max-width: 30rem;
  margin: auto;

  &__hints {
    text-align: center;

    &__code {
      color: #c7254e;
      background-color: #f9f2f4;
      padding: 6px;
      display: inline-block;
      word-wrap: break-word;
      font-family: monospace;
    }
  }

  &__shell {
    box-shadow: 0 12px 24px 0 rgba(0,0,0,.1);
  }
}
</style>
