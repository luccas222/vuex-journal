<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home</h1>
    <button @click="gotoDaybook()" class="btn btn-primary">Primario</button>
    <button @click="gotoDaybook()" class="btn btn-secondary">Secundario</button>
    <button @click="gotoDaybook()" class="btn btn-success">Exito</button>
  </div>
</template>

<script>
export default{
  methods:{
    gotoDaybook(){
      this.$router.push({name:'daybook'})
    }
  }
}
</script>
