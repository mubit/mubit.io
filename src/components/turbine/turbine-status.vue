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

<script>
import { Turbine, Status } from '@/lib/turbine.ts';

const statusToClass = {
  [Status.DISCONNECTED]: 'status--offline',
  [Status.CONNECTING]: 'status--connecting',
  [Status.ONLINE]: 'status--online',
};

const statusToText = (label) => ({
  [Status.DISCONNECTED]: `${label}`,
  [Status.CONNECTING]: `connecting to ${label}`,
  [Status.ONLINE]: `${label}`,
});

export default {
  props: {
    turbine: Turbine,
  },
  data() {
    return {
      hasConnection: navigator.onLine,
    };
  },
  computed: {
    getStatusClass() {
      if (!this.hasConnection) {
        return 'status--no-internet';
      }
      return statusToClass[this.turbine.status];
    },
    getStatusText() {
      if (!this.hasConnection) {
        return 'no internet connection';
      }
      return statusToText(this.turbine.label)[this.turbine.status];
    },
  },
};
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
    content: ' ';
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
