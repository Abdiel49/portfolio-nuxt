<template>
  <div class="min-h-screen bg-dark-bg text-dark-text font-sans selection:bg-brand selection:text-white">
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
    
    <!-- Global Modal -->
    <ProjectModal />
  </div>
</template>
