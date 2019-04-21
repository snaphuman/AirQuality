<template>
  <div class="tab-pane" id="pane-1">
     <div class="columns">
         <div class="column is-half is-offset-one-quarter">
             <div class="box">
             <h2 class="title is-2">Registrar sensor</h2>
                 <form>
                     <div class="field">
                         <label class="label">Nombre</label>
                         <div class="control">
                             <input class="input is-primary" v-model="sensorName" type="text" placeholder="Ingrese el nombre del sensor.">
                         </div>
                         <p class="help">ej: casa, finca, sector, universidad</p>
                     </div>
                     <div class="field">
                         <label class="label">Latitud</label>
                         <div class="control">
                             <input class="input is-primary" v-model="sensorLat" type="text" placeholder="Ingrese la Latitud del la ubicación">
                         </div>
                         <p class="help">Formato coordenada geográfica ej: 4.628032</p>
                     </div>
                     <div class="field">
                         <label class="label">Longitiud</label>
                         <div class="control">
                             <input class="input is-primary" v-model="sensorLon" type="text" placeholder="Ingrese la Longitus del la ubicación">
                         </div>
                         <p class="help">Formato coordenada geográfica ej: 74.0654915</p>
                     </div>
                     <div class="field">
                         <label class="label">Código postal</label>
                         <div class="control">
                             <input class="input is-primary" v-model="sensorZipCode" type="text" placeholder="Ingrese el Código Postal de la ubicación">
                         </div>
                         <p class="help">ej: 11021</p>
                     </div>
                     <div class="field">
                         <div class="control">
                             <button class="button" type="button" v-on:click="this.registerSensor">Registrar</button>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
     </div>
  </div>
</template>

<script src="@/services/RegisterSensor.js" />
