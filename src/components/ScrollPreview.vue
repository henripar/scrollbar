<script>
export default {
  props: [
    'thumbColor',
    'trackColor',
    'scrollbarWidth',
    'scrollbarBorderRadius',
    'scrollbarThumbBorderWidth',
    'scrollbarThumbBorderColor',
    'theme',
  ],
  data() {
    // return {
    //   thumbColor: 'blue',
    //   trackColor: true,
    //   width: ['#e5b178', '#d670b4'],
    //   borderRadius: '20px',
    //   borderWidth: '20px',
    //   borderStyle: 'solid',
    //   borderColor: 'blue',
    // };
  },
  methods: {
    changeDarkMode() {
      this.borderRadius = '10px';
    },
    updateColor(color, position) {
      this.with[position] = color;
    },
    generateThumbColor(color) {
      var root = document.querySelector('body');
      root.style.setProperty('scrollbar-track-color', color);
      return { 'scrollbar-track-color': color };
    },
    generateTrackColor(color) {
      return {
        '::-webkit-scrollbar-track': color,
      };
    },
    createCSSVariables() {
      return {
        '--thumb-color': this.thumbColor,
        '--track-color': this.trackColor,
        '--scrollbar-width': this.scrollbarWidth + 'px',
        '--scrollbar-border-radius': this.scrollbarBorderRadius + 'px',
        '--scrollbar-thumb-border-width': this.scrollbarThumbBorderWidth + 'px',
        '--scrollbar-thumb-border-color': this.scrollbarThumbBorderColor,
      };
    },
  },
};
</script>

<template>
  <div :style="createCSSVariables()" class="container">
    <h2 :class="[theme, 'previewHeader']">CSS Scrollbar Selectors</h2>
    <p>
      Scrollbars are an essential component of any website that contains lengthy
      content. They provide users with a way to navigate through the content
      with ease. While browsers come with default scrollbar styles, they may not
      always match the design of your website. This is where CSS scrollbar
      selectors come in.
    </p>
    <p>
      There are multiple CSS pseudo-elements that allows us to customize
      elements scrollbar on WebKit and Blink based browsers.
    </p>
    <p>Here's a quick reminder of the available pseudo-elements:</p>
    <ul>
      <li>
        <code class="highlight">::-webkit-scrollbar</code>
        — the entire scrollbar.
      </li>
      <li>
        <code class="highlight">::-webkit-scrollbar-thumb</code>
        — the draggable scrolling handle.
      </li>
      <li>
        <code class="highlight">::-webkit-scrollbar-track</code>
        — the track (progress bar) of the scrollbar
      </li>
      <li>
        <code class="highlight">::-webkit-scrollbar-corner</code>
        — the bottom corner of the scrollbar, where both horizontal and vertical
        scrollbars meet. This is often the bottom-right corner of the browser
        window.
      </li>
    </ul>
    <p>
      You can add these pseudo-elements to any element that has content which is
      longer than the space reserved for the element.
    </p>
    <p>
      Note: Elements <code class="highlight">overflow</code> property must be
      set to <code class="highlight">scroll</code>. Othervice no scrollbar is
      displayed.
    </p>
    <p>
      It's worth noting that the selectors mentioned above only work in Blink
      and WebKit based browsers like Google Chrome and Safari. For other
      browsers, you can use the scrollbar selectors provided by the W3C, such as
      <code class="highlight">scrollbar-width</code>,
      <code class="highlight">scrollbar-color</code>,
      <code class="highlight">scrollbar-track-color</code>,
      <code class="highlight">scrollbar-thumb-color</code>, and
      <code class="highlight">scrollbar-face-color</code>.
    </p>
    <p>Supported browsers include:</p>
    <ul>
      <li>Chrome</li>
      <li>Brave</li>
      <li>Edge</li>
      <li>Safari</li>
      <li>Vivaldi</li>
      <li>Opera</li>
    </ul>
    <p class="last">
      In conclusion, CSS scrollbar selectors provide web developers with a way
      to customize the appearance of scrollbars and make them match the design
      of their websites. By using these selectors, you can create a more
      cohesive and aesthetically pleasing user experience for your visitors.
    </p>
    <a
      href="https://github.com/henripar/scrollbar"
      aria-label="Star henripar/scrollbar on GitHub"
      class="githubSpan highlight"
    >
      <span> If you like Scrollbar.app be sure to </span>
      <!-- Place this tag where you want the button to render. -->
      <span :class="[theme, 'githubStarBtn']"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          ></polygon></svg
      ></span>
      <span> it on Github! </span>
    </a>
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--track-color);
  border-radius: var(--scrollbar-border-radius);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--thumb-color);
  border-radius: var(--scrollbar-border-radius);
  border: var(--scrollbar-thumb-border-width) solid
    var(--scrollbar-thumb-border-color);
}

ul {
  margin: 1rem 1rem 1rem 0;
}

.highlight {
  background-color: #232e33;
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.77);
  transition: color 0.2s, background-color 0.5s;
}

.link {
  text-decoration: none;
}

.link:hover .highlight {
  background-color: rgb(107, 175, 141);
}
.container {
  height: 60vh;
  overflow-y: scroll;
  scrollbar-color: var(--thumb-color) var(--track-color);
  scrollbar-width: thin;
  padding: 1rem;
  background-color: var(--color-preview-background);
  transition: color 0.2s, background-color 0.5s;
  border: 1px solid var(--color-preview-border);
  border-radius: 6px;
}
.githubStarBtn {
  color: grey;
  display: inline-flex;
  margin: 0 0.2rem;
}
.githubStarBtn:hover {
  color: white;
}
.githubStarBtn.light:hover {
  color: #2c3e50;
}

.previewHeader {
  color: #ffffffe3;
}
.previewHeader.light {
  color: #000000;
}
.githubSpan {
  display: flex;
  align-items: center;
  flex-direction: columns;
  width: fit-content;
  border-radius: 5px;
  margin: auto;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin-bottom: 3rem;
}

svg {
  stroke: var(--color-text);
}
.githubSpan:hover svg {
  stroke: #6caf8c;
  fill: #6caf8c;
}

li {
  line-height: 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

p {
  margin: 1rem 1rem 1rem 0;
  line-height: 1.7;
}
.last {
  margin-bottom: 7rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
