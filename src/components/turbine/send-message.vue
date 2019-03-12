<template>
  <div class="bx--form-item send_message">
    <input
      ref="input"
      v-model="payload"
      class="bx--text-input send_message__input"
      type="text"
      :placeholder="placeholder"
      @keydown.enter="send()"
      @focus="focus()"
      @focusout="focusOut()"
    >
  </div>
</template>

<script>
  import Turbine from '@/lib/turbine.ts';

  const initialPlaceholder = 'write something ...';

  export default {
    props: {
      turbine: Turbine,
    },
    data() {
      return {
        placeholder: initialPlaceholder,
        payload: null,
      };
    },
    methods: {
      focus() {
        this.placeholder = '';
      },
      focusOut() {
        this.placeholder = initialPlaceholder;
      },
      send() {
        this.turbine.publish(this.payload);
        this.payload = '';
      },
    },
  };
</script>

<style lang="scss" scoped>
.send_message {
  &__input {
    width: 100%;
    background-color: #fff;
    box-shadow: none;

    &:focus{
      box-shadow: none;
    }
  }
}
</style>
