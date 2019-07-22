<template></template>

<script>
import { webAuth } from "../auth";

export default {
  created() {
    webAuth.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (err) this.$router.push("/login");
      console.log("query", authResult);
      const {
        accessToken,
        idToken,
        idTokenPayload: { name, email, sub, exp }
      } = authResult;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("name", exp);
      localStorage.setItem("email", email);
      localStorage.setItem("sub", sub);
      localStorage.setItem("exp", exp);

      this.$router.push("/about");
    });
  }
};
</script>
