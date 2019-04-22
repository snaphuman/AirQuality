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
                 <tr v-for="sensor in sensorArray">
                   <td>{{ sensor.index }}</td>
                   <td>{{ sensor.sensorName }}</td>
                   <td>{{ sensor.sensorLat }}</td>
                   <td>{{ sensor.sensorLon }}</td>
                   <td>{{ sensor.sensorZipCode }}</td>
                   <td><button type="button">Activar</button></td>
                 </tr>

               </tbody>
             </table>
             </div>
         </div>
     </div>
</template>

<script src="@/services/WatchSensors.js" /> 
