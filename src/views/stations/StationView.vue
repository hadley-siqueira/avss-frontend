<script setup>
import Button from "@/components/Button.vue";
import CircuitCard from "@/components/CircuitCard.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center text-slate-900">
    <Navbar />

    <main
      class="p-6 w-11/12 md:max-w-screen-xl bg-white mt-10 rounded-lg border"
    >
      <h1
        class="text-2xl font-bold text-primary-900 border-b border-slate-300 pb-2"
      >
        Situações problema
      </h1>

      <div class="mt-10 w-full flex flex-wrap items-end justify-between">
        <div class="w-full md:w-9/12 flex flex-col gap-2">
          <label for="title" class="text-sm">Pesquisar</label>
          <input
            type="text"
            placeholder="Título da situação problema"
            name="title"
            id="title"
            class="w-full px-4 py-2 h-10 rounded-lg bg-transparent border border-slate-400"
          />
        </div>

        <Button> Criar Situação Problema </Button>
      </div>

      <div class="w-full mt-14">
        <CircuitCard />
      </div>
    </main>
  </div>
</template>
