<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <Navbar @sidebarClicked="toggleSidebar" @sidebar="sidebar" :menuItems="menuItems" />

    <v-container>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "About", path: "/about", icon: "info" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
};
</script>
<style>
</style>
