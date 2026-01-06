<template>
  <div class="space-y-12 relative border-l-2 border-white/10 ml-4 md:ml-6">
    <div 
      v-for="(exp, index) in experiences" 
      :key="exp.id" 
      class="relative pl-8 md:pl-12"
    >
      <!-- Timeline Dot -->
      <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-bg border-2 border-brand ring-4 ring-dark-bg"></span>
      
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
        <h3 class="text-xl font-bold text-white">{{ exp.role }}</h3>
        <span class="text-brand font-mono text-sm bg-brand/10 px-2 py-1 rounded">{{ exp.period }}</span>
      </div>
      
      <h4 class="text-lg text-dark-muted mb-4 font-medium">{{ exp.company }}</h4>
      
      <ul class="space-y-2 mb-4">
        <li v-for="(desc, idx) in exp.description" :key="idx" class="text-dark-muted text-sm leading-relaxed list-disc list-inside marker:text-brand">
          {{ desc }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <span 
          v-for="badge in exp.techBadges" 
          :key="badge" 
          class="px-2 py-1 text-xs text-brand/80 bg-brand/5 border border-brand/10 rounded"
        >
          {{ badge }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { experiences } from '~/data/experience';
</script>
