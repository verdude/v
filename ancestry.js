Vue.component("grand-child", {
  props: {
    asdf: Number
  },
  methods: {
    bubble: function() {
      console.log("updating:", this.asdf+1);
      this.$emit("update:asdf", this.asdf+1);
    }
  },
  template: `<div v-on:click="bubble(asdf)">{{ 'Number: ' + asdf }}</div>`
});

Vue.component("parent", {
  props: {
    asdf: Number
  },
  template: `
    <grand-child v-model.sync="asdf"></grand-child>
  `
});

new Vue({
  el: '#app',
  data: {
    num: 0
  },
  template: `
    <div>
      <h1>Test</h1>
      <grand-child v-bind:asdf.sync="num"></grand-child>
    </div>
  `
});

Vue.component("grand-parent", {
  data: {

  },
  template: ``
});
