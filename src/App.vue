<script>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import ScrollPreview from './components/ScrollPreview.vue';
import ColorPicker from './components/ColorPicker.vue';
import NumberInput from './components/NumberInput.vue';

export default {
  data() {
    return {
      thumbColor: '#6BAF8D',
      trackColor: '#fff',
      width: 10,
      scrollbarBorderRadius: 10,
      scrollbarThumbBorderWidth: 0,
      scrollbarThumbBorderColor: '#fff',
      borderStyle: 'solid',
      borderColor: 'blue',
      isThumbColorPickerOpen: false,
      isTrackColorPickerOpen: false,
      isThumbBorderColorPickerOpen: false,
    };
  },
  methods: {
    updateThumbColor(e) {
      this.thumbColor = e;
    },
    updateTrackColor(e) {
      this.trackColor = e;
    },
    updateThumbBorderColor(e) {
      this.scrollbarThumbBorderColor = e;
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
    updateScrollbarBorderRadius(e) {
      if (e == 'add') {
        this.scrollbarBorderRadius = this.scrollbarBorderRadius + 1;
      }
      if (e == 'reduce') {
        this.scrollbarBorderRadius = this.scrollbarBorderRadius - 1;
      }
    },
    updateScrollbarThumbBorderWidth(e) {
      if (e == 'add') {
        this.scrollbarThumbBorderWidth = this.scrollbarThumbBorderWidth + 1;
      }
      if (e == 'reduce') {
        this.scrollbarThumbBorderWidth = this.scrollbarThumbBorderWidth - 1;
      }
    },
    openColorPicker(position) {
      if (position === 'thumb') {
        this.isThumbColorPickerOpen = !this.isThumbColorPickerOpen;
        this.isTrackColorPickerOpen = false;
        this.isThumbBorderColorPickerOpen = false;
      } else if (position === 'track') {
        this.isTrackColorPickerOpen = !this.isTrackColorPickerOpen;
        this.isThumbColorPickerOpen = false;
        this.isThumbBorderColorPickerOpen = false;
      } else if (position === 'thumbBorder') {
        this.isThumbBorderColorPickerOpen = !this.isThumbBorderColorPickerOpen;
        this.isThumbColorPickerOpen = false;
        this.isTrackColorPickerOpen = false;
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
  <header>
    <img class="logo" src="./assets/scrollbar_logo3.png" alt="logo" />
    <h1 class="title">Scrollbar.app</h1>
  </header>
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
      <div class="scrollBarSettingContiner">
        <label for="width">Scrollbar with</label>
        <NumberInput
          @numberUpdated="updateScrollbarWidth"
          min="1"
          max="50"
          :number="width"
        />
      </div>
      <div class="scrollBarSettingContiner">
        <label for="width">Scrollbar Border Radius</label>
        <NumberInput
          @numberUpdated="updateScrollbarBorderRadius"
          min="1"
          max="50"
          :number="scrollbarBorderRadius"
        />
      </div>
      <div class="scrollBarSettingContiner">
        <label for="width">Scrollbar Border Width</label>
        <NumberInput
          @numberUpdated="updateScrollbarThumbBorderWidth"
          min="0"
          max="20"
          :number="scrollbarThumbBorderWidth"
        />
      </div>
      <div class="colorPickerContainer">
        <span>Scrollbat Thumb Border Color Color</span>
        <span>
          <span
            @click="openColorPicker('thumbBorder')"
            :style="{ background: scrollbarThumbBorderColor }"
            class="colorBox"
          />
          <ColorPicker
            v-if="isThumbBorderColorPickerOpen"
            @colorUpdated="updateThumbBorderColor"
            :color="scrollbarThumbBorderColor"
          />
        </span>
      </div>
    </div>
    <!-- <ColorPicker @colorUpdated="updateTrackColor" :color="trackColor" /> -->
    <div class="scrollPreviewContainer">
      <ScrollPreview
        :trackColor="this.trackColor"
        :thumbColor="this.thumbColor"
        :scrollbarWidth="this.width"
        :scrollbarBorderRadius="this.scrollbarBorderRadius"
        :scrollbarThumbBorderWidth="this.scrollbarThumbBorderWidth"
        :scrollbarThumbBorderColor="this.scrollbarThumbBorderColor"
      />
    </div>
    <div class="codeOutputContainer">
      <h1>Code</h1>
      <code>
        <pre>
::-webkit-scrollbar {
  width: {{ width }}px;
}

::-webkit-scrollbar-track {
  background: {{ trackColor }};
  border-radius: {{ scrollbarBorderRadius }}px;
}

::-webkit-scrollbar-thumb {
  background: {{ thumbColor }};
  border-radius:{{ scrollbarBorderRadius }}px;
  border: {{ scrollbarThumbBorderWidth }}px solid {{
            scrollbarThumbBorderColor
          }};
}</pre
        >
      </code>
      <button class="btn">Copy code</button>
    </div>
  </div>
</template>

<style scoped>
/*My styles */
.mainContainer {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 20px;
  width: 75%;
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
.scrollBarSettingContiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
}

header {
  display: flex;
  flex-direction: row;
  margin: 3rem auto;
  width: fit-content;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  outline: none;
  background: linear-gradient(90deg, #6baf8d, #6b8d8d);
  border-radius: 10px;
}
.logo {
  width: 50px;
}
.title {
  margin-left: 1rem;
}
</style>
