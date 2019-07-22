<template>
 <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>Signing out....</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { webAuth, logout } from "../auth";

export default {
  name: 'Signout',
  created() {
    logout();
    webAuth.logout({
      returnTo: "http://localhost:8080/",
      clientID: "0N23ukLj7Ntq2qz85TLb7LUrE09M0L2k"
    });
  }
};
</script>
