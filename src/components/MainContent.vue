<template>
    <section class="hero is-info">
        <div class="hero-body">
             <div class="container">
                 <h1 class="title">
                   Calidad del Aire
                 </h1>
                 <h2 class="subtitle">
                   Aplicación descentralizada basada en Vue.js + ExpressJs + AEternity Blockchain
                 </h2>
                </div>
            </div>
            <div class="tabs is-boxed is-centered main-menu" id="nav">
                <ul>
                    <li data-target="pane-1" id="1" class="is-active">
                      <router-link to="/register-sensor">Registrar sensor</router-link>
                    </li>
                    <li data-target="pane-2" id="2">
                      <router-link to="/watch-sensors">Ver Sensores</router-link>
                    </li>
                    <li data-target="pane-3" id="3">
                      <router-link to="/view-data">Ver Datos</router-link>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
              <router-view v-bind:active.sync="isLoading"></router-view>
            </div>
    </section>
</template>

<script src="@/services/MainContent.js" />
