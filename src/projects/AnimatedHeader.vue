<template>
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-800">
      <span class="inline-block animate-fade">
        Engineering in Action
      </span>
		</h1>

		<p class="mt-4 text-gray-500 text-lg">
			Practical systems, personal tools, and experiments built to solve real problems.
		</p>
	</div>
</template>

<style scoped>
@keyframes fade {
	0% {
		opacity: 0;
		transform: translateY(10px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade {
	animation: fade 1.2s ease-out forwards;
}
</style>