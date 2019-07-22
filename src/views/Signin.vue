<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>Redirecting you to Auth0 Signin page...</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { webAuth } from "../auth";
export default {
  name: "login",
  mounted() {
    webAuth.authorize();
  }
};
</script>
