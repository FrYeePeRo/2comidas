<template>
  <MainLayout 
    :cart-items-count="cartItemsCount" 
    @toggle-cart="isCartOpen = true"
  >
    <!-- Hero Section Moderno -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-background" :style="{ backgroundImage: `url(${heroImage})` }"></div>
      
      <div class="container position-relative" style="z-index: 3;">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <div class="hero-content animate-fade-in-up">
              <h1 class="hero-title">
                LAS MEJORES
                <span class="text-gradient">HAMBURGUESAS</span>
                DE LA CIUDAD
              </h1>
              <p class="hero-subtitle">
                Sabores auténticos que conquistan corazones. Ingredientes premium, 
                técnicas gourmet y una experiencia gastronómica incomparable.
              </p>
              <div class="hero-actions">
                <router-link to="/menu" class="btn btn-primary btn-lg me-3">
                  <i class="fas fa-utensils me-2"></i>
                  Explorar Menú
                </router-link>
                <a 
                  href="https://wa.me/573001234567?text=¡Hola! Quiero hacer un pedido"
                  target="_blank"
                  class="btn btn-secondary btn-lg"
                >
                  <i class="fab fa-whatsapp me-2"></i>
                  Pedir Ahora
                </a>
              </div>
              
              <!-- Estadísticas rápidas -->
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Clientes Felices</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">4.8</div>
                  <div class="stat-label">Rating Promedio</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">30min</div>
                  <div class="stat-label">Entrega Rápida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elemento decorativo -->
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </section>

    <!-- Sección de Categorías -->
    <section class="categories-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Descubre Nuestro <span class="text-primary">Menú</span>
          </h2>
          <p class="section-subtitle">
            Explora nuestras deliciosas categorías y encuentra tu combinación perfecta
          </p>
        </div>

        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="category-card"
            @click="goToCategory(category)"
          >
            <div class="category-icon">{{ category.icon }}</div>
            <h5 class="category-title">{{ category.name }}</h5>
            <p class="category-description">{{ category.description }}</p>
            <div class="category-count">{{ category.count }} productos</div>
            <div class="category-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Productos Destacados -->
    <section class="featured-products py-5 bg-light">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Nuestros <span class="text-primary">Favoritos</span>
          </h2>
          <p class="section-subtitle">
            Los productos más populares que hacen volver a nuestros clientes
          </p>
        </div>

        <div class="products-grid">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="product-card"
          >
            <div class="product-image-container">
              <img
                :src="product.image"
                :alt="product.name"
                class="product-image"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="product-badges">
                <span class="badge badge-warning">
                  <i class="fas fa-star me-1"></i>{{ product.rating }}
                </span>
                <span class="badge badge-primary">
                  <i class="fas fa-clock me-1"></i>{{ product.time }}
                </span>
              </div>
              <button 
                @click="addToCart(product)"
                class="quick-add-btn"
                title="Agregar al carrito"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
            
            <div class="product-info">
              <h5 class="product-title">{{ product.name }}</h5>
              <p class="product-description">{{ product.description }}</p>
              
              <div class="product-footer">
                <div class="product-price">${{ formatPrice(product.price) }}</div>
                <button 
                  @click="addToCart(product)"
                  class="btn btn-primary btn-sm"
                >
                  <i class="fas fa-shopping-bag me-1"></i>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link to="/menu" class="btn btn-outline btn-lg">
            Ver Menú Completo
            <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Características -->
    <section class="features-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            ¿Por qué elegir <span class="text-primary">ANTAURUS</span>?
          </h2>
          <p class="section-subtitle">
            Nos especializamos en crear la experiencia gastronómica perfecta
          </p>
        </div>

        <div class="row g-4">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.id"
            class="col-lg-4"
          >
            <div class="feature-card" :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="feature-icon" :class="feature.colorClass">
                <i :class="feature.icon"></i>
              </div>
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5 bg-primary text-white" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="cta-title">¿Listo para una experiencia gastronómica única?</h3>
            <p class="cta-description">
              Ven y disfruta de nuestras hamburguesas gourmet en un ambiente acogedor. 
              Te esperamos con los mejores sabores y la atención que mereces.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <div class="cta-actions">
              <router-link 
                to="/ubicacion"
                class="btn btn-warning btn-lg me-3"
              >
                <i class="fas fa-map-marker-alt me-2"></i>
                Nuestra Ubicación
              </router-link>
              <router-link 
                to="/contacto"
                class="btn btn-outline-light btn-lg"
              >
                <i class="fas fa-phone me-2"></i>
                Contacto
              </router-link>
            </div>
          </div>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import CartSidebar from '../components/CartSidebar.vue'

