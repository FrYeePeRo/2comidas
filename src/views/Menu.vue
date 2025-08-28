<template>
  <MainLayout 
    :cart-items-count="cartItemsCount" 
    @toggle-cart="isCartOpen = true"
  >
    <!-- Sidebar de categorías moderno -->
    <div 
      class="categories-sidebar"
      :class="{ 'sidebar-expanded': isSidebarExpanded }"
      @mouseenter="isSidebarExpanded = true"
      @mouseleave="isSidebarExpanded = false"
    >
      <div class="sidebar-header">
        <div class="sidebar-icon">
          <i class="fas fa-bars"></i>
        </div>
        <div class="sidebar-title" v-show="isSidebarExpanded">
          <span>Categorías</span>
        </div>
      </div>
      
      <div class="sidebar-categories">
        <button
          v-for="category in categoriesWithCount"
          :key="category.id"
          @click="selectCategory(category)"
          class="sidebar-category-btn"
          :class="{ 'active': selectedCategory?.id === category.id }"
        >
          <div class="category-icon-wrapper">
            <span class="category-emoji">{{ category.icon }}</span>
          </div>
          <div class="category-info" v-show="isSidebarExpanded">
            <span class="category-name">{{ category.name }}</span>
            <span class="category-count">{{ category.count }} items</span>
          </div>
        </button>
      </div>
    </div>

    

    <!-- Hero del menú (cuando no hay categoría seleccionada) -->
    <section v-if="!selectedCategory" class="menu-hero">
      <div class="menu-hero-background"></div>
      <div class="container position-relative">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="menu-hero-content">
              <h1 class="menu-hero-title">
                Nuestro <span class="text-gradient">Menú</span>
              </h1>
              <p class="menu-hero-subtitle">
                Explora nuestras deliciosas categorías y descubre sabores únicos
              </p>
              <div class="menu-stats">
                <div class="menu-stat">
                  <div class="stat-number">{{ totalProducts }}</div>
                  <div class="stat-label">Productos</div>
                </div>
                <div class="menu-stat">
                  <div class="stat-number">{{ categories.length }}</div>
                  <div class="stat-label">Categorías</div>
                </div>
                <div class="menu-stat">
                  <div class="stat-number">4.8</div>
                  <div class="stat-label">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid de categorías (cuando no hay selección) -->
    <section v-if="!selectedCategory" class="categories-showcase py-5">
      <div class="container">
        <div class="categories-grid">
          <div 
            v-for="category in categoriesWithCount" 
            :key="category.id"
            class="category-showcase-card"
            @click="selectCategory(category)"
          >
            <div class="category-image-wrapper">
              <div class="category-image" :style="{ backgroundImage: `url(${category.image})` }"></div>
              <div class="category-overlay">
                <span class="category-emoji-large">{{ category.icon }}</span>
              </div>
            </div>
            <div class="category-showcase-info">
              <h4 class="category-showcase-title">{{ category.name }}</h4>
              <p class="category-showcase-description">{{ category.description }}</p>
              <div class="category-showcase-meta">
                <span class="category-showcase-count">{{ category.count }} productos</span>
                <span class="category-showcase-arrow">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vista de productos (cuando hay categoría seleccionada) -->
    <section v-if="selectedCategory" class="products-section py-5">
      <div class="container">
        <!-- Header de categoría -->
        <div class="category-header">
          <div class="category-header-content">
            <button
              @click="clearSelection"
              class="back-button"
            >
              <i class="fas fa-arrow-left"></i>
              <span>Volver al menú</span>
            </button>
            
            <div class="category-header-main">
              <div class="category-header-icon">
                <span>{{ selectedCategory.icon }}</span>
              </div>
              <div class="category-header-info">
                <h2 class="category-header-title">{{ selectedCategory.name }}</h2>
                <p class="category-header-description">{{ selectedCategory.description }}</p>
                <div class="category-header-meta">
                  <span class="products-count">{{ filteredProducts.length }} productos disponibles</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="category-header-actions">
            <div class="sort-dropdown">
              <button 
                class="sort-button dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-sort me-2"></i>
                Ordenar por
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="sortBy = 'name'">
                    <i class="fas fa-font me-2"></i>Nombre (A-Z)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="sortBy = 'price-low'">
                    <i class="fas fa-arrow-up me-2"></i>Precio: Menor a Mayor
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="sortBy = 'price-high'">
                    <i class="fas fa-arrow-down me-2"></i>Precio: Mayor a Menor
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="sortBy = 'rating'">
                    <i class="fas fa-star me-2"></i>Mejor Calificación
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Grid de productos -->
        <div class="products-grid" v-if="sortedProducts.length > 0">
          <ProductCard
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
        
        <!-- Estado vacío -->
        <div v-else class="empty-state">
          <div class="empty-state-icon">
            <i class="fas fa-utensils"></i>
          </div>
          <h4 class="empty-state-title">No hay productos en esta categoría</h4>
          <p class="empty-state-description">
            Pronto agregaremos más opciones deliciosas a esta sección
          </p>
          <button @click="clearSelection" class="btn btn-primary">
            Explorar otras categorías
          </button>
        </div>
      </div>
    </section>

    <!-- Cart Sidebar -->
    <CartSidebar
      v-if="isCartOpen"
      :cart="cart"
      :total="cartTotal"
      @close="isCartOpen = false"
      @update-quantity="updateQuantity"
    />
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import ProductCard from '../components/ProductCard.vue'
import CartSidebar from '../components/CartSidebar.vue'

