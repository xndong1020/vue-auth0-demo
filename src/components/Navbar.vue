<template>
  <v-toolbar app>
    <span class="hidden-sm-and-up">
      <v-toolbar-side-icon @click="$emit('sidebarClicked')"></v-toolbar-side-icon>
    </span>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">{{ logo }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      logo: "Awesome App"
    };
  }
};
</script>



<style scoped>
img {
  width: 10%;
}
nav {
  width: 100%;
}
</style>
