<template>
  <MainLayout 
    :cart-items-count="cartItemsCount" 
    @toggle-cart="isCartOpen = true"
  >
    <!-- Hero Section -->
    <section class="location-hero">
      <div class="hero-overlay"></div>
      <div class="hero-background"></div>
      
      <div class="container position-relative" style="z-index: 3;">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <div class="hero-content animate-fade-in-up">
              <h1 class="hero-title">
                Nuestra <span class="text-gradient">Ubicación</span>
              </h1>
              <p class="hero-subtitle">
                Encuentra fácilmente nuestro restaurante en el corazón de la Zona Rosa. 
                Te esperamos con el mejor ambiente y la comida más deliciosa.
              </p>
              
              <!-- Botones de acción rápida -->
              <div class="hero-actions">
                <a 
                  :href="googleMapsUrl"
                  target="_blank"
                  class="btn btn-primary btn-lg me-3"
                >
                  <i class="fas fa-directions me-2"></i>
                  Cómo Llegar
                </a>
                <a 
                  href="tel:+573001234567"
                  class="btn btn-secondary btn-lg"
                >
                  <i class="fas fa-phone me-2"></i>
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información Principal de Ubicación -->
    <section class="location-info py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <!-- Información de contacto -->
          <div class="col-lg-6">
            <div class="info-content">
              <div class="section-badge">
                <i class="fas fa-map-marker-alt me-2"></i>
                Ubicación Principal
              </div>
              
              <h2 class="section-title">
                Estamos en el <span class="text-primary">mejor lugar</span> para ti
              </h2>
              
              <p class="section-description">
                Ubicados estratégicamente en la Zona Rosa de Bogotá, nuestro restaurante 
                cuenta con fácil acceso en transporte público y privado, parqueadero 
                disponible y un ambiente acogedor que te hará sentir como en casa.
              </p>

              <!-- Tarjetas de información -->
              <div class="info-cards">
                <div class="info-card">
                  <div class="card-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="card-content">
                    <h5 class="card-title">Dirección Completa</h5>
                    <p class="card-description">
                      Calle 5 #22-45, Torres del castillo<br>
                      <strong>San Gil, Colombia</strong><br>
                      
                    </p>
                    <a 
                      :href="googleMapsUrl"
                      target="_blank"
                      class="card-link"
                    >
                      Ver en Google Maps
                      <i class="fas fa-external-link-alt ms-1"></i>
                    </a>
                  </div>
                </div>

                <div class="info-card">
                  <div class="card-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="card-content">
                    <h5 class="card-title">Horarios de Atención</h5>
                    <div class="schedule-list">
                      <div class="schedule-row">
                        <span class="day">Lunes - Jueves</span>
                        <span class="time">11:00 AM - 10:00 PM</span>
                      </div>
                      <div class="schedule-row">
                        <span class="day">Viernes - Sábado</span>
                        <span class="time">11:00 AM - 12:00 AM</span>
                      </div>
                      <div class="schedule-row special">
                        <span class="day">Domingo</span>
                        <span class="time">12:00 PM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="info-card">
                  <div class="card-icon">
                    <i class="fas fa-car"></i>
                  </div>
                  <div class="card-content">
                    <h5 class="card-title">Parqueadero</h5>
                    <p class="card-description">
                      Contamos con parqueadero propio para 20 vehículos.<br>
                      <strong>Servicio gratuito</strong> para nuestros clientes.
                    </p>
                    <div class="amenities">
                      <span class="amenity-tag">
                        <i class="fas fa-wheelchair"></i>
                        Acceso para discapacitados
                      </span>
                      <span class="amenity-tag">
                        <i class="fas fa-baby"></i>
                        Zona familiar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mapa interactivo -->
          <div class="col-lg-6">
            <div class="map-section">
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/place/6%C2%B032'29.7%22N+73%C2%B007'39.1%22W/@6.5415757,-73.127596,3a,90y,300.29h,46.13t/data=!3m7!1e1!3m5!1safwtC5Se8VkrIy-44VdgOg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D43.8655983248421%26panoid%3DafwtC5Se8VkrIy-44VdgOg%26yaw%3D300.2941396908338!7i16384!8i8192!4m7!1m2!2m1!1smPAS!3m3!8m2!3d6.54158!4d-73.127528?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  class="map-iframe"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <!-- Overlay con información -->
                <div class="map-overlay">
                  <div class="overlay-content">
                    <div class="location-marker">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h6 class="overlay-title">ANTAURUS</h6>
                    <p class="overlay-address">Torres del castillo</p>
                  </div>
                </div>
              </div>
              
              <!-- Botones de acción del mapa -->
              <div class="map-actions">
                <a 
                  :href="googleMapsUrl"
                  target="_blank"
                  class="map-action-btn primary"
                >
                  <i class="fas fa-directions"></i>
                  <span>Cómo Llegar</span>
                </a>
                <a 
                  :href="wazeUrl"
                  target="_blank"
                  class="map-action-btn secondary"
                >
                  <i class="fab fa-waze"></i>
                  <span>Abrir en Waze</span>
                </a>
                <button 
                  @click="shareLocation"
                  class="map-action-btn tertiary"
                >
                  <i class="fas fa-share-alt"></i>
                  <span>Compartir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 

    <!-- Zona y Referencias -->
    <section class="references-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Referencias <span class="text-primary">Cercanas</span>
          </h2>
          <p class="section-subtitle">
            Lugares conocidos cerca de nuestro restaurante
          </p>
        </div>

        <div class="references-grid">
          <div 
            v-for="reference in nearbyReferences" 
            :key="reference.id"
            class="reference-item"
          >
            <div class="reference-icon">
              <i :class="reference.icon"></i>
            </div>
            <div class="reference-content">
              <h5 class="reference-name">{{ reference.name }}</h5>
              <p class="reference-distance">{{ reference.distance }}</p>
              <span class="reference-type">{{ reference.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="cta-title">¿Listo para visitarnos?</h3>
            <p class="cta-description">
              Ven y disfruta de la mejor experiencia gastronómica en el corazón de Bogotá. 
              Te esperamos con los brazos abiertos y las hamburguesas más deliciosas.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <div class="cta-actions">
              <a 
                :href="whatsappUrl"
                target="_blank"
                class="btn btn-warning btn-lg me-3"
              >
                <i class="fab fa-whatsapp me-2"></i>
                Reservar Mesa
              </a>
              <router-link 
                to="/menu"
                class="btn btn-outline-light btn-lg"
              >
                Ver Menú
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
import { ref, computed, onMounted } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import CartSidebar from '../components/CartSidebar.vue'

// Estado reactivo
const cart = ref([])
const isCartOpen = ref(false)

// Datos de referencias cercanas
const nearbyReferences = ref([
  {
    id: 1,
    name: 'Centro Comercial Andino',
    distance: '2 cuadras',
    type: 'Centro Comercial',
    icon: 'fas fa-shopping-center'
  },
  {
    id: 2,
    name: 'Zona Rosa',
    distance: '1 cuadra',
    type: 'Zona de Entretenimiento',
    icon: 'fas fa-cocktail'
  },
  {
    id: 3,
    name: 'Estación TransMilenio',
    distance: '300 metros',
    type: 'Transporte',
    icon: 'fas fa-bus'
  },
  {
    id: 4,
    name: 'Parque de la 93',
    distance: '5 cuadras',
    type: 'Parque',
    icon: 'fas fa-tree'
  },
  {
    id: 5,
    name: 'Hotel Four Points',
    distance: '1 cuadra',
    type: 'Hotel',
    icon: 'fas fa-hotel'
  },
  {
    id: 6,
    name: 'Embajada de Estados Unidos',
    distance: '4 cuadras',
    type: 'Embajada',
    icon: 'fas fa-flag'
  }
])

// Propiedades computadas
const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const cartItemsCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})