// Route
const route = useRoute()

// Estado reactivo
const selectedCategory = ref(null)
const cart = ref([])
const isCartOpen = ref(false)
const deliveryMethod = ref('pickup')
const sortBy = ref('name')
const isSidebarExpanded = ref(false)

// Datos de categorías con imágenes
const categories = ref([
  { 
    id: 1, 
    name: 'Hamburguesas', 
    icon: '🍔',
    description: 'Hamburguesas gourmet con ingredientes frescos y carnes premium',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop'
  },
  { 
    id: 2, 
    name: 'Acompañamientos', 
    icon: '🍟',
    description: 'Perfectos complementos crujientes para acompañar tu comida',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop'
  },
  { 
    id: 3, 
    name: 'Bebidas', 
    icon: '🥤',
    description: 'Refrescantes bebidas, jugos naturales y malteadas cremosas',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop'
  },
  { 
    id: 4, 
    name: 'Postres', 
    icon: '🍦',
    description: 'Dulces tentaciones para cerrar con broche de oro',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop'
  },
  { 
    id: 5, 
    name: 'Desayunos', 
    icon: '🥞',
    description: 'Energéticos desayunos para comenzar el día perfecto',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop'
  },
  { 
    id: 6, 
    name: 'Combos', 
    icon: '📦',
    description: 'Combinaciones perfectas con descuentos especiales',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop'
  }
])

// Productos completos
const products = ref([
  // Hamburguesas
  { 
    id: 1, categoryId: 1, name: 'Big Antaurus', 
    description: 'La hamburguesa más famosa con doble carne, lechuga, queso, cebolla, pepinillos y salsa especial', 
    price: 12900, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.8, time: '15-20 min'
  },
  { 
    id: 2, categoryId: 1, name: 'Cuarto de Libra', 
    description: 'Carne 100% de res con queso cheddar, cebolla, pepinillos y ketchup', 
    price: 13900, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop',
    rating: 4.7, time: '15-20 min'
  },
  { 
    id: 3, categoryId: 1, name: 'Antaurus Clásica', 
    description: 'Hamburguesa clásica con carne jugosa, queso, lechuga y tomate', 
    price: 9900, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    rating: 4.5, time: '10-15 min'
  },
  { 
    id: 4, categoryId: 1, name: 'BBQ Especial', 
    description: 'Carne jugosa con salsa BBQ, cebolla caramelizada y bacon', 
    price: 14900, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.9, time: '18-22 min'
  },
  
  // Acompañamientos
  { 
    id: 5, categoryId: 2, name: 'Papas Fritas', 
    description: 'Papas fritas doradas y crujientes con sal marina', 
    price: 5900, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    rating: 4.6, time: '5-10 min'
  },
  { 
    id: 6, categoryId: 2, name: 'Aros de Cebolla', 
    description: 'Aros de cebolla empanizados y fritos', 
    price: 6900, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    rating: 4.4, time: '8-12 min'
  },
  { 
    id: 7, categoryId: 2, name: 'Papas Especiales', 
    description: 'Papas con condimentos especiales y salsas', 
    price: 7900, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    rating: 4.7, time: '8-12 min'
  },
  
  // Bebidas
  { 
    id: 8, categoryId: 3, name: 'Refresco Cola', 
    description: 'Refresco de cola refrescante de 500ml', 
    price: 4900, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    rating: 4.3, time: '2-5 min'
  },
  { 
    id: 9, categoryId: 3, name: 'Malteada Vainilla', 
    description: 'Cremosa malteada de vainilla con crema batida', 
    price: 7900, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    rating: 4.7, time: '5-8 min'
  },
  { 
    id: 10, categoryId: 3, name: 'Jugo Natural', 
    description: 'Jugo natural de frutas frescas', 
    price: 6900, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    rating: 4.5, time: '3-5 min'
  },
  
  // Postres
  { 
    id: 11, categoryId: 4, name: 'Helado con Galletas', 
    description: 'Helado cremoso con trozos de galleta', 
    price: 7900, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    rating: 4.8, time: '3-5 min'
  },
  { 
    id: 12, categoryId: 4, name: 'Brownie con Helado', 
    description: 'Brownie tibio con helado de vainilla', 
    price: 8900, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    rating: 4.9, time: '8-10 min'
  },
  
  // Desayunos
  { 
    id: 13, categoryId: 5, name: 'Desayuno Completo', 
    description: 'Huevos revueltos, tocino, salchicha y papas', 
    price: 11900, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
    rating: 4.6, time: '12-15 min'
  },
  { 
    id: 14, categoryId: 5, name: 'Pancakes Especiales', 
    description: 'Pancakes con miel, mantequilla y frutas', 
    price: 9900, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    rating: 4.7, time: '10-15 min'
  },
  
  // Combos
  { 
    id: 15, categoryId: 6, name: 'Combo Big Antaurus', 
    description: 'Big Antaurus + Papas + Bebida', 
    price: 18900, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    rating: 4.8, time: '15-20 min'
  },
  { 
    id: 16, categoryId: 6, name: 'Combo Familiar', 
    description: '4 Hamburguesas + 2 Papas + 4 Bebidas', 
    price: 49900, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    rating: 4.9, time: '20-25 min'
  }
])

