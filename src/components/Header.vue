// src/components/Header.vue
<template>
  <header>
    <div class="brand">
      <img src="../assets/logo.png" />
      <h5>Just Music</h5>
    </div>
    <div class="nav-items">
      <ul class="nav-items">
        <li class="nav-item">
          <span>Music</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";
header {
  display: flex;
  background-color: #f7f7f7;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 20px 5%;
  color: whitesmoke;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  .brand {
    flex: 1;
    display: flex;
    align-items: center;
    img {
      height: 35px;
      border-radius: 50%;
      margin-right: 17px;
    }
    h5 {
      font-size: 15px;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
      color: $base-text;
    }
  }
  .nav-items {
    margin: 0;
    .nav-item {
      span {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 0.7px;
        padding: 10px 17px;
        border-radius: 4px;
        background-color: $accent-light;
        color: $accent;
        border: none;
        margin: 0;
      }
    }
  }
}
</style>
