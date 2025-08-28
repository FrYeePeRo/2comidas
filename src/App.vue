<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

// Lifecycle hooks
onMounted(() => {
  console.log('🍔 Antaurus Restaurant App montada')
  setupGlobalListeners()
})

onBeforeUnmount(() => {
  console.log('🍔 Antaurus Restaurant App desmontada')
  removeGlobalListeners()
})

// Métodos
const setupGlobalListeners = () => {
  window.addEventListener('error', handleGlobalError)
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
}

const removeGlobalListeners = () => {
  window.removeEventListener('error', handleGlobalError)
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
}

const handleGlobalError = (error) => {
  console.error('Error global:', error)
}

const handleOnline = () => {
  console.log('✅ Conexión restaurada')
}

const handleOffline = () => {
  console.log('❌ Sin conexión')
}
</script>
