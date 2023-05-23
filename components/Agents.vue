<template>
  <div class="container px-8">
<h1 class="text-center font-serif text-2xl" >Personagens</h1>
    <div class="card my-4 p-4">
        <div class="box-img">
            <img src="../img/kyller.png" alt="">
        </div>
        <div class="mt-2 text-white">
            <h1 class="text-center font-serif text-2xl" >Kyller Voluz</h1>
            <p>Essa ai é nossa protagonista aguardando uma descrição</p>
        </div>
    </div>

    <!-- <Card v-for"(agent, index) in agents" /> -->
    <!-- <Card :agent="agent" /> -->
    <span v-for="(agent, index) in agents" >
        <Card :agent="agent" />

    </span>
       

  </div>
</template>

<script>
export default {
    data () {
        return {
            agents: [
                {
                title: "Serguei",
                img: "serguei.png",
                desc:"O bon jovi",
                show: true
                },
                {
                title: "Zion Voluz",
                img: "zizu.png",
                desc:"O cara da sombra",
                show: true
                },
                {
                title: "Kiara",
                img: "kiara_capa_recorte_-removebg-preview.png",
                desc:"A Leoa",
                show: true
                },
            ]
        }
    }

}
</script>

<style lang="scss" >

    .card{
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);
        background-color: $primary-color;

        .box-img{
            background-color: white;
            border: 2px color solid $primary-color;
        }
    }
</style>