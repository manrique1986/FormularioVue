<template>
  <div id="app">
    <FormularioVue @agregarTabla= "addToTable" />
    <TablaVue
     v-if="solicitudTabla.length"
     :nombre="solicitudTabla.nombre"
     :edad="solicitudTabla.edad"
     :email="solicitudTabla.email"
    />
  </div>
</template>

<script>
import FormularioVue from './components/FormularioVue.vue'
import TablaVue from './components/TablaVue.vue'

export default {
  name: 'App',
  components: {
    FormularioVue,
    TablaVue
  },

  data() {

    return{

    solicitudTabla: [],
    }

    },

     methods: {
        addToTable(id) {
            let nuevaSolicitud = this.solicitudTabla.find((item) => {
                return item.id == id;});    
                let newCopy = {...nuevaSolicitud, nombre: FormularioVue.nombre, edad: FormularioVue.edad, email: FormularioVue.email,}; 
                this.solicitudTabla.push(newCopy);
        }
    },
  
  }
</script>

<style>
</style>