// Router
const router = useRouter()

// Estado reactivo
const cart = ref([])
const isCartOpen = ref(false)
const heroImage = ref('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=800&fit=crop')

// Datos de categorías
const categories = ref([
  { 
    id: 1, 
    name: 'Hamburguesas', 
    icon: '🍔',
    description: 'Hamburguesas gourmet con ingredientes frescos',
    count: 8
  },
  { 
    id: 2, 
    name: 'Acompañamientos', 
    icon: '🍟',
    description: 'Perfectos complementos para tu comida',
    count: 6
  },
  { 
    id: 3, 
    name: 'Bebidas', 
    icon: '🥤',
    description: 'Refrescantes bebidas y jugos naturales',
    count: 5
  },
  { 
    id: 4, 
    name: 'Postres', 
    icon: '🍦',
    description: 'Dulces tentaciones irresistibles',
    count: 4
  },
  { 
    id: 5, 
    name: 'Desayunos', 
    icon: '🥞',
    description: 'Inicia tu día con energía',
    count: 3
  },
  { 
    id: 6, 
    name: 'Combos', 
    icon: '📦',
    description: 'Combinaciones perfectas con descuentos',
    count: 4
  }
])

// Productos destacados
const featuredProducts = ref([
  {
    id: 1,
    name: 'Big Antaurus',
    description: 'Nuestra hamburguesa insignia con doble carne, queso, lechuga y salsa especial.',
    price: 12900,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.8,
    time: '15-20 min'
  },
  {
    id: 2,
    name: 'Combo Antaurus',
    description: 'Big Antaurus + Papas crujientes + Bebida refrescante. El combo perfecto.',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    rating: 4.9,
    time: '20-25 min'
  },
  {
    id: 3,
    name: 'Papas Especiales',
    description: 'Papas artesanales con condimentos especiales y salsas de la casa.',
    price: 7900,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    rating: 4.7,
    time: '10-15 min'
  }
])

// Características
const features = ref([
  {
    id: 1,
    title: 'Ingredientes Premium',
    description: 'Seleccionamos los mejores ingredientes locales y orgánicos para garantizar frescura y sabor excepcional.',
    icon: 'fas fa-seedling',
    colorClass: 'feature-success'
  },
  {
    id: 2,
    title: 'Entrega Express',
    description: 'Domicilios en toda la ciudad en máximo 30 minutos. También puedes recoger en tienda.',
    icon: 'fas fa-shipping-fast',
    colorClass: 'feature-warning'
  },
  {
    id: 3,
    title: 'Calidad Gourmet',
    description: 'Reconocidos como la mejor hamburguesería de la ciudad por 3 años consecutivos.',
    icon: 'fas fa-award',
    colorClass: 'feature-primary'
  }
])

// Propiedades computadas
const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const cartItemsCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})

const whatsappUrl = computed(() => {
  const message = "¡Hola! Me interesa conocer más sobre sus hamburguesas gourmet. ¿Podrían ayudarme con información sobre su menú?"
  return `https://wa.me/573001234567?text=${encodeURIComponent(message)}`
})

// Lifecycle hooks
onMounted(() => {
  console.log('🏠 Home moderno montado')
  loadCartFromStorage()
  initializeAnimations()
})

// Watchers
watch(cartItemsCount, (newCount, oldCount) => {
  if (newCount > oldCount) {
    showNotification('¡Producto agregado al carrito!', 'success')
  }
})

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
  
  // Vibración táctil si está disponible
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
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

const goToCategory = (category) => {
  router.push({ 
    name: 'Menu', 
    query: { category: category.id } 
  })
}

const handleImageError = (event) => {
  event.target.src = generatePlaceholderImage(event.target.alt)
}

const generatePlaceholderImage = (productName) => {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f8f9fa"/>
      <circle cx="200" cy="120" r="40" fill="#dee2e6"/>
      <rect x="150" y="180" width="100" height="8" fill="#dee2e6"/>
      <rect x="160" y="200" width="80" height="6" fill="#ced4da"/>
      <text x="200" y="250" text-anchor="middle" fill="#6c757d" font-family="sans-serif" font-size="14">
        ${productName || 'Imagen no disponible'}
      </text>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO').format(price)
}

