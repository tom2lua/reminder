<template>
  <div class="columns is-gapless is-centered">
    <div class="column is-8-fullhd mainContainer">
      <NavBar />>
      <div class="columns is-gapless">
        <SideBar />
        <ViewLayout />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/SideBar";
import ViewLayout from "./views/ViewLayout";
import Footer from "./footer/Footer";

export default {
  name: "ReminderLayout",
  components: {
    NavBar,
    SideBar,
    ViewLayout,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/abstracts/_variables";

.mainContainer {
  margin-top: 10vh !important;
  min-height: 90vh;
  background-color: white;
}
.divider {
  background-color: $secondary-color;
  height: calc(110vh - 9.5vw);
  width: 2px;
}
</style>
