<template>
  <div data-cursor-hover data-cursor-mix-blend-mode="difference" id="app">
    <!-- <particles-bg type="cobweb" :bg="true" /> -->
    <!-- <particles-bg type="custom" :config="config" :bg="true" /> -->

    <!-- <cursor-fx
      data-cursor-hover
      color-hover="#fff"
      color="#fff"
    /> -->
    <div class="container">
      <headerV />

      <p v-text="messages"></p>
      <router-view />
    </div>
  </div>
</template>

<script>
// import { ParticlesBg } from "particles-bg-vue";
import axios from "axios";
import headerV from "@/components/header.vue";
export default {
  name: "App",
  components: {
    // ParticlesBg,
    headerV,
  },
  data: function () {
    return {
      config: {
        num: [15, 15],
        rps: 0.5,
        radius: [4, 4],
        life: [4.5, 1],
        v: [3, 1],
        tha: [-140, 140],
        // body: "./img/icon.png", // Whether to render pictures
        rotate: [20, 20],
        alpha: [6, 5],
        scale: [2.5, 0.5],
        position: "all", // all or center or {x:1,y:1,width:100,height:100}
        color: ["#8071DC", "#F2C94C"],
        cross: "cross", // cross or bround
        random: null, // or null,
        g: 1, // gravity

        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();

          ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = particle.color;
          ctx.lineWidth = 5;
          ctx.fill();
          ctx.closePath();
        },
      },
      messages: ["test", "from", "frontend"],
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: $bgDark;
  min-height: 100vh;
  cursor: auto;
}
</style>
