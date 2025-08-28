<template>
  <div class="min-vh-100">
    <!-- Header Principal Moderno -->
    <header class="navbar navbar-expand-lg sticky-top shadow-sm" style="z-index: 1030;">
      <div class="container-xl">
        <!-- Logo con gradiente moderno -->
        <router-link to="/" class="navbar-brand me-4">
          <div class="d-flex align-items-center">
            <div class="logo-container me-2">
              <span class="logo-text">ANTAURUS</span>
              <div class="logo-tagline">GOURMET BURGERS</div>
            </div>
          </div>
        </router-link>
        
        <!-- Toggle para móvil -->
        <button 
          class="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <!-- Navegación principal -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link 
                to="/" 
                class="nav-link"
                :class="{ 'active': $route.name === 'Home' }"
              >
                <i class="fas fa-home me-2"></i>
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                to="/menu" 
                class="nav-link"
                :class="{ 'active': $route.name === 'Menu' }"
              >
                <i class="fas fa-utensils me-2"></i>
                Menú
              </router-link>
            </li>
            <li class="nav-item">
              <a href="/ubicacion" class="nav-link">
                <i class="fas fa-map-marker-alt me-2"></i>
                Ubicación
              </a>
            </li>
            <li class="nav-item">
              <a href="/contacto" class="nav-link">
                <i class="fas fa-info-circle me-2"></i>
                Nosotros
              </a>
            </li>
          </ul>
          
          <!-- Acciones del header -->
          <div class="d-flex align-items-center gap-3">
            <!-- Información de contacto -->
            <div class="d-none d-lg-flex align-items-center contact-info me-3">
              <div class="contact-item">
                <i class="fas fa-phone text-primary me-2"></i>
                <a href="tel:+573001234567" class="contact-link">
                  300 123 4567
                </a>
              </div>
              <div class="contact-divider"></div>
              <div class="contact-item">
                <i class="fas fa-clock text-primary me-2"></i>
                <span class="contact-text">Lun-Dom 11:00-23:00</span>
              </div>
            </div>
            
            <!-- Carrito moderno -->
            <button
              @click="$emit('toggle-cart')"
              class="btn btn-cart position-relative"
              :class="{ 'cart-pulse': cartItemsCount > 0 }"
            >
              <i class="fas fa-shopping-bag"></i>
              <span class="cart-text d-none d-md-inline ms-2">Carrito</span>
              <span 
                v-if="cartItemsCount > 0" 
                class="cart-badge"
              >
                {{ cartItemsCount > 99 ? '99+' : cartItemsCount }}
              </span>
            </button>
            
            <!-- Botón de pedido -->
            <a 
              href="https://wa.me/573001234567?text=¡Hola! Quiero hacer un pedido"
              target="_blank"
              class="btn btn-primary d-none d-lg-inline-flex"
            >
              <i class="fab fa-whatsapp me-2"></i>
              Pedir Ahora
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main>
      <slot />
    </main>

    <!-- Footer moderno -->
    <footer class="footer mt-5" id="contact">
      <div class="container">
        <div class="row g-5">
          <!-- Información principal -->
          <div class="col-lg-4">
            <div class="footer-brand-section">
              <h3 class="footer-brand mb-3">ANTAURUS</h3>
              <p class="footer-description">
                Las mejores hamburguesas gourmet de la ciudad. Sabores auténticos 
                que conquistan corazones desde 2020. Una experiencia gastronómica 
                única en cada bocado.
              </p>
              <div class="social-links mt-4">
                <a href="#" class="social-link" title="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link" title="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/573001234567" class="social-link" title="WhatsApp">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#" class="social-link" title="TikTok">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contacto -->
          <div class="col-lg-4">
            <h5 class="footer-title">Contacto</h5>
            <div class="contact-list">
              <div class="contact-item-footer">
                <i class="fas fa-map-marker-alt contact-icon"></i>
                <div>
                  <strong>Dirección</strong>
                  <p>Torres del castillo<br>San Gil, Santander, Colombia</p>
                </div>
              </div>
              <div class="contact-item-footer">
                <i class="fas fa-phone contact-icon"></i>
                <div>
                  <strong>Teléfono</strong>
                  <p><a href="tel:+573001234567" class="footer-link">323 249 4876</a></p>
                </div>
              </div>
              <div class="contact-item-footer">
                <i class="fas fa-envelope contact-icon"></i>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@antaurus.com" class="footer-link">info@antaurus.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Horarios -->
          <div class="col-lg-4">
            <h5 class="footer-title">Horarios de Atención</h5>
            <div class="schedule-list">
              <div class="schedule-item">
                <span class="day">Lunes - Jueves</span>
                <span class="time">11:00 - 22:00</span>
              </div>
              <div class="schedule-item">
                <span class="day">Viernes - Sábado</span>
                <span class="time">11:00 - 24:00</span>
              </div>
              <div class="schedule-item special">
                <span class="day">Domingo</span>
                <span class="time">12:00 - 22:00</span>
              </div>
              <div class="delivery-info mt-3">
                <div class="delivery-badge">
                  <i class="fas fa-motorcycle me-2"></i>
                  Domicilios hasta las 23:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Línea divisoria -->
        <hr class="footer-divider">

        <!-- Copyright y enlaces legales -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright">
              © 2024 Antaurus Restaurant. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="legal-links">
              <a href="#" class="legal-link">Términos y Condiciones</a>
              <a href="#" class="legal-link">Política de Privacidad</a>
              <a href="#" class="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Navegación móvil flotante -->
    <nav class="mobile-nav d-lg-none">
      <div class="mobile-nav-container">
        <router-link 
          to="/" 
          class="mobile-nav-item"
          :class="{ 'active': $route.name === 'Home' }"
        >
          <i class="fas fa-home"></i>
          <span>Inicio</span>
        </router-link>
        
        <router-link 
          to="/menu" 
          class="mobile-nav-item"
          :class="{ 'active': $route.name === 'Menu' }"
        >
          <i class="fas fa-utensils"></i>
          <span>Menú</span>
        </router-link>
        
        <button 
          @click="$emit('toggle-cart')" 
          class="mobile-nav-item cart-button"
        >
          <div class="mobile-cart-icon">
            <i class="fas fa-shopping-bag"></i>
            <span 
              v-if="cartItemsCount > 0" 
              class="mobile-cart-badge"
            >
              {{ cartItemsCount }}
            </span>
          </div>
          <span>Carrito</span>
        </button>
        
        <router-link 
          to="/ubicacion" 
          class="mobile-nav-item"
          :class="{ 'active': $route.name === 'Location' }"
        >
          <i class="fas fa-map-marker-alt"></i>
          <span>Ubicación</span>
        </router-link>
        
        <router-link 
          to="/contacto" 
          class="mobile-nav-item"
          :class="{ 'active': $route.name === 'Contact' }"
        >
          <i class="fas fa-phone"></i>
          <span>Contacto</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Props
