<template>
  <div class="hero-banner bg-cover bg-center  bg-no-repeat">
    <div class="min-h-screen">

      <div class="box-info  px-8 pt-8 pb-4 ">
        <div class="title">
          <h1>Bem vindo ao</h1>
          <h1>Mundo de</h1>
          <h1 class="big-title">Interion</h1>
        </div>
       
          <button class="btn btn-action my-4 w-9/12">Leia na Amazon</button>
        

        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .hero-banner{
        background-image: url("../img/kiara.jpg");

        .box-info{  
          display: flex;
          flex-direction: column;
          align-items: end;

            .title{
              color: $white;
              text-align: right;
              font-style: normal;
              font-weight: 400;
              font-size: 48px;
              line-height: 48px;

             .big-title{
                // font-size: 4px;
                // line-height: 40px;
                
              }
                   
          }
        }
    }

    .btn-action{
      background-color: $action-color;
      color: $white;
  
    }
</style>