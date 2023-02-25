<script>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import ScrollPreview from './components/ScrollPreview.vue';
import ColorPicker from './components/ColorPicker.vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import NumberInput from './components/NumberInput.vue';

export default {
  data() {
    return {
      thumbColor: '#194D33A8',
      trackColor: '#fff',
      width: 10,
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
    updateScrollbarWidth(e) {
      if (e == 'add') {
        this.width = this.width + 1;
      }
      if (e == 'reduce') {
        this.width = this.width - 1;
      }
    },
    openColorPicker(position) {
      if (position === 'thumb') {
        this.isThumbColorPickerOpen = !this.isThumbColorPickerOpen;
      } else if (position === 'track') {
        this.isTrackColorPickerOpen = !this.isTrackColorPickerOpen;
      }
    },
  },
  components: {
    HelloWorld,
    ScrollPreview,
    TheWelcome,
    ColorPicker,
    NumberInput,
  },
};
</script>

<template>
  <div class="mainContainer">
    <div class="settingsContainer">
      <div class="colorPickerContainer">
        <span>Thumb Color</span>
        <span>
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
        </span>
      </div>
      <div class="colorPickerContainer">
        <span>Track Color</span>
        <span>
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
        </span>
      </div>
      <div class="scrollBarWidthSettingConteiner">
        <label for="width">Scrollbar with</label>
        <NumberInput
          @numberUpdated="updateScrollbarWidth"
          min="1"
          max="50"
          :number="width"
        />
      </div>
    </div>
    <!-- <ColorPicker @colorUpdated="updateTrackColor" :color="trackColor" /> -->
    <div class="scrollPreviewContainer">
      <ScrollPreview
        :trackColor="this.trackColor"
        :thumbColor="this.thumbColor"
        :scrollbarWidth="this.width"
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
  grid-column-gap: 20px;
  width: 90%;
  margin: 1rem auto;
}
.colorBox {
  height: 20px;
  width: 20px;
  display: block;
  border-radius: 7px;
  position: relative;
}
.colorBox:hover {
  cursor: pointer;
}

.colorPickerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
}
.scrollBarWidthSettingConteiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
}
</style>
