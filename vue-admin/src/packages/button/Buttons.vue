
<template>
  <button><slot/></button>
</template>

<script>
export default {
  name: "AppButton",
};
</script>

<style scoped>
/** 
用法
在template中
 <d-buttons class="custom-theme">change</d-buttons>
 在style中
 .custom-theme {
  --button-border-color: #aaa;
  --button-hover-background-color: rgb(34, 34, 34);
}
 */
button {
  border: 1px solid var(--button-border-color, var(--primary-color));
  padding: var(--small-spacing) var(--normal-spacing);
  transition: 0.25s ease-in-out all;
}
button:hover {
  color: var(--button-hover-text-color, var(--on-primary-color));
  background-color: var(--button-hover-background-color, var(--primary-color));
}
</style>