const googleMapsUrl = computed(() => {
  const address = encodeURIComponent('Calle 5 #14-15, Torres del castillo, San Gil, Colombia')
  return `https://www.google.com/maps/search/Calle+5+%2314-15,+Torres+del+castillo,+San+Gil,+Colombia/@6.5415539,-73.1277023,21z?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D`
})

const wazeUrl = computed(() => {
  return 'https://waze.com/ul?q=Calle%2045%20%2323-15%2C%20Bogot%C3%A1%2C%20Colombia'
})

const whatsappUrl = computed(() => {
  const message = "¡Hola! Me gustaría reservar una mesa en Antaurus. ¿Tienen disponibilidad?"
  return `https://wa.me/573232494876?text=${encodeURIComponent(message)}`
})

// Lifecycle hooks
onMounted(() => {
  console.log('📍 Vista de Ubicación montada')
  loadCartFromStorage()
})

// Métodos
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

const shareLocation = async () => {
  const shareData = {
    title: 'Antaurus Restaurant',
    text: 'Ven a disfrutar las mejores hamburguesas gourmet en Antaurus',
    url: window.location.href
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // Fallback - copiar al clipboard
      await navigator.clipboard.writeText(`${shareData.title} - ${shareData.text} ${shareData.url}`)
      showNotification('Ubicación copiada al portapapeles', 'success')
    }
  } catch (error) {
    console.error('Error compartiendo:', error)
    showNotification('Error al compartir ubicación', 'error')
  }
}

