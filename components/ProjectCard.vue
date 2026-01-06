<template>
  <div 
    class="group relative bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    @click="$emit('click')"
  >
    <!-- Image -->
    <div class="aspect-video w-full overflow-hidden">
      <img 
        :src="project.imgUrl" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{{ project.title }}</h3>
      <p class="text-dark-muted text-sm mb-4 line-clamp-2">{{ project.description }}</p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags.slice(0, 3)" 
          :key="tag" 
          class="px-2 py-1 text-xs font-medium rounded-md bg-dark-bg text-dark-text border border-white/10"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types';

defineProps<{
  project: Project
}>();

defineEmits(['click'])
</script>