// Propiedades computadas
const filteredProducts = computed(() => {
  return selectedCategory.value 
    ? products.value.filter(product => product.categoryId === selectedCategory.value.id)
    : []
})

const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'name':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }
})

const categoriesWithCount = computed(() => {
  return categories.value.map(category => ({
    ...category,
    count: products.value.filter(product => product.categoryId === category.id).length
  }))
})

const totalProducts = computed(() => products.value.length)

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const cartItemsCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})

// Lifecycle hooks
onMounted(() => {
  console.log('🍽️ Menu moderno montado')
  loadCartFromStorage()
  initializeBootstrap()
  
  // Verificar si hay una categoría en la query
  if (route.query.category) {
    const categoryId = parseInt(route.query.category)
    const category = categoriesWithCount.value.find(c => c.id === categoryId)
    if (category) {
      selectCategory(category)
    }
  }
})

// Watchers
watch(cart, () => {
  saveCartToStorage()
}, { deep: true })

// Métodos
const addToCart = (product) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  
  // Vibración táctil
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
  
  console.log(`🛒 Producto agregado: ${product.name}`)
}

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity === 0) {
    const index = cart.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
    return
  }
  const item = cart.value.find(item => item.id === productId)
  if (item) {
    item.quantity = newQuantity
  }
}

const selectCategory = (category) => {
  selectedCategory.value = category
  console.log(`📂 Categoría seleccionada: ${category.name}`)
  
  // Scroll suave al contenido
  nextTick(() => {
    const content = document.querySelector('.products-section')
    if (content) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

const clearSelection = () => {
  selectedCategory.value = null
  console.log('🧹 Selección limpiada')
}

const saveCartToStorage = () => {
  try {
    localStorage.setItem('antaurus_cart', JSON.stringify(cart.value))
  } catch (error) {
    console.warn('No se pudo guardar el carrito:', error)
  }
}

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('antaurus_cart')
    if (savedCart) {
      cart.value = JSON.parse(savedCart)
    }
  } catch (error) {
    console.warn('No se pudo cargar el carrito:', error)
  }
}

const initializeBootstrap = () => {
  nextTick(() => {
    const dropdownElements = document.querySelectorAll('.dropdown-toggle')
    dropdownElements.forEach(el => {
      new bootstrap.Dropdown(el)
    })
  })
}
</script>

<style scoped>
/* Sidebar de categorías */
.categories-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 70px;
  background: linear-gradient(180deg, var(--white) 0%, #f8f9fa 100%);
  border-right: 1px solid rgba(227, 30, 36, 0.1);
  z-index: 1000;
  transition: width var(--transition-normal);
  overflow: hidden;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.05);
}

.categories-sidebar.sidebar-expanded {
  width: 280px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(227, 30, 36, 0.1);
  height: 80px;
}

.sidebar-icon {
  color: var(--primary-red);
  font-size: 1.25rem;
  min-width: 38px;
  text-align: center;
}

.sidebar-title {
  margin-left: 1rem;
  font-weight: 600;
  color: var(--dark-gray);
  font-family: var(--font-primary);
}

.sidebar-categories {
  padding: 1rem 0;
  overflow-y: auto;
  height: calc(100vh - 80px);
}

.sidebar-category-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--dark-gray);
  position: relative;
}

.sidebar-category-btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--primary-red);
  transform: scaleY(0);
  transition: transform var(--transition-normal);
}

.sidebar-category-btn:hover::before,
.sidebar-category-btn.active::before {
  transform: scaleY(1);
}

.sidebar-category-btn:hover {
  background: rgba(227, 30, 36, 0.05);
}

