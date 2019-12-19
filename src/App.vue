<template>
  <div id="app">
      <h1>Calculator</h1>
      <Calculator />
  </div>
</template>

<script>
//main
import Calculator from './main/Calculator'

export default {
    components: {Calculator}
}
</script>

<style>
@font-face {
    font-family: 'RobotoMono';
    src: url('./fonts/RobotoMono-Thin.ttf');
}

*{
    font-family: 'RobotoMono', monospace;
}

body{
    margin: 0;
}

#app{
    display: flex;
    flex-direction: column;
    height: 100vh; /*vai ocupar a tela toda*/
    justify-content: center;
    align-items: center;
    color: #fff;
    background: linear-gradient(to right, rgb(95, 96, 97),  rgb(41, 46, 73) );
}
</style>