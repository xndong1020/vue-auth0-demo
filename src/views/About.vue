<template>
  <div class="about">
    <h1>This is an about page, {{ this.user.email }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: "auth"
    })
  },
  mounted() {
    console.log("id", JSON.parse(JSON.stringify(this.user)));
  }
};
</script>

