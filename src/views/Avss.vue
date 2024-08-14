<script setup>
    import '../assets/avss/global.css'
    import '../assets/avss/header.css'
    import '../assets/avss/application.css'

    import '../assets/avss/application.css'
    import '../assets/avss/button.css'  
    import '../assets/avss/circuits-index.css'
    import '../assets/avss/global.css'
    import '../assets/avss/navbar.css' 
    import '../assets/avss/new-question.css'
    import '../assets/avss/section.css'
    import '../assets/avss/stars.css'
    import '../assets/avss/attachments.css'
    import '../assets/avss/card-station.css'  
    import '../assets/avss/flash.css'   
    import '../assets/avss/header.css'  
    import '../assets/avss/new.css' 
    import '../assets/avss/small_card.css'
    import '../assets/avss/stations-submissions.css'
</script>

<template>
<header class="header2">
			<nav class="navbar">
	<h1>
    <a class="logo" href="/">
        <span class="logo__first">A</span>VSS
</a></h1>

	<ul class="navbar__items">
			<li><a class="navbar__link" href="/">Início</a></li>
			<li><a class="navbar__link" href="/">Funcionalidades</a></li>
			<li><a class="navbar__link" href="/">Sobre nós</a></li>
			<li><a class="navbar__link" href="/users/sign_up">Cadastre-se</a></li>
	</ul>

	<div class="buttons-container">
			<a class="button button--blue" href="/users/sign_in">Entrar</a>
	</div>
</nav>

<nav class="navbar--mobile">
	<div class="menu-container">
		<h1>
    <a class="logo" href="/">
        <span class="logo__first">A</span>VSS
</a></h1>
		<button class="navbar--mobile__menu-btn" data-controller="menu-mobile" data-action="click->menu-mobile#expand">
			<span class="material-symbols-outlined menu-icon" id="btn-expand">
    			menu
  			</span>
			<span class="material-symbols-outlined menu-icon" id="btn-close" style="display: none;">
    			close
  			</span>
		</button>
	</div>
	<ul class="navbar--mobile__items">
			<li class="navbar--mobile__nav-item"><a class="navbar__link" href="/">Início</a></li>
			<li class="navbar--mobile__nav-item"><a class="navbar__link" href="/">Funcionalidades</a></li>
			<li class="navbar--mobile__nav-item"><a class="navbar__link" href="/">Sobre nós</a></li>
			<li class="navbar--mobile__nav-item"><a class="navbar__link" href="/users/sign_in">Entrar</a></li>
			<li class="navbar--mobile__nav-item"><a class="navbar__link" href="/users/sign_up">Cadastre-se</a></li>
	<ul>
</ul></ul></nav>

			<div class="header__text-content">
				<h1>
    <a class="logo" href="/">
        <span class="logo__first">A</span>VSS
</a></h1>
				<h2 class="header__text-content__title">Ambiente Virtual de Situações Simuladas</h2>
				<p class="header__text-content__body">
					Uma ferramenta elaborada mediante uma colaboração entre UFRN e IFRN, voltada exlclusivamente para realização de Exame Clínico Objetivo Estruturado (OSCE). Otimizando a experiência prática 
					decisória sem precisão de um grande esforço logístico e espacial para tal, contribuindo, dessa 
					forma, para obtenção de experiências que serão de grande valia pós formação.
				</p>
			</div>
		</header>


<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
<svg class="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"></stop><stop stop-color="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"></stop><stop stop-color="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>


<ul class="space-y-2">
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-red-50">aa</li>
      <li class="bg-red-100"></li>
      <li class="bg-red-200"></li>
      <li class="bg-red-300"></li>
      <li class="bg-red-400"></li>
      <li class="bg-red-500"></li>
      <li class="bg-red-600"></li>
      <li class="bg-red-700"></li>
      <li class="bg-red-800"></li>
      <li class="bg-red-900"></li>
    </ul>
  </li>
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-yellow-50"></li>
      <li class="bg-yellow-100"></li>
      <li class="bg-yellow-200"></li>
      <li class="bg-yellow-300"></li>
      <li class="bg-yellow-400"></li>
      <li class="bg-yellow-500"></li>
      <li class="bg-yellow-600"></li>
      <li class="bg-yellow-700"></li>
      <li class="bg-yellow-800"></li>
      <li class="bg-yellow-900"></li>
    </ul>
  </li>
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-green-50"></li>
      <li class="bg-green-100"></li>
      <li class="bg-green-200"></li>
      <li class="bg-green-300"></li>
      <li class="bg-green-400"></li>
      <li class="bg-green-500"></li>
      <li class="bg-green-600"></li>
      <li class="bg-green-700"></li>
      <li class="bg-green-800"></li>
      <li class="bg-green-900"></li>
    </ul>
  </li>
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-blue-50"></li>
      <li class="bg-blue-100"></li>
      <li class="bg-blue-200"></li>
      <li class="bg-blue-300"></li>
      <li class="bg-blue-400"></li>
      <li class="bg-blue-500"></li>
      <li class="bg-blue-600"></li>
      <li class="bg-blue-700"></li>
      <li class="bg-blue-800"></li>
      <li class="bg-blue-900"></li>
    </ul>
  </li>
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-purple-50"></li>
      <li class="bg-purple-100"></li>
      <li class="bg-purple-200"></li>
      <li class="bg-purple-300"></li>
      <li class="bg-purple-400"></li>
      <li class="bg-purple-500"></li>
      <li class="bg-purple-600"></li>
      <li class="bg-purple-700"></li>
      <li class="bg-purple-800"></li>
      <li class="bg-purple-900"></li>
    </ul>
  </li>
  <li>
    <ul class="grid grid-cols-10 h-7">
      <li class="bg-pink-50"></li>
      <li class="bg-pink-100"></li>
      <li class="bg-pink-200"></li>
      <li class="bg-pink-300"></li>
      <li class="bg-pink-400"></li>
      <li class="bg-pink-500"></li>
      <li class="bg-pink-600"></li>
      <li class="bg-pink-700"></li>
      <li class="bg-pink-800"></li>
      <li class="bg-pink-900"></li>
    </ul>
  </li>
</ul>
</template>
