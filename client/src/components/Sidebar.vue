<template>
  <div class="sidebar">
    <div>
      <h2>Vue</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="section-list">
      <h2>
        Subredits
      </h2>
      <ul>
        <li><a href="#">First section</a></li>
        <li><a href="#">Second section</a></li>
        <li><a href="#">Third section</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .sidebar{
    padding-left: 15px;
    padding-top: 20px;
    border-left: 1px solid #ccc;
    height: 100%;
  }

  .section-list {
    margin: 30px auto;
  }
</style>
