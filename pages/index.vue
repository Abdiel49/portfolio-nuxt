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

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
            @click="openProject(project)"
          />
        </div>
      </div>
    </section>

    <!-- NPM Packages Section -->
    <section id="packages" class="py-24 bg-dark-surface/30 relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 class="text-4xl font-bold mb-4 text-white">Open Source & NPM Packages</h2>
            <div class="h-1 w-20 bg-brand rounded mb-3"></div>
            <p class="text-dark-muted text-base max-w-xl">
              Developer tools, utilities, and specification suites published on the npm registry.
            </p>
          </div>

          <a 
            :href="EXTERNAL_LINKS.NPM" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-surface hover:bg-brand/10 text-white hover:text-brand border border-white/10 hover:border-brand/40 rounded-lg text-sm font-semibold transition-all self-start md:self-auto"
          >
            <Icon name="mdi:npm" class="w-5 h-5 text-red-400" />
            <span>View npm Profile</span>
            <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
          </a>
        </div>

        <!-- NPM Packages Grid / Skeleton -->
        <div v-if="packagesStatus === 'pending' && (!npmPackages || npmPackages.length === 0)" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PackageSkeleton v-for="i in 3" :key="i" />
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PackageCard 
            v-for="pkg in npmPackages" 
            :key="pkg.name" 
            :pkg="pkg"
          />
        </div>
      </div>
    </section>

    <!-- Dev.to Articles Section -->
    <section id="articles" class="py-24 bg-dark-bg relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 class="text-4xl font-bold mb-4 text-white">Articles & Publications</h2>
            <div class="h-1 w-20 bg-brand rounded mb-3"></div>
            <p class="text-dark-muted text-base max-w-xl">
              Technical guides, deep dives, and architecture patterns shared on Dev.to.
            </p>
          </div>

          <a 
            :href="EXTERNAL_LINKS.DEVTO" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-surface hover:bg-brand/10 text-white hover:text-brand border border-white/10 hover:border-brand/40 rounded-lg text-sm font-semibold transition-all self-start md:self-auto"
          >
            <Icon name="mdi:dev-to" class="w-5 h-5" />
            <span>View on Dev.to</span>
            <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
          </a>
        </div>

        <!-- Dev.to Articles Grid / Skeleton -->
        <div v-if="articlesStatus === 'pending' && (!articles || articles.length === 0)" class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ArticleSkeleton v-for="i in 2" :key="i" />
        </div>

        <div v-else class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ArticleCard 
            v-for="article in articles" 
            :key="article.id" 
            :article="article"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-dark-surface/30">
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
import { EXTERNAL_LINKS } from '../constants';
import { usePortfolioStore } from '../stores/portfolio';
import { usePackages } from '../composables/usePackages';
import { useArticles } from '../composables/useArticles';
import type { Project } from '../types';

const store = usePortfolioStore();

const { data: npmPackages, status: packagesStatus } = usePackages();
const { data: articles, status: articlesStatus } = useArticles();

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
