<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20">
    <!-- Ambient Background Gradients & Grid Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)] -z-10"></div>
    <div class="absolute top-1/3 -left-32 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

    <div class="container mx-auto px-6 z-10">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: High-Impact Editorial & Profile Intro -->
        <div class="lg:col-span-7 flex flex-col items-start text-left">
          
          <!-- Availability / Role Status Badge -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-dark-text mb-6 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-white/80">Available for Tech Lead & Full Stack Engineer Roles</span>
          </div>

          <!-- Name & Core Title -->
          <div class="mb-6">
            <h1 class="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Abdiel Orellana
            </h1>
            <p class="text-xl sm:text-2xl text-brand font-medium mt-2">
              Software Engineer & Tech Lead
            </p>
            <p class="text-sm text-dark-muted font-mono mt-1">
              Mobile Architecture & Full Stack Systems
            </p>
          </div>


          <!-- Professional Bio (based on CV) -->
          <p class="text-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            Software Engineer & Mobile Architect with 4+ years leading technical teams and designing end-to-end production platforms. Specialist in <strong class="text-white font-medium">React Native (CLI & Expo EAS)</strong>, distributed backends with <strong class="text-white font-medium">NestJS</strong>, modern web with <strong class="text-white font-medium">Nuxt & Angular</strong>, and <strong class="text-white font-medium">DDD / Hexagonal Architecture</strong> with AI-native workflows.
          </p>

          <!-- Impact Metrics Row -->
          <!-- <div class="grid grid-cols-3 gap-3 sm:gap-6 py-5 px-5 mb-8 rounded-xl bg-dark-surface/50 border border-white/5 w-full max-w-xl backdrop-blur-sm">
            <div>
              <div class="text-2xl sm:text-3xl font-bold text-white font-mono">4+ <span class="text-brand text-lg">yrs</span></div>
              <div class="text-xs text-dark-muted font-medium mt-0.5">Engineering & Lead</div>
            </div>
            <div class="border-l border-white/10 pl-3 sm:pl-6">
              <div class="text-2xl sm:text-3xl font-bold text-white font-mono">10k+ <span class="text-brand text-lg">scale</span></div>
              <div class="text-xs text-dark-muted font-medium mt-0.5">Active Users & 99.9% Uptime</div>
            </div>
            <div class="border-l border-white/10 pl-3 sm:pl-6">
              <div class="text-2xl sm:text-3xl font-bold text-white font-mono">40% <span class="text-brand text-lg">opt</span></div>
              <div class="text-xs text-dark-muted font-medium mt-0.5">Build & Query Speed</div>
            </div>
          </div> -->

          <!-- Call to Action Buttons -->
          <div class="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              class="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span>Explore Work</span>
              <Icon name="heroicons:arrow-right" class="w-4 h-4" />
            </a>

            <a 
              :href="CV_URL" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all"
            >
              <Icon name="heroicons:document-arrow-down" class="w-4 h-4 text-brand" />
              <span>Download CV</span>
            </a>

            <a 
              href="#contact" 
              class="inline-flex items-center gap-2 px-5 py-3.5 text-dark-muted hover:text-white font-medium text-sm transition-colors"
            >
              <span>Get in Touch</span>
              <Icon name="heroicons:envelope" class="w-4 h-4" />
            </a>
          </div>

        </div>

        <!-- Right Column: System Architecture Matrix Card -->
        <div class="lg:col-span-5 w-full">
          <div class="relative group">
            <!-- Glow backlight -->
            <div class="absolute -inset-1 bg-gradient-to-r from-brand/20 via-indigo-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            <!-- Terminal / Architecture Spec Container -->
            <div class="relative bg-dark-card/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
              
              <!-- Inspector Header -->
              <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span class="text-xs font-mono text-dark-muted ml-2">architecture-stack.spec</span>
                </div>
                <!-- <div class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-[11px] font-mono text-brand font-semibold">
                  <span>PRODUCTION GRADE</span>
                </div> -->
              </div>

              <!-- Categorized Engineering Layers -->
              <div class="space-y-4">
                <div 
                  v-for="layer in architectureLayers" 
                  :key="layer.title"
                  class="p-3.5 rounded-xl bg-dark-surface/60 border border-white/5 hover:border-brand/30 transition-all duration-300"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <Icon :name="layer.icon" class="w-4 h-4 text-brand" />
                      <span class="text-xs font-semibold text-white font-mono uppercase tracking-wider">{{ layer.title }}</span>
                    </div>
                    <span class="text-[11px] font-mono text-dark-muted">{{ layer.badge }}</span>
                  </div>

                  <!-- Badges in this layer -->
                  <div class="flex flex-wrap gap-1.5">
                    <div 
                      v-for="tech in layer.skills" 
                      :key="tech.name"
                      class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-bg/80 border border-white/5 text-xs text-dark-text hover:border-brand/40 transition-colors"
                    >
                      <Icon v-if="tech.icon" :name="tech.icon" class="w-3.5 h-3.5" />
                      <span class="font-medium text-[11px]">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Highlight Badge Bar -->
              <!-- <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-dark-muted font-mono">
                <div class="flex items-center gap-1.5 text-white/70">
                  <Icon name="heroicons:cpu-chip" class="w-4 h-4 text-brand" />
                  <span>Spec-Driven & AI Workflows</span>
                </div>
                <div class="flex items-center gap-1 text-emerald-400">
                  <Icon name="heroicons:check-badge" class="w-4 h-4" />
                  <span>Verified Architecture</span>
                </div>
              </div> -->

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EXTERNAL_LINKS } from '../constants';

const CV_URL = EXTERNAL_LINKS.CV_URL;

const architectureLayers = [
  {
    title: 'Mobile Architecture',
    badge: 'Core Focus',
    icon: 'heroicons:device-phone-mobile',
    skills: [
      { name: 'React Native', icon: 'logos:react' },
      { name: 'Expo (EAS)', icon: 'logos:expo-icon' },
      { name: 'Native Modules', icon: 'logos:apple' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
    ]
  },
  {
    title: 'Backend & Cloud Infrastructure',
    badge: 'Microservices & DDD',
    icon: 'heroicons:server-stack',
    skills: [
      { name: 'NestJS', icon: 'logos:nestjs' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'GCP & AWS', icon: 'logos:google-cloud' },
      { name: 'Docker / CI-CD', icon: 'logos:docker-icon' },
    ]
  },
  {
    title: 'Modern Web & Frontend',
    badge: 'SSR / SSG',
    icon: 'heroicons:globe-alt',
    skills: [
      { name: 'Nuxt 4', icon: 'logos:nuxt-icon' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ]
  },
  {
    title: 'Architecture & AI-Native',
    badge: 'Best Practices',
    icon: 'heroicons:cube-transparent',
    skills: [
      { name: 'Clean Architecture', icon: '' },
      { name: 'Domain-Driven Design', icon: '' },
      { name: 'AI Agents & SDD', icon: 'heroicons:sparkles' },
    ]
  }
];
</script>
