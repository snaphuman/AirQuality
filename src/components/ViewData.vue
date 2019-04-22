<template>
       <div class="tab-pane" id="pane-3">
        <Sensor v-for="index in activatedArray"
                v-bind:key="index"
                v-bind:sensors.sync="sensorArray">
        </Sensor>
       </div>
</template>

<script src="@/services/ViewData.js" /> 

<style lang="css" scoped>
  .hero.is-info .title {
    color: #363636;
  }
</style>
