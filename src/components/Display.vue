<template>
  <div class="display">
      {{ value }}
  </div>
</template>

<script>
export default {
    props: ["value"]//vai ser um array de vários elementos
}
</script>

<style>
  .display {
    grid-column: span 4; /*vai ocupar 4 colunas*/
    background-color: #0004;

    display: flex;
    justify-content: flex-end; /*vai para a lateral*/
    align-items: center;
    padding: 20px;
    font-size: 2.1em;
    overflow: hidden;
  }
</style>