.sidebar-category-btn.active {
  background: rgba(227, 30, 36, 0.1);
  color: var(--primary-red);
}

.category-icon-wrapper {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(227, 30, 36, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.sidebar-category-btn.active .category-icon-wrapper {
  background: var(--primary-red);
}

.category-emoji {
  font-size: 1.2rem;
}

.sidebar-category-btn.active .category-emoji {
  filter: grayscale(1) brightness(0) invert(1);
}

.category-info {
  text-align: left;
  flex: 1;
}

.category-name {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.category-count {
  display: block;
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Header de entrega */
.delivery-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(227, 30, 36, 0.1);
  padding: 1rem 0;
}

.delivery-options {
  display: flex;
  border-radius: var(--border-radius-lg);
  background: var(--light-gray);
  padding: 0.5rem;
  gap: 0.5rem;
}

.delivery-option {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--medium-gray);
  font-weight: 500;
  position: relative;
}

.delivery-option.active {
  background: var(--white);
  color: var(--primary-red);
  box-shadow: var(--shadow-sm);
}

.delivery-option i {
  font-size: 1.1rem;
}

.delivery-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--success);
  color: var(--white);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

/* Hero del menú */
.menu-hero {
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  color: var(--white);
  padding: 4rem 0 3rem;
  position: relative;
  overflow: hidden;
}

.menu-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,215,0,0.2)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.5;
}

.menu-hero-content {
  position: relative;
  z-index: 2;
}

.menu-hero-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.menu-hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.menu-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.menu-stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent-yellow);
  font-family: var(--font-primary);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 0.25rem;
}

/* Showcase de categorías */
.categories-showcase {
  margin-left: 70px;
  transition: margin-left var(--transition-normal);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.category-showcase-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
}

.category-showcase-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.category-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.category-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform var(--transition-slow);
}

.category-showcase-card:hover .category-image {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-normal);
}

.category-showcase-card:hover .category-overlay {
  background: rgba(227, 30, 36, 0.8);
}

.category-emoji-large {
  font-size: 4rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.category-showcase-info {
  padding: 1.5rem;
}

.category-showcase-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
}

.category-showcase-description {
  color: var(--medium-gray);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.category-showcase-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-showcase-count {
  color: var(--primary-red);
  font-weight: 600;
  font-size: 0.9rem;
}

.category-showcase-arrow {
  color: var(--primary-red);
  transition: transform var(--transition-normal);
}

.category-showcase-card:hover .category-showcase-arrow {
  transform: translateX(5px);
}

/* Sección de productos */
.products-section {
  margin-left: 70px;
  transition: margin-left var(--transition-normal);
}

.category-header {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.category-header-content {
  flex: 1;
}

.back-button {
  background: rgba(227, 30, 36, 0.1);
  border: none;
  color: var(--primary-red);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.back-button:hover {
  background: var(--primary-red);
  color: var(--white);
  transform: translateX(-3px);
}

.category-header-main {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.category-header-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
}

.category-header-info {
  flex: 1;
}

.category-header-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
}

.category-header-description {
  color: var(--medium-gray);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.products-count {
  color: var(--primary-red);
  font-weight: 600;
}

.category-header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sort-button {
  background: var(--light-gray);
  border: 1px solid rgba(227, 30, 36, 0.2);
  color: var(--dark-gray);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: all var(--transition-normal);
}

.sort-button:hover {
  background: var(--white);
  border-color: var(--primary-red);
  color: var(--primary-red);
}

/* Grid de productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Estado vacío */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
}

.empty-state-icon {
  color: var(--medium-gray);
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.empty-state-title {
  color: var(--dark-gray);
  margin-bottom: 1rem;
}

.empty-state-description {
  color: var(--medium-gray);
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive */
@media (max-width: 1200px) {
  .categories-showcase,
  .products-section {
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .categories-sidebar {
    transform: translateX(-100%);
  }
  
  .categories-sidebar:hover {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .delivery-options {
    flex-direction: column;
    gap: 0;
  }
  
  .delivery-option {
    border-radius: 0;
    padding: 1rem;
  }
  
  .delivery-option:first-child {
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  }
  
  .delivery-option:last-child {
    border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  }
  
  .menu-stats {
    gap: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .category-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .category-header-main {
    flex-direction: column;
    text-align: center;
  }
  
  .category-header-icon {
    margin: 0 auto;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .categories-sidebar {
    display: none;
  }
}

@media (max-width: 576px) {
  .category-showcase-card {
    margin: 0 -1rem;
    border-radius: 0;
  }
  
  .categories-grid {
    gap: 0;
    margin: 0 -1rem;
  }
  
  .category-header {
    margin: 0 -1rem 2rem;
    border-radius: 0;
  }
  
  .empty-state {
    margin: 0 -1rem;
    border-radius: 0;
  }
}
</style>