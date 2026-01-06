<template>
  <nav class="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold tracking-tight text-white hover:text-brand transition-colors">
        AO<span class="text-brand">.</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-sm font-medium text-dark-muted hover:text-brand transition-colors">
          {{ item.name }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white focus:outline-none">
        <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-dark-surface border-b border-white/5">
        <div class="px-6 py-4 space-y-4 flex flex-col">
           <a 
             v-for="item in navItems" 
             :key="item.name" 
             :href="item.href" 
             @click="isMenuOpen = false"
             class="text-base font-medium text-dark-muted hover:text-brand transition-colors"
           >
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  
  const isMenuOpen = ref<boolean>(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
</script>
