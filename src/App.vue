<script>
import ScrollPreview from './components/ScrollPreview.vue';
import ColorPicker from './components/ColorPicker.vue';
import NumberInput from './components/NumberInput.vue';

export default {
  data() {
    return {
      thumbColor: '#6BAF8D',
      trackColor: '#232E33',
      width: 10,
      scrollbarBorderRadius: 10,
      scrollbarThumbBorderWidth: 0,
      scrollbarThumbBorderColor: '#232E33',
      isThumbColorPickerOpen: false,
      isTrackColorPickerOpen: false,
      isThumbBorderColorPickerOpen: false,
      isCSSTextCopied: false,
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
    copyCSSCode() {
      let code = `
::-webkit-scrollbar {
  width: ${this.width}px;
}

::-webkit-scrollbar-track {
  background: ${this.trackColor};
  border-radius: ${this.scrollbarBorderRadius}px;
}

::-webkit-scrollbar-thumb {
  background: ${this.thumbColor};
  border-radius: ${this.scrollbarBorderRadius}px;
  ${
    this.scrollbarThumbBorderWidth > 0
      ? 'border: ' +
        this.scrollbarThumbBorderWidth +
        'px ' +
        'solid ' +
        this.scrollbarThumbBorderColor +
        ';'
      : ''
  }
  }`;
      navigator.clipboard.writeText(code);
      this.isCSSTextCopied = true;
      setTimeout(() => {
        this.isCSSTextCopied = false;
      }, 1000);
    },
  },
  components: {
    ScrollPreview,
    ColorPicker,
    NumberInput,
  },
};
</script>

<template>
  <header>
    <img class="logo" src="./assets/logo.png" alt="logo" />
    <h1 class="title">Scrollbar.app</h1>
  </header>
  <div class="mainContainer">
    <div class="settingsContainer">
      <h2>Settings</h2>
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
        <label for="width">Scrollbar Width</label>
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
        <label for="width">Thumb Border Width</label>
        <NumberInput
          @numberUpdated="updateScrollbarThumbBorderWidth"
          min="0"
          max="20"
          :number="scrollbarThumbBorderWidth"
        />
      </div>
      <div class="colorPickerContainer">
        <span>Thumb Border Color Color</span>
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
      <div class="githubBtnContainer">
        <a href="https://github.com/henripar/scrollbar" class="githubBtn"
          ><img class="githubLogo" src="./assets/github-mark-white.png" /> View
          on Github</a
        >
      </div>
    </div>

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
      <h2>Code</h2>
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
  border-radius: {{ scrollbarBorderRadius }}px;
  {{
            scrollbarThumbBorderWidth > 0
              ? 'border: ' +
                scrollbarThumbBorderWidth +
                'px ' +
                'solid ' +
                scrollbarThumbBorderColor +
                ';'
              : null
          }}
}</pre
        >
      </code>
      <button @click="copyCSSCode" class="btn">
        <span v-if="!isCSSTextCopied">Copy code</span
        ><span v-if="isCSSTextCopied">Copied!</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
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

h2 {
  color: #ffffffe3;
}

.btn {
  display: block;
  border: none;
  outline: none;
  background-image: linear-gradient(90deg, #6baf8d, #6b8d8d, #6baf8d);
  border-radius: 10px;
  cursor: pointer;
  width: 170px;
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
}

.btn:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.logo {
  width: 50px;
}
.title {
  margin-left: 1rem;
}

.githubBtnContainer {
  margin: 4rem auto;
  cursor: pointer;
}

.githubBtn:hover {
  color: #ffffffe3;
}

.githubBtn {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  color: rgba(235, 235, 235, 0.64);
  text-decoration: none;
}

.githubBtn img {
  margin-right: 1rem;
}
.githubLogo {
  width: 32px;
}

@media screen and (max-width: 1260px) {
  .mainContainer {
    grid-template-areas:
      'settings preview preview'
      'settings preview preview'
      'code preview preview';
    grid-template-rows: auto;
  }
  .settingsContainer {
    grid-area: settings;
  }
  .codeOutputContainer {
    grid-area: code;
  }
  .scrollPreviewContainer {
    grid-area: preview;
  }
}
@media screen and (max-width: 770px) {
  .mainContainer {
    grid-template-areas:
      'settings settings settings'
      'preview preview preview'
      'code code code';
    grid-template-rows: auto;
  }
}
</style>
