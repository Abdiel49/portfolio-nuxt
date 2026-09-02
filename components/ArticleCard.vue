<template>
  <a 
    :href="article.url" 
    target="_blank" 
    rel="noopener noreferrer"
    class="group flex flex-col bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <!-- Card Banner / Image -->
    <div class="relative aspect-[16/9] w-full overflow-hidden bg-dark-bg/60 border-b border-white/5">
      <img 
        v-if="article.socialImage" 
        :src="article.socialImage" 
        :alt="article.title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/10 via-dark-surface to-dark-bg">
        <Icon name="mdi:dev-to" class="w-16 h-16 text-white/30" />
      </div>

      <!-- Dev.to Badge Overlay -->
      <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-dark-bg/90 backdrop-blur-md rounded-md border border-white/10 text-xs font-semibold text-white">
        <Icon name="mdi:dev-to" class="w-4 h-4 text-white" />
        <span>Dev.to</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <!-- Meta Info -->
        <div class="flex items-center gap-3 text-xs text-dark-muted mb-3 font-medium">
          <span class="flex items-center gap-1">
            <Icon name="heroicons:calendar" class="w-3.5 h-3.5 text-brand" />
            {{ article.readablePublishDate }}
          </span>
          <span v-if="article.readingTimeMinutes" class="flex items-center gap-1">
            <Icon name="heroicons:clock" class="w-3.5 h-3.5 text-brand" />
            {{ article.readingTimeMinutes }} min read
          </span>
          <span v-if="article.reactionsCount && article.reactionsCount > 0" class="flex items-center gap-1 text-red-400">
            <Icon name="heroicons:heart" class="w-3.5 h-3.5 fill-current" />
            {{ article.reactionsCount }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold mb-3 text-white group-hover:text-brand transition-colors line-clamp-2 leading-snug">
          {{ article.title }}
        </h3>

        <!-- Description -->
        <p class="text-dark-muted text-sm mb-5 line-clamp-3 leading-relaxed">
          {{ article.description }}
        </p>
      </div>

      <!-- Footer: Tags & Read Link -->
      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          <span 
            v-for="tag in article.tags" 
            :key="tag" 
            class="px-2 py-0.5 text-xs font-medium rounded bg-dark-bg text-dark-muted border border-white/5"
          >
            #{{ tag }}
          </span>
        </div>

        <div class="flex items-center text-sm font-semibold text-brand group-hover:translate-x-1 transition-transform">
          <span>Read Article</span>
          <Icon name="heroicons:arrow-up-right" class="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Article } from '../types';

defineProps<{
  article: Article
}>();
</script>
