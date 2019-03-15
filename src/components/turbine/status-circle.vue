<template>
  <div class="status">
    <span
      class="status__text bx--type-caption"
      data-icon="status-circle"
      :class="getStatusClass"
    >
      {{ getStatusText }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Turbine, Status } from '@/lib/turbine.ts';

const statusToClass = new Map<Status, string>([
  [Status.DISCONNECTED, 'status--offline'],
  [Status.CONNECTING, 'status--connecting'],
  [Status.ONLINE, 'status--online'],
]);

const statusToTextBuilder = (label: string) =>
  new Map<Status, string>([
    [Status.DISCONNECTED, `${label}`],
    [Status.CONNECTING, `connecting to ${label}`],
    [Status.ONLINE, `${label}`],
  ]);

@Component({})
export default class StatusCircle extends Vue {
  @Prop()
  private turbine!: Turbine;

  private hasConnection: boolean = navigator.onLine;
  private statusToText: Map<Status, string>;

  constructor() {
    super();
    this.statusToText = statusToTextBuilder(this.turbine.label);
  }

  get getStatusClass(): string {
    if (!this.hasConnection) {
      return 'status--no-internet';
    }
    return statusToClass.get(this.turbine.status)!;
  }

  get getStatusText(): string {
    if (!this.hasConnection) {
      return 'no internet connection';
    }
    return this.statusToText.get(this.turbine.status)!;
  }
}
</script>

<style lang="scss" scoped>
.status {
  &__text {
    position: relative;
    margin: 0 0 0 17px;
  }

  &--no-internet::before {
    background-color: rgba(220, 220, 220, 1);
  }

  &--connecting::before {
    background-color: rgb(255, 255, 0);
  }

  &--online::before {
    background-color: rgb(0, 255, 0);
  }

  &--offline::before {
    background-color: rgb(255, 0, 0);
  }
}

[data-icon="status-circle"] {
  &::before {
    content: " ";
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    top: 50%;
    margin-top: -3px;
    margin-left: -12px;
    border-radius: 50%;
    box-shadow: 0 1px 1px rgba(86, 86, 86, 0.56);
  }
}
</style>
