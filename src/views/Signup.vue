<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field v-model="email" :rules="emailRules" label="Email" type="email"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="button" @click.stop.prevent="onSubmit">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { webAuth } from "../auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [v => !!v || "Email is required"],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be 6 digits long"
      ]
    };
  },
  methods: {
    onSubmit() {
      const self = this
      webAuth.signup({
            connection: 'Username-Password-Authentication',
            email: this.email,
            password: this.password,
            user_metadata: { plan: 'silver', team_id: 'a111' } // extra information
        }, function (err) {
            if (err) return alert('Something went wrong: ' + err.message);
            self.$router.push('/signin')
        });
    }
  }
};
</script>
