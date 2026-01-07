<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel v-if="project" class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-dark-bg border border-white/10 text-left align-middle shadow-2xl transition-all">
              
              <!-- Header Image -->
              <div class="relative h-64 md:h-80 w-full">
                <img :src="project.imgUrl" class="w-full h-full object-cover" />
                <button @click="closeModal" class="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-brand transition-colors flex justify-center items-center">
                  <Icon name="heroicons:x-mark" class="w-6 h-6" />
                </button>
              </div>

              <div class="p-8">
                <div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 class="text-3xl font-bold text-white mb-2">{{ project.title }}</h3>
                    <div class="flex flex-wrap gap-2">
                       <TechBadge v-for="tech in project.techStack" :key="tech">{{ tech }}</TechBadge>
                    </div>
                  </div>
                  
                  <!-- Links -->
                  <div class="flex gap-3">
                     <a v-if="project.links.github" :href="project.links.github" target="_blank" class="p-2 bg-dark-surface rounded-lg hover:text-brand transition-colors" title="GitHub">
                       <Icon name="mdi:github" class="w-6 h-6" />
                     </a>
                     <a v-if="project.links.appStore" :href="project.links.appStore" target="_blank" class="p-2 bg-dark-surface rounded-lg hover:text-brand transition-colors" title="App Store">
                       <Icon name="mdi:apple" class="w-6 h-6" />
                     </a>
                     <a v-if="project.links.playStore" :href="project.links.playStore" target="_blank" class="p-2 bg-dark-surface rounded-lg hover:text-brand transition-colors" title="Play Store">
                       <Icon name="mdi:google-play" class="w-6 h-6" />
                     </a>
                     <a v-if="project.links.liveDemo" :href="project.links.liveDemo" target="_blank" class="p-2 bg-dark-surface rounded-lg hover:text-brand transition-colors" title="Live Demo">
                       <Icon name="heroicons:globe-alt" class="w-6 h-6" />
                     </a>
                  </div>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                  <div class="md:col-span-2 space-y-6">
                    <div>
                      <h4 class="text-lg font-semibold text-white mb-2">Overview</h4>
                      <p class="text-dark-muted leading-relaxed">{{ project.longDescription || project.description }}</p>
                    </div>

                    <!-- Gallery -->
                    <div v-if="project.gallery && project.gallery.length" class="space-y-2">
                      <h4 class="text-lg font-semibold text-white">Gallery</h4>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <img v-for="(img, idx) in project.gallery" :key="idx" :src="img" class="rounded-lg object-cover w-full h-48 border border-white/5 hover:border-brand/50 transition-colors" />
                      </div>
                    </div>
                  </div>

                  <!-- Sidebar -->
                  <div class="space-y-6">
                    <div v-if="project.skillsShown">
                      <h4 class="text-lg font-semibold text-white mb-3">Key Skills</h4>
                      <ul class="space-y-2">
                        <li v-for="skill in project.skillsShown" :key="skill" class="flex items-start text-dark-muted text-sm">
                          <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand mr-2 shrink-0" />
                          {{ skill }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

const store = usePortfolioStore();

const { selectedProject: project, isModalOpen: isOpen } = storeToRefs(store);

const closeModal = () => {
  store.closeProjectModal();
};
</script>
