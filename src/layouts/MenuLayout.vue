<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Header Principal -->
    <header class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center px-4 py-4">
          <div class="flex items-center space-x-4">
            <router-link to="/" class="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300">
              ANTAURUS
            </router-link>
            <nav class="hidden md:flex space-x-6">
              <router-link 
                to="/" 
                class="text-gray-700 hover:text-red-600 font-medium transition-colors"
                :class="{ 'text-red-600 font-bold': $route.name === 'Home' }"
              >
                Inicio
              </router-link>
              <router-link 
                to="/menu" 
                class="text-gray-700 hover:text-red-600 font-medium transition-colors"
                :class="{ 'text-red-600 font-bold': $route.name === 'Menu' }"
              >
                Menú
              </router-link>
              <a href="/#contacto" class="text-gray-700 hover:text-red-600 font-medium transition-colors">Contacto</a>
            </nav>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Teléfono para llamadas -->
            <a 
              href="tel:+573001234567" 
              class="hidden sm:flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <i class="fas fa-phone"></i>
              <span>300 123 4567</span>
            </a>
            
            <!-- Botón del carrito -->
            <button
              @click="$emit('toggle-cart')"
              class="relative bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i class="fas fa-shopping-cart text-lg"></i>
              <span 
                v-if="cartItemsCount > 0" 
                class="absolute -top-2 -right-2 bg-yellow-400 text-red-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse"
              >
                {{ cartItemsCount }}
              </span>
            </button>
          </div>
        </div>
        
        <!-- Métodos de entrega -->
        <div class="flex border-t border-gray-200">
          <button
            @click="$emit('update-delivery', 'pickup')"
            :class="[
              'flex-1 py-4 px-6 text-center font-medium transition-all duration-300',
              deliveryMethod === 'pickup'
                ? 'text-red-600 bg-red-50 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
            ]"
          >
            <i class="fas fa-store mr-2"></i>
            Recoger en tienda
          </button>
          <button
            @click="$emit('update-delivery', 'delivery')"
            :class="[
              'flex-1 py-4 px-6 text-center font-medium transition-all duration-300',
              deliveryMethod === 'delivery'
                ? 'text-red-600 bg-red-50 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
            ]"
          >
            <i class="fas fa-motorcycle mr-2"></i>
            Domicilio
          </button>
        </div>
      </div>
    </header>

    <!-- Navegación de Categorías - Layout especial para menú -->
    <nav class="bg-white shadow-md sticky top-[140px] z-40 border-b border-gray-200" v-if="!selectedCategory">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-center text-2xl font-bold text-gray-800 py-4 border-b border-gray-100">
          Selecciona una <span class="text-red-600">Categoría</span>
        </h2>
        <div class="py-6">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="$emit('select-category', category)"
              class="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div :class="[
                'w-14 h-14 mb-3 rounded-2xl bg-gradient-to-r flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110',
                category.color
              ]">
                {{ category.icon }}
              </div>
              <span class="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-sm text-center">
                {{ category.name }}
              </span>
              <span class="text-xs text-gray-500 mt-1">{{ category.count }} productos</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Navegación breadcrumb cuando hay categoría seleccionada -->
    <nav v-else class="bg-white shadow-md sticky top-[140px] z-40 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <button
              @click="$emit('clear-category')"
              class="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg"
            >
              <i class="fas fa-arrow-left"></i>
              <span>Volver al menú</span>
            </button>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="fas fa-home text-sm"></i>
              <span>→</span>
              <span>Menú</span>
              <span>→</span>
              <span class="font-semibold text-red-600">{{ selectedCategory.name }}</span>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-2">
            <span :class="[
              'w-8 h-8 rounded-full bg-gradient-to-r flex items-center justify-center text-lg',
              selectedCategory.color
            ]">
              {{ selectedCategory.icon }}
            </span>
            <span class="font-bold text-gray-800">{{ selectedCategory.name }}</span>
            <span class="text-sm text-gray-500">({{ filteredProductsCount }} productos)</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Navegación móvil -->
    <nav class="md:hidden bg-white border-b border-gray-200 px-4 py-2 fixed bottom-0 left-0 right-0 z-50 shadow-lg">
      <div class="flex justify-around">
        <router-link 
          to="/" 
          class="flex flex-col items-center py-2 text-gray-600 hover:text-red-600 transition-colors"
          :class="{ 'text-red-600': $route.name === 'Home' }"
        >
          <i class="fas fa-home text-lg mb-1"></i>
          <span class="text-xs">Inicio</span>
        </router-link>
        <button 
          @click="$emit('toggle-cart')"
          class="flex flex-col items-center py-2 text-gray-600 hover:text-red-600 transition-colors relative"
        >
          <i class="fas fa-shopping-cart text-lg mb-1"></i>
          <span class="text-xs">Carrito</span>
          <span 
            v-if="cartItemsCount > 0" 
            class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartItemsCount }}
          </span>
        </button>
        <a 
          href="tel:+573001234567" 
          class="flex flex-col items-center py-2 text-gray-600 hover:text-red-600 transition-colors"
        >
          <i class="fas fa-phone text-lg mb-1"></i>
          <span class="text-xs">Llamar</span>
        </a>
        <a 
          href="https://wa.me/573001234567"
          target="_blank"
          class="flex flex-col items-center py-2 text-gray-600 hover:text-green-600 transition-colors"
        >
          <i class="fab fa-whatsapp text-lg mb-1"></i>
          <span class="text-xs">WhatsApp</span>
        </a>
      </div>
    </nav>

    <!-- Contenido principal -->
    <main class="pb-20 md:pb-0">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo y descripción -->
          <div class="md:col-span-2">
            <div class="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-bold text-2xl inline-block shadow-lg mb-4">
              ANTAURUS
            </div>
            <p class="text-gray-400 mb-4 max-w-md">
              Las mejores hamburguesas gourmet de la ciudad. Sabores auténticos que conquistan corazones desde 2020.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://wa.me/573001234567" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <!-- Contacto -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Contacto</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <i class="fas fa-phone text-red-500"></i>
                <span class="text-gray-400">300 123 4567</span>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-envelope text-red-500"></i>
                <span class="text-gray-400">info@antaurus.com</span>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt text-red-500 mt-1"></i>
                <span class="text-gray-400">Calle 45 #23-15<br>Zona Rosa, Bogotá</span>
              </div>
            </div>
          </div>

          <!-- Horarios -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Horarios</h3>
            <div class="space-y-2 text-gray-400">
              <div class="flex justify-between">
                <span>Lun - Jue:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div class="flex justify-between">
                <span>Vie - Sáb:</span>
                <span>11:00 - 24:00</span>
              </div>
              <div class="flex justify-between">
                <span>Domingo:</span>
                <span>12:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-6 text-center">
          <p class="text-gray-500 text-sm">
            © 2024 Antaurus Restaurant. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MenuLayout',
  props: {
    cartItemsCount: {
      type: Number,
      default: 0
    },
    deliveryMethod: {
      type: String,
      default: 'pickup'
    },
    categories: {
      type: Array,
      default: () => []
    },
    selectedCategory: {
      type: Object,
      default: null
    },
    filteredProductsCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-cart', 'update-delivery', 'select-category', 'clear-category']
}
</script>
