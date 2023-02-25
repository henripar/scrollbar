<script>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import ScrollPreview from './components/ScrollPreview.vue';
import ColorPicker from './components/ColorPicker.vue';

export default {
  data() {
    return {
      thumbColor: '#194D33A8',
      trackColor: '#fff',
      width: ['#e5b178', '#d670b4'],
      borderRadius: '20px',
      borderWidth: '20px',
      borderStyle: 'solid',
      borderColor: 'blue',
      isThumbColorPickerOpen: false,
      isTrackColorPickerOpen: false,
    };
  },
  methods: {
    updateThumbColor(e) {
      this.thumbColor = e;
    },
    updateTrackColor(e) {
      this.trackColor = e;
    },
    updateColor(e) {
      this.thumbColor = e;
      console.log(e);
    },
    openColorPicker(position) {
      if (position === 'thumb') {
        this.isThumbColorPickerOpen = !this.isThumbColorPickerOpen;
      } else if (position === 'track') {
        this.isTrackColorPickerOpen = !this.isTrackColorPickerOpen;
      }
    },
  },
  components: { HelloWorld, ScrollPreview, TheWelcome, ColorPicker },
};
</script>

<template>
  <div class="mainContainer">
    <div class="settingsContainer">
      <div class="colorPickerContainer">
        <span
          @click="openColorPicker('thumb')"
          :style="{ background: thumbColor }"
          class="colorBox"
        />
        <ColorPicker
          v-if="isThumbColorPickerOpen"
          @colorUpdated="updateThumbColor"
          :color="thumbColor"
        />
      </div>
      <div>
        <span
          @click="openColorPicker('track')"
          :style="{ background: trackColor }"
          class="colorBox"
        />
        <ColorPicker
          v-if="isTrackColorPickerOpen"
          @colorUpdated="updateTrackColor"
          :color="trackColor"
        />
      </div>
    </div>
    <!-- <ColorPicker @colorUpdated="updateTrackColor" :color="trackColor" /> -->
    <div class="scrollPreviewContainer">
      <ScrollPreview
        :trackColor="this.trackColor"
        :thumbColor="this.thumbColor"
      />
    </div>
    <div class="codeOutputContainer">
      <h1>Code</h1>
    </div>
  </div>
</template>

<style scoped>
/*My styles */
.mainContainer {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  width: 90%;
  margin: 1rem auto;
}
.colorBox {
  height: 20px;
  width: 20px;
  display: block;
  border-radius: 7px;
  margin-left: 1rem;
  position: relative;
}
.colorBox:hover {
  cursor: pointer;
}
</style>
