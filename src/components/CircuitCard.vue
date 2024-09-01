<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="w-full bg-slate-100 p-4 rounded-md">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-primary-900">
        Título da situação problema
      </p>
      <p class="text-primary-700 font-medium">Estações: 5</p>
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
        <button class="text-primary-800 hover:underline">Acessar</button>
        <Button size="small" variant="outlined"> Aplicar </Button>
      </div>
    </div>
  </div>
</template>
