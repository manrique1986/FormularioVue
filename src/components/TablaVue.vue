<template>
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(usuario, i) in usuarios" :key="i">
                <th>{{usuarios.nombre}}</th>
                <th >{{usuarios.edad}}</th>
                <th >{{usuarios.email}}</th>
            </tr>
        </tbody>
    </table>
</template>

<script>


export default {

  name: "TablaVue",

  props: {

    nombre:{
      type: String,
      required: true,
    },

    edad: {
      type: Number,
      required: true,
    },
    email:{ 
      type: String,
      required: true,
    }

  },
    
}
</script>

<style>

.table{
  text-align: right;
  float: right;
  margin: 20px;
}

</style>
