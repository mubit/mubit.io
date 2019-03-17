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

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';
import { Turbine } from '@/lib/turbine.ts';

const initialPlaceholder: string = 'write something ...';

@Component({})
export default class SendMessage extends Vue {
  @Prop()
  private turbine!: Turbine;

  private placeholder: string = initialPlaceholder;
  private payload: string = '';

  constructor() {
    super();
  }

  private focus() {
    this.placeholder = '';
  }

  private focusOut() {
    this.placeholder = initialPlaceholder;
  }

  private send() {
    this.turbine.publish(this.payload);
    this.payload = '';
  }
}
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
