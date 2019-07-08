<template>
  <div id="Navbar">
    <nav>
      <div class="addname" v-if="login">
        <router-link :to="{name: 'FirstLogin' }" class="btn-floating btn-large waves-effect waves-light blue"><i
          class="material-icons">add</i></router-link>
      </div>
      <div class="menu-button" v-else>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i
          class="material-icons">menu</i></a>
      </div>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
          </div>
          <img class="circle" :src="require('@/assets/wolfgiraffe.jpg')" width="70px"/>
          <span class="white-text name"><h5>Hallo {{ name }}</h5></span>
        </div>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }"><i class="material-icons">show_chart</i>Kalender</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AddRange' }"><i class="material-icons">face</i>Tagesstimmung setzen</router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <router-link :to="{ name: 'Settings' }"><i class="material-icons">settings</i>Einstellungen</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {}
    },
    created() {
      if (localStorage.getItem('wolfgiraffe') !== null) {
        this.login = false;
        let object = JSON.parse(localStorage.getItem('wolfgiraffe'));
        this.name = object.name;
      }
    },
    mounted() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    },
  }
</script>

<style>
  .background {
    background: url("../../../src/assets/background.jpg");
    background-size: cover;
  }

  .white-text.name {
    padding-bottom: 25px;
    padding-top: 15px;
  }

  nav a.sidenav-trigger {
    right: 0;
    top: 0;
    display: block;
    position: absolute;
  }
</style>