const showNotification = (message, type = 'info') => {
  console.log(`📢 ${type}: ${message}`)
  
  // Crear toast notification moderno
  const toast = document.createElement('div')
  toast.className = `toast-notification toast-${type}`
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-check-circle toast-icon"></i>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `
  
  document.body.appendChild(toast)
  
  // Mostrar el toast
  setTimeout(() => toast.classList.add('show'), 100)
  
  // Auto-remove después de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => document.body.removeChild(toast), 300)
  }, 3000)
  
  // Cerrar al hacer click
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.remove('show')
    setTimeout(() => document.body.removeChild(toast), 300)
  })
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

const initializeAnimations = () => {
  // Intersection Observer para animaciones
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Observar elementos que se deben animar
  setTimeout(() => {
    const elementsToAnimate = document.querySelectorAll('.category-card, .product-card, .feature-card')
    elementsToAnimate.forEach(el => observer.observe(el))
  }, 100)
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(227, 30, 36, 0.9) 0%, 
    rgba(196, 30, 58, 0.8) 50%, 
    rgba(227, 30, 36, 0.9) 100%);
  z-index: 1;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-content {
  color: var(--white);
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  margin-bottom: var(--spacing-lg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
}

.text-gradient {
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.95;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-actions {
  margin-bottom: var(--spacing-2xl);
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-yellow);
  font-family: var(--font-primary);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 0.25rem;
}

.stat-divider {
  width: 2px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

/* Decoración del hero */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Secciones */
.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-gray);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--medium-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid de categorías */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.category-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-red), var(--accent-orange));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.category-card:hover::before {
  opacity: 0.05;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-red);
}

.category-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: block;
}

.category-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
}

.category-description {
  color: var(--medium-gray);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.category-count {
  color: var(--primary-red);
  font-weight: 600;
  font-size: 0.85rem;
}

.category-arrow {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--primary-red);
  opacity: 0;
  transition: all var(--transition-normal);
}

.category-card:hover .category-arrow {
  opacity: 1;
  transform: translateX(5px);
}

/* Grid de productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.product-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.product-image-container {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quick-add-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--primary-red);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  opacity: 0;
  transform: scale(0.8);
}

.product-card:hover .quick-add-btn {
  opacity: 1;
  transform: scale(1);
}

.quick-add-btn:hover {
  background: var(--primary-red-dark);
  transform: scale(1.1);
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
  font-size: 1.1rem;
}

.product-description {
  color: var(--medium-gray);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary-red);
  font-family: var(--font-primary);
}

/* Características */
.feature-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all var(--transition-normal);
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  overflow: hidden;
}

.feature-card.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.feature-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.feature-card:hover .feature-icon::before {
  transform: translateX(100%);
}

.feature-success {
  background: linear-gradient(135deg, var(--success), #00a085);
}

.feature-warning {
  background: linear-gradient(135deg, var(--warning), var(--accent-orange));
}

.feature-primary {
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
}

.feature-title {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-gray);
}

.feature-description {
  color: var(--medium-gray);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

/* Toast notifications */
.toast-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--white);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-xl);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9999;
  transform: translateX(400px);
  transition: transform var(--transition-normal);
  min-width: 300px;
}

.toast-notification.show {
  transform: translateX(0);
}

.toast-notification.toast-success {
  border-left: 4px solid var(--success);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.toast-icon {
  color: var(--success);
  font-size: 1.2rem;
}

.toast-message {
  color: var(--dark-gray);
  font-weight: 500;
}

.toast-close {
  background: none;
  border: none;
  color: var(--medium-gray);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.toast-close:hover {
  background: var(--light-gray);
  color: var(--dark-gray);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
    padding: 1rem;
  }
  
  .stat-divider {
    display: none;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .category-card {
    padding: 1.5rem 1rem;
  }
  
  .category-icon {
    font-size: 2.5rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-cards {
    gap: 1rem;
  }
  
  .contact-card {
    padding: 1rem;
  }
  
  .location-actions {
    flex-direction: column;
  }
  
  .location-actions .btn {
    width: 100%;
  }
  
  .map-container {
    height: 300px;
    margin-top: 2rem;
  }
  
  .toast-notification {
    left: 20px;
    right: 20px;
    min-width: auto;
    transform: translateY(-100px);
  }
  
  .toast-notification.show {
    transform: translateY(0);
  }
}

@media (max-width: 576px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>