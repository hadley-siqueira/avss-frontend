<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="w-full bg-slate-100 p-4 rounded-md">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-primary-900">Título da estação</p>
      <p class="text-primary-700 font-medium">Grau de dificuldade: 5</p>
    </div>
    <p class="text-sm w-full mt-2">
      Trecho do texto de contextualização especificado nesta situação problema
      para permitir que o usuário entenda do que se trata sem necessitar
      clicar...
    </p>
    <div class="mt-6 flex items-center justify-between w-full">
      <p class="text-sm w-full text-slate-500">
        Última atualização: 20/04/2021
      </p>
      <div class="flex items-center justify-end w-full gap-4">
        <Button size="small" variant="outlined"> Acessar </Button>
      </div>
    </div>
  </div>
</template>
