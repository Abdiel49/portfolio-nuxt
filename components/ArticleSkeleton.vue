<template>
  <div class="animate-pulse bg-dark-surface rounded-xl overflow-hidden border border-white/5 flex flex-col justify-between">
    <!-- Image Skeleton -->
    <div class="aspect-[16/9] w-full bg-white/5 border-b border-white/5"></div>

    <!-- Content Skeleton -->
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <!-- Date / Read time -->
        <div class="flex items-center gap-3 mb-4">
          <div class="h-3 w-16 bg-white/10 rounded"></div>
          <div class="h-3 w-20 bg-white/10 rounded"></div>
        </div>

        <!-- Title -->
        <div class="space-y-2 mb-4">
          <div class="h-5 w-full bg-white/10 rounded"></div>
          <div class="h-5 w-3/4 bg-white/10 rounded"></div>
        </div>

        <!-- Excerpt -->
        <div class="space-y-2 mb-6">
          <div class="h-3.5 w-full bg-white/5 rounded"></div>
          <div class="h-3.5 w-5/6 bg-white/5 rounded"></div>
          <div class="h-3.5 w-2/3 bg-white/5 rounded"></div>
        </div>
      </div>

      <!-- Footer: Tags & Read Link -->
      <div>
        <div class="flex flex-wrap gap-2 mb-5">
          <div class="h-4 w-12 bg-white/5 rounded"></div>
          <div class="h-4 w-16 bg-white/5 rounded"></div>
          <div class="h-4 w-14 bg-white/5 rounded"></div>
        </div>
        <div class="h-4 w-28 bg-brand/20 rounded"></div>
      </div>
    </div>
  </div>
</template>
