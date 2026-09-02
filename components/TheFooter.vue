<template>
  <footer class="bg-dark-surface border-t border-white/5 py-12 text-center">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold mb-6 text-white">Let's Work Together</h2>
      <p class="text-dark-muted max-w-lg mx-auto mb-8">
        Always open to discussing new projects, creative ideas, or opportunities to build outstanding digital products.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <a 
          :href="EXTERNAL_LINKS.EMAIL" 
          class="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-brand hover:text-white text-dark-muted transition-all hover:scale-110"
          title="Email"
        >
          <Icon name="heroicons:envelope" class="w-6 h-6" />
        </a>
        <a 
          :href="EXTERNAL_LINKS.GITHUB" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-brand hover:text-white text-dark-muted transition-all hover:scale-110"
          title="GitHub"
        >
          <Icon name="mdi:github" class="w-6 h-6" />
        </a>
        <a 
          :href="EXTERNAL_LINKS.LINKEDIN" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-brand hover:text-white text-dark-muted transition-all hover:scale-110"
          title="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="w-6 h-6" />
        </a>
        <a 
          :href="EXTERNAL_LINKS.DEVTO" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-brand hover:text-white text-dark-muted transition-all hover:scale-110"
          title="Dev.to Articles"
        >
          <Icon name="mdi:dev-to" class="w-6 h-6" />
        </a>
        <a 
          :href="EXTERNAL_LINKS.NPM" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-brand hover:text-white text-dark-muted transition-all hover:scale-110"
          title="npm Packages"
        >
          <Icon name="mdi:npm" class="w-6 h-6" />
        </a>
      </div>

      <p class="text-xs text-dark-muted">
        © {{ new Date().getFullYear() }} Abdiel Orellana.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EXTERNAL_LINKS } from '../constants';
</script>
