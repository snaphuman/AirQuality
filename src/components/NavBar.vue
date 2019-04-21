<template>
    <nav class="navbar is-info">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start is-link">
              <router-link to="/" class="navbar-item">Inicio</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="NavBarontrol">
                            <a class="button is-primary" href="https://github.com/snaphuman/AirQuality">
                                <span class="icon">
                                    <i class="fas fa-github"></i>
                                </span>
                                <span>Descargar</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
