<template>
  <div class="bg-void min-h-screen">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
