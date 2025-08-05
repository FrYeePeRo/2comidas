<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Header -->
    <header class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center px-4 py-4">
          <div class="flex items-center space-x-4">
            <div class="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg">
              ANTAURUS
            </div>
            <nav class="hidden md:flex space-x-6">
              <a href="#menu" class="text-gray-700 hover:text-red-600 font-medium transition-colors">Menú</a>
              <a href="#promos" class="text-gray-700 hover:text-red-600 font-medium transition-colors">Promociones</a>
            </nav>
          </div>
          
          <button
            @click="isCartOpen = true"
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
        
        <div class="flex border-t border-gray-200">
          <button
            @click="deliveryMethod = 'pickup'"
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
            @click="deliveryMethod = 'delivery'"
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

    <!-- Hero Banner -->
    <section class="relative h-96 md:h-[500px] overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=600&fit=crop"
          alt="Deliciosas hamburguesas Antaurus"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          @error="handleImageError"
          loading="lazy"
        />
      </div>
      <div class="relative z-20 h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 ">
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              NUEVAS <span class="text-yellow-400">HAMBURGUESAS</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Prueba nuestra nueva línea de hamburguesas con ingredientes premium y sabores únicos
            </p>
            <button class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              ORDENA AHORA
            </button>
          </div>
        </div>
      </div>

    </section>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-12">
      <!-- Categories Section -->
      <section v-if="!selectedCategory" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          EXPLORA NUESTRO <span class="text-red-600">MENÚ</span>
        </h2>
        <p class="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Descubre todos nuestros deliciosos productos, desde hamburguesas gourmet hasta postres irresistibles
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          
          <div
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category)"
            class="group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
             
              <div :class="[
                'w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300',
                category.color
              ]">
                {{ category.icon }}
              </div>
              <h3 class="font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                {{ category.name }}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section v-else>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ selectedCategory.name }}</h2>
            <p class="text-gray-600">Explora nuestra selección de {{ selectedCategory.name.toLowerCase() }}</p>
          </div>
          <button
            @click="selectedCategory = null"
            class="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            <i class="fas fa-arrow-left"></i>
            <span>Volver al menú</span>
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="relative">
              <div class="h-48 w-full relative overflow-hidden">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  @error="handleImageError"
                  loading="lazy"
                />
              </div>
              <div class="absolute top-4 left-4 flex space-x-2">
                <div class="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <i class="fas fa-star text-yellow-400 text-sm"></i>
                  <span class="text-sm font-medium">{{ product.rating }}</span>
                </div>
                <div class="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <i class="fas fa-clock text-gray-500 text-sm"></i>
                  <span class="text-sm">{{ product.time }}</span>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="font-bold text-xl text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                {{ product.description }}
              </p>
              
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-red-600">
                  ${{ product.price.toLocaleString() }}
                </span>
                <button
                  @click="addToCart(product)"
                  class="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Cart Sidebar -->
    <div v-if="isCartOpen" class="fixed inset-0 z-50 overflow-hidden">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="isCartOpen = false"></div>
      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300">
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-center p-6 border-b border-gray-200">
            <h3 class="text-xl font-bold text-gray-800">Tu Pedido</h3>
            <button
              @click="isCartOpen = false"
              class="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div class="flex-1 overflow-y-auto p-6">
            <div v-if="cart.length === 0" class="text-center py-12">
              <div class="text-6xl mb-4">🛒</div>
              <p class="text-gray-500">Tu carrito está vacío</p>
            </div>
            <div v-else class="space-y-4">
              <div
                v-for="item in cart"
                :key="item.id"
                class="flex items-center space-x-4 bg-gray-50 rounded-xl p-4"
              >
                <div class="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="font-medium text-gray-800">{{ item.name }}</h4>
                  <p class="text-red-600 font-bold">${{ item.price.toLocaleString() }}</p>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span class="w-8 text-center font-medium">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="cart.length > 0" class="border-t border-gray-200 p-6 space-y-4">
            <div class="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span class="text-red-600">${{ cartTotal.toLocaleString() }}</span>
            </div>
            <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="mb-6">
          <div class="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-bold text-2xl inline-block shadow-lg">
            ANTAURUS
          </div>
        </div>
        <p class="text-gray-400 mb-4">
          Sabores auténticos que conquistan corazones
        </p>
        <div class="flex justify-center items-center space-x-2 text-sm text-gray-500">
          <i class="fas fa-users"></i>
          <span>© 2024 Antaurus. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'AntaurusApp',
  setup() {
    // Reactive state
    const selectedCategory = ref(null)
    const cart = ref([])
    const isCartOpen = ref(false)
    const deliveryMethod = ref('pickup')

    // Categories data
    const categories = ref([
      { id: 1, name: 'Hamburguesas', icon: '🍔', color: 'from-red-500 to-red-600' },
      { id: 2, name: 'Acompañamientos', icon: '🍟', color: 'from-yellow-500 to-orange-500' },
      { id: 3, name: 'Bebidas', icon: '🥤', color: 'from-blue-500 to-blue-600' },
      { id: 4, name: 'Postres', icon: '🍦', color: 'from-pink-500 to-purple-500' },
      { id: 5, name: 'Desayunos', icon: '🥞', color: 'from-green-500 to-green-600' },
      { id: 6, name: 'Combos', icon: '📦', color: 'from-indigo-500 to-purple-600' }
    ])

    // Products data
    const products = ref([
      // Hamburguesas
      { 
        id: 1, 
        categoryId: 1, 
        name: 'Big Antaurus', 
        description: 'La hamburguesa más famosa con doble carne, lechuga, queso, cebolla, pepinillos y salsa especial', 
        price: 12900, 
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center',
        rating: 4.8,
        time: '15-20 min'
      },
      { 
        id: 2, 
        categoryId: 1, 
        name: 'Cuarto de Libra Antaurus', 
        description: 'Carne 100% de res con queso cheddar, cebolla, pepinillos y ketchup', 
        price: 13900, 
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&crop=center',
        rating: 4.7,
        time: '15-20 min'
      },
      { 
        id: 3, 
        categoryId: 1, 
        name: 'Antaurus Clásica', 
        description: 'Hamburguesa clásica con carne jugosa, queso, lechuga y tomate', 
        price: 9900, 
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
        rating: 4.5,
        time: '10-15 min'
      },
      
      // Acompañamientos
      { 
        id: 4, 
        categoryId: 2, 
        name: 'Papas Fritas Crujientes', 
        description: 'Papas fritas doradas y crujientes con sal marina', 
        price: 5900, 
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&crop=center',
        rating: 4.6,
        time: '5-10 min'
      },
      { 
        id: 5, 
        categoryId: 2, 
        name: 'Aros de Cebolla', 
        description: 'Aros de cebolla empanizados y fritos hasta la perfección', 
        price: 6900, 
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop&crop=center',
        rating: 4.4,
        time: '8-12 min'
      },
      
      // Bebidas
      { 
        id: 6, 
        categoryId: 3, 
        name: 'Refresco Cola', 
        description: 'Refresco de cola refrescante de 500ml', 
        price: 4900, 
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop&crop=center',
        rating: 4.3,
        time: '2-5 min'
      },
      { 
        id: 7, 
        categoryId: 3, 
        name: 'Malteada de Vainilla', 
        description: 'Cremosa malteada de vainilla con crema batida', 
        price: 7900, 
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center',
        rating: 4.7,
        time: '5-8 min'
      },
      
      // Postres
      { 
        id: 8, 
        categoryId: 4, 
        name: 'Helado con Galletas', 
        description: 'Delicioso helado cremoso con trozos de galleta crujiente', 
        price: 7900, 
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center',
        rating: 4.8,
        time: '3-5 min'
      },
      { 
        id: 9, 
        categoryId: 4, 
        name: 'Brownie con Helado', 
        description: 'Brownie tibio de chocolate con helado de vainilla', 
        price: 8900, 
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center',
        rating: 4.9,
        time: '8-10 min'
      },

      // Desayunos
      { 
        id: 10, 
        categoryId: 5, 
        name: 'Desayuno Completo', 
        description: 'Huevos revueltos, tocino, salchicha y hash browns', 
        price: 11900, 
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center',
        rating: 4.6,
        time: '12-15 min'
      },

      // Combos
      { 
        id: 11, 
        categoryId: 6, 
        name: 'Combo Big Antaurus', 
        description: 'Big Antaurus + Papas medianas + Bebida', 
        price: 18900, 
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&crop=center',
        rating: 4.8,
        time: '15-20 min'
      }
    ])

    // Computed properties
    const filteredProducts = computed(() => {
      return selectedCategory.value 
        ? products.value.filter(product => product.categoryId === selectedCategory.value.id)
        : []
    })

    const cartTotal = computed(() => {
      return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    })

    const cartItemsCount = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0)
    })

    // Methods
    const addToCart = (product) => {
      const existingItem = cart.value.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.value.push({ ...product, quantity: 1 })
      }
    }

    const removeFromCart = (productId) => {
      const index = cart.value.findIndex(item => item.id === productId)
      if (index > -1) {
        cart.value.splice(index, 1)
      }
    }

    const updateQuantity = (productId, newQuantity) => {
      if (newQuantity === 0) {
        removeFromCart(productId)
        return
      }
      const item = cart.value.find(item => item.id === productId)
      if (item) {
        item.quantity = newQuantity
      }
    }

    const selectCategory = (category) => {
      selectedCategory.value = category
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNjYuNTY5IDE4Ni41NjkgMTgwIDE3MCAxODBDMTUzLjQzMSAxODAgMTQwIDE2Ni41NjkgMTQwIDE1MEM0MCAxMzMuNDMxIDE1My40MzEgMTIwIDE3MCAxMjBDMTg2LjU2OSAxMjAgMjAwIDEzMy40MzEgMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxODAiIHk9IjEzMCI+CjxwYXRoIGQ9Ik0yMCAzNUM5LjUwNjYgMzUgMSAyNi40OTM0IDEgMTZDMSA1LjUwNjYgOS41MDY2IC0zIDIwIC0zQzMwLjQ5MzQgLTMgMzkgNS41MDY2IDM5IDE2QzM5IDI2LjQ5MzQgMzAuNDkzNCAzNSAyMCAzNVpNMjAgNUMxMS43MTU3IDUgNSAxMS43MTU3IDUgMjBDNSAyOC4yODQzIDExLjcxNTcgMzUgMjAgMzVDMjguMjg0MyAzNSAzNSAyOC4yODQzIDM1IDIwQzM1IDExLjcxNTcgMjguMjg0MyA1IDIwIDVaIiBmaWxsPSIjNkI3Mjg0Ii8+CjxwYXRoIGQ9Ik0yMCA5QzE4LjM0MzEgOSAxNyAxMC4zNDMxIDE3IDEyQzE3IDEzLjY1NjkgMTguMzQzMSAxNSAyMCAxNUMyMS42NTY5IDE1IDIzIDEzLjY1NjkgMjMgMTJDMjMgMTAuMzQzMSAyMS42NTY5IDkgMjAgOVoiIGZpbGw9IiM2QjcyODQiLz4KPHBhdGggZD0iTTE4IDI2SDE2VjE4SDI0VjI2SDIyVjIwSDIwVjI2SDE4WiIgZmlsbD0iIzZCNzI4NCIvPgo8L3N2Zz4KPC9zdmc+'
    }

    return {
      selectedCategory,
      cart,
      isCartOpen,
      deliveryMethod,
      categories,
      products,
      filteredProducts,
      cartTotal,
      cartItemsCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      selectCategory,
      handleImageError
    }
  }
}
</script>

