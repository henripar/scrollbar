<script>
import ScrollPreview from './components/ScrollPreview.vue';
import ColorPicker from './components/ColorPicker.vue';
import NumberInput from './components/NumberInput.vue';

export default {
  data() {
    const userAgent = window.navigator.userAgent;
    let isFirefoxBrowser = false;
    if (userAgent.includes('Firefox')) {
      isFirefoxBrowser = true;
    }

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
      isFirefox: isFirefoxBrowser,
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
body {
  --sb-track-color: ${this.trackColor};
  --sb-thumb-color: ${this.thumbColor};
  --sb-size: ${this.width}px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size) 
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: ${this.scrollbarBorderRadius}px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
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
      <div v-if="!isFirefox" class="scrollBarSettingContiner">
        <label for="width">Scrollbar Width</label>
        <NumberInput
          @numberUpdated="updateScrollbarWidth"
          min="1"
          max="50"
          :number="width"
        />
      </div>
      <div v-if="!isFirefox" class="scrollBarSettingContiner">
        <label for="width">Scrollbar Border Radius</label>
        <NumberInput
          @numberUpdated="updateScrollbarBorderRadius"
          min="1"
          max="50"
          :number="scrollbarBorderRadius"
        />
      </div>
      <div v-if="!isFirefox" class="scrollBarSettingContiner">
        <label for="width">Thumb Border Width</label>
        <NumberInput
          @numberUpdated="updateScrollbarThumbBorderWidth"
          min="0"
          max="20"
          :number="scrollbarThumbBorderWidth"
        />
      </div>
      <div v-if="!isFirefox" class="colorPickerContainer">
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
      <div class="firefoxMsgContainer" v-if="isFirefox">
        <span class="alert">
          <svg viewBox="0 0 128 128" height="42px" width="42px">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              height="64"
              width="64"
              fill="#ce5c5c"
              d="M7.275 51.747l-3.221 2.579c-.477-1.941-.046-3.636.455-5.277 1.034-3.391 2.858-6.386 4.936-9.232.753-1.032 1.29-2.053 1.267-3.443-.085-4.919.436-9.778 2.122-14.443.86-2.379 2.022-4.592 4.008-6.514.783 3.826 1.493 7.503 3.586 10.261 1.51-1.339 3.021-2.613 4.457-3.965 8.624-8.111 18.778-13.179 30.482-14.847 14.681-2.093 28.23 1.056 40.53 9.432 1.162.792 2.496 1.333 3.763 1.962 5.825 2.893 10.222 7.198 12.976 13.119.462.991.82 2.03 1.227 3.046l.366-.063-1.584-9.499c6.35 8.911 8.353 18.801 8.895 29.179 1.186-1.655 1.177-3.615 1.819-5.49.211 1.362.475 2.719.624 4.087.586 5.377-.457 10.593-1.447 15.845-2.339 12.405-7.712 23.385-15.81 32.926-9.22 10.864-20.737 18.118-35.143 19.84-20.904 2.498-38.465-4.219-52.648-19.764C12.129 94.031 7.628 85.353 5.613 75.47c-1.524-7.481-1.157-14.921 1.326-22.198l.389-1.116c.022-.065-.016-.15-.053-.409zm94.636-9.92l.396-.342 4.464 3.447c-.059-1.046-.014-2.147-.195-3.208-.795-4.628-3.6-7.983-7.086-10.862-4.369-3.608-9.383-6.09-14.579-8.244-.511-.212-1.012-.449-1.516-.674l.062-.522 7.325-.434c-2.706-4.465-7.356-5.711-12.068-6.993l.587-.311c-9.55-2.982-19.015-3.216-28.551-.776-8.871 2.27-22.19 10.357-24.248 14.72l.6-.146c3.348-.822 6.69-1.048 10.062-.07.367.106.979-.137 1.295-.421 3.159-2.829 6.672-5.044 10.742-6.297 1.282-.395 2.604-.658 3.908-.981-.108.441-.305.621-.521.77-4.22 2.9-7.064 6.714-7.857 11.877-.043.283 0 .708.181.879 1.869 1.758 3.724 3.537 5.693 5.176.681.566 1.641.946 2.524 1.086 1.706.271 3.449.322 5.178.444 1.063.075 1.751.826 1.37 1.687-.565 1.282-1.182 2.471-2.479 3.336-2.454 1.638-4.726 3.551-7.093 5.322-.591.443-.614.845-.307 1.499.567 1.208 1.109 2.447 1.473 3.727.46 1.618.616 3.291.196 5.002-1.337-.295-2.562-.586-3.794-.831-1.238-.246-2.486-.438-3.728-.667-1.552-.285-2.876.259-3.672 1.524-.923 1.468-.938 3.002.049 4.26 2.011 2.561 4.288 4.858 6.977 6.712 2.225 1.536 4.726 2.39 7.388 1.82 1.853-.396 3.668-1.189 5.354-2.081 5.112-2.701 10.879-1.79 14.416 2.414.633.751 1.012 1.603.475 2.485-.516.847-1.382 1.046-2.377.797-1.034-.259-1.99-.081-2.924.539-2.465 1.636-4.886 3.378-7.5 4.744-4.211 2.201-8.8 2.942-13.539 2.766-.488-.016-.976 0-1.635 0 .244.289.331.412.438.515 3.423 3.319 7.347 5.87 11.876 7.363 4.987 1.644 10.084 2.317 15.258.888 5.799-1.601 10.354-5.114 14.25-9.553 1.57-1.79 2.994-3.707 4.485-5.565l.373.081-1.316 8.981c7.149-8.746 7.377-18.745 6.371-29.287 2.057 2.291 2.681 4.977 3.86 7.669 2.408-8.36 1.217-16.32-.641-24.265z"
            ></path>
          </svg>
          <span class="alertMsg">Firefox is not supported!</span>
        </span>
        <p class="isFirefoxMsg">It looks like you are using Firefox.</p>
        <p class="isFirefoxMsg">
          It's recommended to use Scrollbar.app with a WebKit or Blink based
          browser for the best experience eg. Chrome, Safari, Edge, Opera, Brave
          etc..
        </p>
        <p class="isFirefoxMsg">
          Firefox does not support
          <span class="highlight">::-webkit-scrollbar</span> selectors.
        </p>
        <p class="isFirefoxMsg">
          For customizing scrollbar on Firefox you should use
          <span class="highlight">scrollbar-color</span> and
          <span class="highlight">scrollbar-width</span> selectors.
        </p>
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
        <pre class="codeOutput">
body {
  --sb-track-color: {{ trackColor }};
  --sb-thumb-color: {{ thumbColor }};
  --sb-size: {{ width }}px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: {{ scrollbarBorderRadius }}px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: {{ scrollbarBorderRadius }}px;
{{
            scrollbarThumbBorderWidth > 0
              ? '  border: ' +
                scrollbarThumbBorderWidth +
                'px ' +
                'solid ' +
                scrollbarThumbBorderColor +
                ';' +
                '\n' +
                '}'
              : '}'
          }}</pre
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

.alert {
  color: #ce5c5c;
  display: flex;
  align-items: center;
}

.isFirefoxMsg {
  margin-top: 1rem;
}

.alertMsg {
  margin-left: 1rem;
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

.codeOutput {
  margin-top: 1rem;
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

.firefoxMsgContainer {
  background: #000000;
  padding: 1rem;
  border-radius: 10px;
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

.highlight {
  background-color: #232e33;
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.77);
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
