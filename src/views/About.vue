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
    // this.sockets.subscribe("test_event", data => {
    //   console.log(`received data`, data);
    // });
    // this.$socket.emit('message','1111111111');

    // this.$socket.emit('myEvent', {data: 'test data'});

    // this.sockets.unsubscribe("test_event");
  },
  // sockets:{
  //   connect: function(){
  //     console.log('socket connected')
  //   },
  //   message: function(val){
  //     console.log('received return :'+ val)
  //   }
  // },
};
</script>

