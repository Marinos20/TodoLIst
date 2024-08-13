<script >
import TodoList from './components/TodoList.vue';

import HomePage from './views/HomePage.vue';


export default {
  components: {
    HomePage,
    TodoList,
    
  }
}


</script>

<template>
<div>
  <HomePage/>
  <TodoList/>
  
</div>
</template>

<style scoped>

</style>
