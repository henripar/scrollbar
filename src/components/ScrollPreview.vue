<script>
export default {
  props: ['thumbColor', 'trackColor'],
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
      };
    },
  },
};
</script>

<template>
  <div :style="createCSSVariables()" class="container">
    <h1 class="green">{{ msg }}</h1>
    <h3>You’ve successfully created a project with Vue</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deleniti
      nobis voluptatem sapiente est! Quis, similique animi provident voluptas
      maxime aliquam ad tenetur mollitia harum voluptate unde voluptatum
      laboriosam cumque! Architecto, quas ducimus soluta labore sapiente
      doloribus quasi blanditiis aperiam voluptatem nobis cumque ipsa
      reprehenderit enim sequi, delectus iusto perspiciatis placeat! Aut culpa
      modi dolor veritatis voluptate corporis aliquid rerum! Neque eveniet, illo
      sint corporis hic eum officiis nam delectus qui quod, expedita impedit
      porro dolor debitis non adipisci. Laborum, quae odio. Dolorum doloremque
      quis aperiam error, tempore autem sit! Quibusdam animi officia praesentium
      voluptatem maxime explicabo beatae consequatur voluptatum odit rerum nisi
      optio temporibus quae, placeat magnam. Neque mollitia explicabo fuga ullam
      soluta quaerat omnis facilis perspiciatis incidunt expedita.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deleniti
      nobis voluptatem sapiente est! Quis, similique animi provident voluptas
      maxime aliquam ad tenetur mollitia harum voluptate unde voluptatum
      laboriosam cumque! Architecto, quas ducimus soluta labore sapiente
      doloribus quasi blanditiis aperiam voluptatem nobis cumque ipsa
      reprehenderit enim sequi, delectus iusto perspiciatis placeat! Aut culpa
      modi dolor veritatis voluptate corporis aliquid rerum! Neque eveniet, illo
      sint corporis hic eum officiis nam delectus qui quod, expedita impedit
      porro dolor debitis non adipisci. Laborum, quae odio. Dolorum doloremque
      quis aperiam error, tempore autem sit! Quibusdam animi officia praesentium
      voluptatem maxime explicabo beatae consequatur voluptatum odit rerum nisi
      optio temporibus quae, placeat magnam. Neque mollitia explicabo fuga ullam
      soluta quaerat omnis facilis perspiciatis incidunt expedita.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deleniti
      nobis voluptatem sapiente est! Quis, similique animi provident voluptas
      maxime aliquam ad tenetur mollitia harum voluptate unde voluptatum
      laboriosam cumque! Architecto, quas ducimus soluta labore sapiente
      doloribus quasi blanditiis aperiam voluptatem nobis cumque ipsa
      reprehenderit enim sequi, delectus iusto perspiciatis placeat! Aut culpa
      modi dolor veritatis voluptate corporis aliquid rerum! Neque eveniet, illo
      sint corporis hic eum officiis nam delectus qui quod, expedita impedit
      porro dolor debitis non adipisci. Laborum, quae odio. Dolorum doloremque
      quis aperiam error, tempore autem sit! Quibusdam animi officia praesentium
      voluptatem maxime explicabo beatae consequatur voluptatum odit rerum nisi
      optio temporibus quae, placeat magnam. Neque mollitia explicabo fuga ullam
      soluta quaerat omnis facilis perspiciatis incidunt expedita.
    </p>
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--track-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--thumb-color);
}
.container {
  height: 60vh;
  overflow-y: scroll;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
