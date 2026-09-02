<template>
  <div class="group flex flex-col justify-between bg-dark-surface rounded-xl p-6 border border-white/5 hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div>
      <!-- Top header: Package icon & Version badge -->
      <div class="flex items-start justify-between gap-3 mb-4">
        <div class="flex items-center gap-3">
          <div class="p-2.5 flex items-center justify-center alin rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            <Icon name="mdi:npm" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-white group-hover:text-brand transition-colors font-mono">
              {{ pkg.name }}
            </h3>
            <span v-if="pkg.license" class="text-xs text-dark-muted">
              {{ pkg.license }} License
            </span>
          </div>
        </div>

        <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-brand/10 text-brand border border-brand/20">
          v{{ pkg.version }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-dark-muted text-sm mb-5 leading-relaxed">
        {{ pkg.description }}
      </p>

      <!-- Install Command Snippet -->
      <div class="mb-5">
        <div class="flex items-center justify-between bg-dark-bg px-3.5 py-2.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
          <div class="flex items-center gap-2 overflow-x-auto text-xs font-mono text-gray-300 select-all">
            <span class="text-brand font-bold">$</span>
            <span>npm i {{ pkg.name }}</span>
          </div>

          <button 
            type="button"
            @click.stop="copyInstallCommand" 
            class="ml-2 flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-white/5 hover:bg-brand hover:text-white text-dark-muted transition-all shrink-0"
            :title="copied ? 'Copied to clipboard!' : 'Copy install command'"
          >
            <Icon :name="copied ? 'heroicons:check' : 'heroicons:clipboard-document'" class="w-4 h-4" :class="{ 'text-green-400': copied }" />
            <span class="font-medium">{{ copied ? 'Copied!' : 'Copy' }}</span>
          </button>
        </div>
      </div>

      <!-- Keywords / Tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span 
          v-for="keyword in pkg.keywords.slice(0, 5)" 
          :key="keyword" 
          class="px-2 py-0.5 text-xs font-medium rounded bg-dark-bg text-dark-muted border border-white/5"
        >
          {{ keyword }}
        </span>
      </div>
    </div>

    <!-- Footer: Downloads and External Links -->
    <div class="pt-4 border-t border-white/5 flex items-center justify-between">
      <!-- Downloads count -->
      <div v-if="pkg.downloads" class="flex items-center gap-1.5 text-xs text-dark-muted">
        <Icon name="heroicons:arrow-down-tray" class="w-4 h-4 text-brand" />
        <span><strong class="text-white">{{ pkg.downloads.monthly || pkg.downloads.weekly }}</strong>/mo downloads</span>
      </div>
      <div v-else class="text-xs text-dark-muted">
        Public Package
      </div>

      <!-- Action Links -->
      <div class="flex items-center justify-center items-center gap-3">
        <a 
          v-if="pkg.repoUrl" 
          :href="pkg.repoUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center justify-center p-2 text-dark-muted hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
          title="GitHub Repository"
        >
          <Icon name="mdi:github" class="w-4 h-4" />
        </a>
        <a 
          :href="pkg.npmUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-brand/10 hover:bg-brand text-brand hover:text-white rounded-lg border border-brand/20 hover:border-transparent transition-all"
        >
          <span>View on npm</span>
          <Icon name="heroicons:arrow-top-right-on-square" class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NpmPackage } from '../types';

const props = defineProps<{
  pkg: NpmPackage
}>();

const copied = ref(false);

const copyInstallCommand = async () => {
  try {
    await navigator.clipboard.writeText(`npm i ${props.pkg.name}`);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
  }
};
</script>