<style>
/* Import Tailwind CSS */
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

/* Import Font Awesome */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

/* Custom animations and utilities */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom scrollbar for cart */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #dc2626;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #b91c1c;
}

/* Backdrop blur support for older browsers */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Additional custom styles */
.bg-white\/95 {
  background-color: rgba(255, 255, 255, 0.95);
}

.bg-black\/50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-black\/60 {
  background-color: rgba(0, 0, 0, 0.6);
}

.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}

.bg-white\/90 {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Ensure smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}



/* Custom gradient backgrounds */
.from-red-500 {
  --tw-gradient-from: #ef4444;
}

.to-red-600 {
  --tw-gradient-to: #dc2626;
}

.from-yellow-500 {
  --tw-gradient-from: #eab308;
}

.to-orange-500 {
  --tw-gradient-to: #f97316;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
}

.to-blue-600 {
  --tw-gradient-to: #2563eb;
}

.from-pink-500 {
  --tw-gradient-from: #ec4899;
}

.to-purple-500 {
  --tw-gradient-to: #a855f7;
}

.from-green-500 {
  --tw-gradient-from: #22c55e;
}

.to-green-600 {
  --tw-gradient-to: #16a34a;
}

.from-indigo-500 {
  --tw-gradient-from: #6366f1;
}

.to-purple-600 {
  --tw-gradient-to: #9333ea;
}

.from-red-600 {
  --tw-gradient-from: #dc2626;
}

.to-red-700 {
  --tw-gradient-to: #b91c1c;
}

.from-yellow-400 {
  --tw-gradient-from: #facc15;
}

.to-yellow-500 {
  --tw-gradient-to: #eab308;
}

.from-yellow-300 {
  --tw-gradient-from: #fde047;
}

.to-yellow-400 {
  --tw-gradient-to: #facc15;
}

.from-red-700 {
  --tw-gradient-from: #b91c1c;
}

.to-red-800 {
  --tw-gradient-to: #991b1b;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-from), var(--tw-gradient-to));
}

/* Mobile responsive fixes */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-6xl {
    font-size: 3rem;
  }
  
  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* Focus states for accessibility */
button:focus,
.cursor-pointer:focus {
  outline: 2px solid #dc2626;
  outline-offset: 2px;
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Custom shadows */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>