const showNotification = (message, type) => {
  // Implementación simple de notificación
  const notification = document.createElement('div')
  notification.className = `notification-toast ${type}`
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#16a34a' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 9999;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    document.body.removeChild(notification)
  }, 3000)
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

</script>

<style scoped>
/* Hero Section */
.location-hero {
  min-height: 80vh;
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
  background: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop') center/cover;
  z-index: 0;
}

.hero-content {
  color: var(--white);
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.text-gradient {
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Sección de información */
.location-info {
  position: relative;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(227, 30, 36, 0.1);
  color: var(--primary-red);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
}

.section-description {
  font-size: 1.1rem;
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Tarjetas de información */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(227, 30, 36, 0.1);
  display: flex;
  gap: 1.5rem;
  transition: all var(--transition-normal);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-red);
}

.card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-title {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-gray);
}

.card-description {
  color: var(--medium-gray);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-link {
  color: var(--primary-red);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.card-link:hover {
  color: var(--primary-red-dark);
}

/* Horarios */
.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(227, 30, 36, 0.1);
}

.schedule-row.special {
  border-bottom-color: var(--primary-red);
  border-bottom-width: 2px;
}

.day {
  font-weight: 500;
  color: var(--dark-gray);
}

.time {
  font-weight: 600;
  color: var(--primary-red);
}

/* Amenidades */
.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.amenity-tag {
  background: rgba(227, 30, 36, 0.1);
  color: var(--primary-red);
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

/* Mapa */
.map-section {
  position: relative;
}

.map-container {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  height: 400px;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.map-overlay {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius-md);
  padding: 1rem 1.5rem;
  box-shadow: var(--shadow-md);
}

.location-marker {
  color: var(--primary-red);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.overlay-title {
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 0.25rem;
}

.overlay-address {
  color: var(--medium-gray);
  font-size: 0.9rem;
  margin: 0;
}

/* Acciones del mapa */
.map-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.map-action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius-md);
  text-decoration: none;
  transition: all var(--transition-normal);
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.map-action-btn.primary {
  background: var(--primary-red);
  color: var(--white);
}

.map-action-btn.secondary {
  background: #1E88E5;
  color: var(--white);
}

.map-action-btn.tertiary {
  background: var(--light-gray);
  color: var(--dark-gray);
}

.map-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.map-action-btn i {
  font-size: 1.2rem;
}

.map-action-btn span {
  font-size: 0.85rem;
}

/* Transporte */
.transport-section {
  position: relative;
}

.transport-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all var(--transition-normal);
  height: 100%;
  border: 1px solid rgba(227, 30, 36, 0.1);
}

.transport-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-red);
}

.transport-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--white);
  font-size: 2rem;
}

.transport-title {
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
}

.transport-details {
  text-align: left;
}

.detail-item {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-item strong {
  color: var(--dark-gray);
  font-size: 0.9rem;
}

.detail-item span {
  color: var(--medium-gray);
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Referencias */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.reference-item {
  background: var(--white);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all var(--transition-normal);
  border: 1px solid rgba(227, 30, 36, 0.1);
}

.reference-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-red);
}

.reference-icon {
  width: 50px;
  height: 50px;
  background: rgba(227, 30, 36, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-red);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.reference-content {
  flex: 1;
}

.reference-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--dark-gray);
  font-size: 0.95rem;
}

.reference-distance {
  color: var(--primary-red);
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.reference-type {
  color: var(--medium-gray);
  font-size: 0.8rem;
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

/* Responsive */
@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
  }
  
  .map-actions {
    grid-template-columns: 1fr;
  }
  
  .transport-details {
    text-align: center;
  }
  
  .references-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    justify-content: center;
    margin-top: 2rem;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .info-cards {
    gap: 1.5rem;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .map-overlay {
    top: 1rem;
    left: 1rem;
    padding: 0.75rem 1rem;
  }
  
  .transport-card {
    padding: 1.5rem;
  }
  
  .reference-item {
    padding: 1rem;
  }
}
</style>