<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-dark-bg to-dark-bg -z-10"></div>
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

    <div class="container mx-auto px-6 text-center z-10">
      <div class="animate-fade-in opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.2s;">
        <h2 class="text-brand font-semibold tracking-wide uppercase text-sm mb-4">Mobile Specialist & Frontend Engineer</h2>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight animate-slide-up opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.4s;">
        Abdiel Orellana <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Crafting High-Performance</span>
        <br />
        <span class="text-brand">Mobile Experiences</span>
      </h1>

      <p class="text-dark-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.6s;">
        Specializing in building robust, scalable applications with React Native, Expo, and Modern Web Methodologies.
      </p>

      <div class="flex flex-wrap justify-center gap-4 animate-slide-up opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.8s;">
        <div v-for="tech in technologies" :key="tech.name" class="flex items-center space-x-2 px-4 py-2 bg-dark-surface rounded-lg border border-white/5 hover:border-brand/50 transition-colors">
          <Icon :name="tech.icon" class="w-6 h-6" :class="tech.color" />
          <span class="font-medium">{{ tech.name }}</span>
        </div>
      </div>

      <div class="mt-12 animate-slide-up opacity-0" style="animation-fill-mode: forwards; animation-delay: 1s;">
        <a href="#projects" class="px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          View Work
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = [
  { name: 'React Native', icon: 'logos:react', color: '' },
  { name: 'Expo', icon: 'logos:expo', color: '' },
  { name: 'React', icon: 'logos:react', color: '' },
  { name: 'NestJS', icon: 'logos:nestjs', color: '' },
  { name: 'AWS', icon: 'logos:aws', color: '' },
  { name: 'GCP', icon: 'logos:google-cloud', color: '' },
];
</script>
