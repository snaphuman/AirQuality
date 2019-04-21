<template>
  <div id="app">
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="true">
    </loading>
    <NavBar></NavBar>
    <MainContent v-bind:active.sync="isLoading"></MainContent>
  </div>
</template>

<script src="@/services/App.js" />
