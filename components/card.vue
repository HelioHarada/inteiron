<template>
      <div v-if="agent.show" class="card my-4 p-4">
        <div class="box-img">
            <img :src="require(`~/img/${agent.img}`)" alt="teste">
        </div>
        <div class="mt-2 text-white">
            <h1 class="text-center font-serif text-2xl" >{{agent.title}}</h1>
            <p>{{agent.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        agent: Object
    },
    data () {
        return {
            img:'zizu.png',
            // agent: 'Zion',
            // desc: '',
           
        }
    }
}
</script>

<style>

</style>