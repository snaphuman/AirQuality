<template>
     <div class="columns">
         <div class="column is-8 is-offset-2">
             <div class="box">
             <h2 class="title is-2">Ver sensores</h2>
             <table class="table is-fullwidth">
               <thead>
                 <tr>
                   <th>Id</th>
                   <th>Nombre</th>
                   <th>Latitud</th>
                   <th>Longitud</th>
                   <th>Código postal</th>
                   <th>Acción</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="sensor in sensorArray" :key="sensor.index">
                   <td>{{ sensor.index }}</td>
                   <td>{{ sensor.sensorName }}</td>
                   <td>{{ sensor.sensorLat }}</td>
                   <td>{{ sensor.sensorLon }}</td>
                   <td>{{ sensor.sensorZipCode }}</td>
                   <td><button type="button" v-on:click="viewData(sensor.index)">{{ sensor.state }}</button></td>
                 </tr>

               </tbody>
             </table>
             </div>
         </div>
     </div>
</template>

<script src="@/services/WatchSensors.js" /> 

<style lang="css" scoped>
  .hero.is-info .title {
    color: #363636;
  }
</style>
