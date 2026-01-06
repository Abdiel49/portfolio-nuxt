<template>
  <footer class="bg-dark-surface border-t border-white/5 py-12 text-center">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold mb-6 text-white">Let's Work Together</h2>
      <p class="text-dark-muted max-w-lg mx-auto mb-8">
        Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>
      
      <div class="flex justify-center space-x-6 mb-8">
        <a href="mailto:abdielorellana3@gmail.com" class="p-3 bg-white/5 rounded-full hover:bg-brand hover:text-white transition-all">
          <Icon name="heroicons:envelope" class="w-6 h-6" />
        </a>
        <a href="www.github.com/abdiel49" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-brand hover:text-white transition-all">
          <Icon name="mdi:github" class="w-6 h-6" />
        </a>
        <a href="www.linkedin.com/in/abdiel-orellana" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-brand hover:text-white transition-all">
          <Icon name="mdi:linkedin" class="w-6 h-6" />
        </a>
      </div>

      <p class="text-xs text-dark-muted">
        © {{ new Date().getFullYear() }} Abdiel Orellana. Built with Nuxt 3 & Tailwind.
      </p>
    </div>
  </footer>
</template>
