<script setup>
import { computed } from "vue";

const props = defineProps(["variant", "size"]);

const btnStyle = computed(() => {
  const styles = {
    primary:
      "bg-primary-400 hover:bg-primary-500 active:bg-primary-600 text-white",
    outlined: "bg-transparent border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white"
  };

  return styles[props.variant] || styles["primary"];
});

const btnSize = computed(() => {
  const sizes = {
    medium: "h-10 px-2.5",
    small: "h-8 px-2.5"
  };

  return sizes[props.size] || sizes["medium"];
});
</script>

<template>
  <button
    type="button"
    class="duration-200 rounded-md font-semibold"
    :class="[btnSize, btnStyle]"
  >
    <slot />
  </button>
</template>
