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
  methods: {
    updateNum: function(e) {
      console.log(e);
      this.$emit("update:asdf", e);
    }
  },
  template: `
    <grand-child v-bind:asdf.sync="asdf"></grand-child>
  `
});

Vue.component("grand-parent", {
  props: {
    asdf: Number
  },
  template: `<parent v-bind:asdf.sync="asdf"></parent>`
});

new Vue({
  el: '#app',
  data: {
    num: 0
  },
  template: `
    <div>
      <h1>Test</h1>
      <grand-parent v-bind:asdf.sync="num"></grand-parent>
    </div>
  `
});
