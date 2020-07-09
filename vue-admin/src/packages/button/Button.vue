<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  background-color: #555555;
  color: white;
  border: 2px solid #555555;
  border-radius: 0.2rem;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    opacity: 0.4;
  }
}
</style>