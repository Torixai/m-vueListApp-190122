new Vue({
  el: "#app",
  data: {
    name: "",
    list: [{ id: 1, todo: "Cooking" }, { id: 2, todo: "Wash clothes" }]
  },
  methods: {
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id; //if a > b.id return a, if not return b.id
      }, 0);
      this.list.push({
        id: max + 1,
        todo: this.name
      });
    },

    doRemove: function(index) {
      this.list.splice(index, 1);
    }
  }
});
