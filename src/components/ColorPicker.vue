<template>
  <div class="colorPickerContainer">
    <Chrome v-model="colors" @update="this.updateValue" />
  </div>
</template>

<script>
import { Chrome } from '@ckpack/vue-color';
export default {
  name: 'ColorPicker',
  props: ['color'],
  data() {
    return {
      colors: this.color,
    };
  },
  emits: ['colorUpdated'],
  components: {
    Chrome,
  },
  methods: {
    updateValue() {
      this.$emit('colorUpdated', this.colors.hex);
    },
  },
  watch: {
    colors: {
      handler() {
        this.$emit(
          'colorUpdated',
          this.colors?.hex?.toLowerCase() ?? this.colors.toLowerCase()
        );
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.colorPickerContainer {
  position: absolute;
  z-index: 1;
}
.vc-chrome-alpha-wrap {
  display: none !important;
}
.vc-checkerboard {
  display: none;
}
.vc-chrome-controls {
  display: flex !important;
  align-items: center !important;
}
.vc-chrome-fields-wrap {
  display: none;
}
</style>
