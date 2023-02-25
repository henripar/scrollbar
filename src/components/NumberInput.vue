<template>
  <div class="numberInputContainer">
    <button class="btn" @click="minusOne">-</button>
    {{ this.value }}px
    <button class="btn" @click="plusOne">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: ['number', 'min', 'max'],
  data() {
    return {
      value: this.number,
    };
  },
  emits: ['numberUpdated'],
  methods: {
    updateValue() {
      console.log(this.value);
      this.$emit('numberUpdated', this.value);
    },
    plusOne() {
      console.log(this.value);
      let tempValue = +this.value + 1;
      if (tempValue >= this.min && tempValue <= this.max) {
        this.value = +this.value + 1;
        this.$emit('numberUpdated', 'add');
      }
    },
    minusOne() {
      console.log(this.value);
      let tempValue = +this.value - 1;
      if (tempValue >= this.min && tempValue <= this.max) {
        this.value = +this.value - 1;
        this.$emit('numberUpdated', 'reduce');
      }
    },
  },
  //   watch: {
  //     value: {
  //       handler() {
  //         console.log(this.value);
  //         this.$emit('numberUpdated', this.value);
  //       },
  //       immediate: true,
  //     },
  //   },
};
</script>
<style scoped>
.numberInputContainer {
  display: inline;
}
.btn {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}
</style>
