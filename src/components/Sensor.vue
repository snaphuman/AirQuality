<template>
     <div class="columns">
         <div class="column is-8 is-offset-2">
             <div class="box">
               <h3 class="title is-3">{{ name }}</h3>

               <form>
                <input class="input" type="text" v-model="value" placeholder="Recieved data"> 
               </form>
               <line-chart :chart-data="datacollection"></line-chart>
             </div>
         </div>
     </div>
</template>

<script src="@/services/Sensor.js" /> 

<style lang="css" scoped>
  .hero.is-info .title {
    color: #363636;
  }
</style>