const props = defineProps({
  cartItemsCount: {
    type: Number,
    default: 0
  }
})

// Emits
const emit = defineEmits(['toggle-cart'])

// Lifecycle
onMounted(() => {
  console.log('🏛️ MainLayout moderno montado')
  initializeNavbar()
})

// Métodos
const initializeNavbar = () => {
  // Cerrar navbar en móvil al hacer click en un enlace
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
  const navbarCollapse = document.querySelector('.navbar-collapse')
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse)
        bsCollapse.hide()
      }
    })
  })
}
</script>

<style scoped>
/* Logo moderno */
.logo-container {
  text-align: center;
}

.logo-text {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  line-height: 1;
}

.logo-tagline {
  font-size: 0.6rem;
  font-weight: 500;
  color: var(--medium-gray);
  letter-spacing: 2px;
  margin-top: -2px;
}

/* Hamburger menu moderno */
.hamburger-menu {
  width: 24px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger-menu span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--primary-red);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-menu span:nth-child(1) { top: 0; }
.hamburger-menu span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger-menu span:nth-child(3) { bottom: 0; }

/* Información de contacto en header */
.contact-info {
  font-size: 0.85rem;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-link {
  color: var(--dark-gray);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--primary-red);
}

.contact-text {
  color: var(--medium-gray);
  font-weight: 500;
}

.contact-divider {
  width: 1px;
  height: 20px;
  background: var(--primary-red);
  margin: 0 1rem;
  opacity: 0.3;
}

/* Botón carrito moderno */
.btn-cart {
  background: var(--white);
  border: 2px solid var(--primary-red);
  color: var(--primary-red);
  padding: 10px 16px;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-normal);
  position: relative;
}

.btn-cart:hover {
  background: var(--primary-red);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-yellow);
  color: var(--dark-gray);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 50px;
  min-width: 20px;
  text-align: center;
  line-height: 1.2;
}

.cart-pulse {
  animation: cartPulse 2s infinite;
}

@keyframes cartPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Footer moderno */
.footer {
  background: linear-gradient(135deg, var(--dark-gray), var(--black));
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(227,30,36,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,215,0,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(227,30,36,0.1)"/></svg>');
  opacity: 0.5;
}

.footer-brand-section {
  position: relative;
  z-index: 1;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-title {
  font-family: var(--font-primary);
  font-weight: 600;
  color: var(--white);
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-red), var(--accent-yellow));
  border-radius: 2px;
}

/* Redes sociales */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: var(--primary-red);
  color: var(--white);
  transform: translateY(-3px);
}

/* Lista de contacto */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item-footer {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  color: var(--primary-red);
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-item-footer strong {
  color: var(--white);
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.contact-item-footer p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.4;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--primary-red);
}

/* Horarios */
.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.schedule-item.special {
  border-bottom: 2px solid var(--primary-red);
}

.day {
  color: var(--white);
  font-weight: 500;
}

.time {
  color: var(--accent-yellow);
  font-weight: 600;
}

.delivery-info {
  padding-top: 1rem;
}

.delivery-badge {
  background: rgba(0, 184, 148, 0.2);
  color: var(--success);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(0, 184, 148, 0.3);
}

/* Footer bottom */
.footer-divider {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 3rem 0 2rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.legal-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.legal-link:hover {
  color: var(--primary-red);
}

/* Navegación móvil */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid rgba(227, 30, 36, 0.1);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  backdrop-filter: blur(20px);
}

.mobile-nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 0;
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--medium-gray);
  font-size: 0.75rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  min-width: 50px;
  position: relative;
}

.mobile-nav-item i {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.mobile-nav-item.active,
.mobile-nav-item:hover {
  color: var(--primary-red);
  background: rgba(227, 30, 36, 0.05);
}

.mobile-nav-item.whatsapp:hover {
  color: var(--success);
  background: rgba(0, 184, 148, 0.05);
}

.mobile-cart-icon {
  position: relative;
}

.mobile-cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primary-red);
  color: var(--white);
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 50px;
  min-width: 16px;
  text-align: center;
  line-height: 1;
}

/* Responsive */
@media (max-width: 991.98px) {
  .navbar-nav {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .nav-link {
    padding: 0.75rem 1rem;
    border-radius: var(--border-radius-sm);
    margin: 0.25rem 0;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background: rgba(227, 30, 36, 0.05);
  }
  
  /* Ajuste de padding para navegación móvil */
  main {
    padding-bottom: 80px;
  }
}

@media (max-width: 768px) {
  .legal-links {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .contact-divider {
    display: none;
  }
}
</style>