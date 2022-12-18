// Định nghĩa một component với tên là "button-counter"
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>',
});

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>',
});
