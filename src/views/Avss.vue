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

	<ul class="flex flex-row space-x-10">
        <li class="mr-4">
            <RouterLink to="/" class="text-xl font-bold text-indigo-700">Início</RouterLink>
        </li>

        <li class="mr-4">
            <RouterLink to="/" class="text-xl font-bold text-indigo-700">Funcionalidades</RouterLink>
        </li>

        <li class="mr-4">
            <RouterLink to="/" class="text-xl font-bold text-indigo-700">Sobre nós</RouterLink>
        </li>

        <li class="mr-4">
            <RouterLink to="/" class="text-xl font-bold text-indigo-700">Cadastre-se</RouterLink>
        </li>
	</ul>
</template>
