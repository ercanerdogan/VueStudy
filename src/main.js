import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false


// const myComponent = {
//   name : 'MyComponent',
//   template : '<h1>Hello World</h1>',
//   data(){
//     return {
//       count:0
//     }
//   },
//   props : [],
//   methods:{
//     foo(){
      
//     },

//     bar(){

//     }
//   },
//   components : {
//     HelloWorld
//   },
//   computed:{
//     bar1(){

//     }
//   },
//   watch:{
//     foo1(){

//     }
//   },
//   mounted(){ },
//   created(){},
//   updated(){ },
//   destroyed(){ }


// }

new Vue({
  render: h => h(App),
}).$mount('#app')
