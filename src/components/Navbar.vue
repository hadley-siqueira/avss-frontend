<template>
  <header
    class="w-full bg-primary-800 text-primary-50 h-16 flex items-center justify-center"
  >
    <div class="w-11/12 md:max-w-screen-xl flex items-center justify-between">
      <h4 class="text-xl font-bold">AVSS</h4>
      <nav class="flex gap-8">
        <RouterLink to="/"> Início </RouterLink>
        <RouterLink to="/"> Controles </RouterLink>
        <RouterLink to="/"> Sobre nós </RouterLink>
        <RouterLink to="/"> Perfil </RouterLink>
      </nav>
      <button class="py-1 px-4 bg-red-500 text-white rounded-md">Logout</button>
    </div>
  </header>
</template>
