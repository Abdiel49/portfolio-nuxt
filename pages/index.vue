<template>
  <div>
    <HeroSection />

    <!-- Experience Section -->
    <section id="experience" class="py-24 bg-dark-surface/30 relative">
      <div class="container mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div class="h-1 w-20 bg-brand rounded"></div>
        </div>

        <div class="max-w-3xl mx-auto">
          <ExperienceTimeline />
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-dark-bg relative">
      <div class="container mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div class="h-1 w-20 bg-brand rounded"></div>
        </div>

        <!-- <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
            @click="openProject(project)"
          />
        </div> -->

        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="p-6 rounded-lg bg-dark-surface/50 border border-dark-border max-w-lg">
            <h3 class="text-2xl font-bold text-white mb-3">🚧 Under Construction</h3>
            <p class="text-dark-muted">
              This section is currently being built. Check back soon for updates on my latest projects!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-dark-bg">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your next project?</h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto mb-12">
          I'm currently available for freelance work and open to full-time opportunities.
          If you're interested in working together, please don't hesitate to get in touch.
        </p>
        <a href="mailto:abdielorellana3@gmail.com" class="inline-block px-8 py-4 bg-transparent border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-all">
          Get in Touch
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../data/projects';
import { usePortfolioStore } from '../stores/portfolio';
import type { Project } from '../types';

const store = usePortfolioStore();

const openProject = (project: Project) => {
  store.selectProject(project);
};

useHead({
  title: 'Abdiel Orellana | Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Abdiel Orellana, Senior Frontend Engineer & Mobile Specialist.' }
  ]
})
</script>
