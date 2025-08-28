<template>
  <MainLayout 
    :cart-items-count="cartItemsCount" 
    @toggle-cart="isCartOpen = true"
  >
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-overlay"></div>
      <div class="hero-background"></div>
      
      <div class="container position-relative" style="z-index: 3;">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <div class="hero-content animate-fade-in-up">
              <h1 class="hero-title">
                <span class="text-gradient">Contacto</span> y Atención
              </h1>
              <p class="hero-subtitle">
                Estamos aquí para ayudarte. Contáctanos por cualquier medio y te 
                responderemos lo más pronto posible. Tu experiencia es nuestra prioridad.
              </p>
              
              <!-- Estadísticas de atención -->
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Atención WhatsApp</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">&lt;5min</div>
                  <div class="stat-label">Tiempo de respuesta</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">4.9/5</div>
                  <div class="stat-label">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Métodos de Contacto Principal -->
    <section class="contact-methods py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Múltiples <span class="text-primary">Formas</span> de Contacto
          </h2>
          <p class="section-subtitle">
            Elige el método que prefieras para comunicarte con nosotros
          </p>
        </div>

        <div class="row g-4">
          <!-- WhatsApp -->
          <div class="col-lg-4">
            <div class="contact-card whatsapp-card">
              <div class="card-icon">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div class="card-content">
                <h4 class="card-title">WhatsApp</h4>
                <p class="card-description">
                  Nuestro método más rápido. Chatea con nosotros en tiempo real 
                  y recibe atención personalizada.
                </p>
                <div class="card-features">
                  <span class="feature-tag">
                    <i class="fas fa-clock"></i>
                    Respuesta inmediata
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-camera"></i>
                    Envía fotos
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-map-marker-alt"></i>
                    Comparte ubicación
                  </span>
                </div>
                <a 
                  :href="whatsappUrl"
                  target="_blank"
                  class="card-action-btn whatsapp-btn"
                >
                  <i class="fab fa-whatsapp me-2"></i>
                  Chatear Ahora
                </a>
              </div>
            </div>
          </div>

          <!-- Teléfono -->
          <div class="col-lg-4">
            <div class="contact-card phone-card">
              <div class="card-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="card-content">
                <h4 class="card-title">Llamada Telefónica</h4>
                <p class="card-description">
                  Habla directamente con nuestro equipo. Ideal para reservas 
                  o consultas específicas.
                </p>
                <div class="card-features">
                  <span class="feature-tag">
                    <i class="fas fa-user-tie"></i>
                    Atención personal
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-calendar"></i>
                    Reservas inmediatas
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-volume-up"></i>
                    Comunicación directa
                  </span>
                </div>
                <a 
                  href="tel:+573232494876"
                  class="card-action-btn phone-btn"
                >
                  <i class="fas fa-phone me-2"></i>
                  Llamar (323) 249-4876
                </a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="col-lg-4">
            <div class="contact-card email-card">
              <div class="card-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="card-content">
                <h4 class="card-title">Correo Electrónico</h4>
                <p class="card-description">
                  Para consultas detalladas, sugerencias o información 
                  corporativa. Te respondemos en máximo 2 horas.
                </p>
                <div class="card-features">
                  <span class="feature-tag">
                    <i class="fas fa-file-alt"></i>
                    Consultas detalladas
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-building"></i>
                    Atención corporativa
                  </span>
                  <span class="feature-tag">
                    <i class="fas fa-paperclip"></i>
                    Adjuntar archivos
                  </span>
                </div>
                <a 
                  href="mailto:info@antaurus.com"
                  class="card-action-btn email-btn"
                >
                  <i class="fas fa-envelope me-2"></i>
                  Escribir Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulario de Contacto -->
    <section class="contact-form-section py-5 bg-light">
      <div class="container">
        <div class="row g-5 align-items-center">
          <!-- Información del formulario -->
          <div class="col-lg-6">
            <div class="form-info">
              <div class="section-badge">
                <i class="fas fa-paper-plane me-2"></i>
                Formulario de Contacto
              </div>
              
              <h3 class="form-title">
                Envíanos un <span class="text-primary">Mensaje</span>
              </h3>
              
              <p class="form-description">
                Completa el formulario y nos pondremos en contacto contigo. 
                También puedes usarlo para hacer reservas, sugerencias o 
                cualquier consulta que tengas.
              </p>

              <!-- Ventajas del formulario -->
              <div class="form-benefits">
                <div class="benefit-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Respuesta garantizada en 2 horas</span>
                </div>
                <div class="benefit-item">
                  <i class="fas fa-shield-alt"></i>
                  <span>Tus datos están protegidos</span>
                </div>
                <div class="benefit-item">
                  <i class="fas fa-star"></i>
                  <span>Atención personalizada</span>
                </div>
                <div class="benefit-item">
                  <i class="fas fa-clock"></i>
                  <span>Disponible 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulario -->
          <div class="col-lg-6">
            <div class="contact-form-container">
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                  <label for="name" class="form-label">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Tu nombre completo"
                    required
                  />
                  <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    placeholder="tu@email.com"
                    required
                  />
                  <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="form-control"
                    placeholder="(300) 123-4567"
                  />
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">Asunto *</label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    class="form-control"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="reserva">Reserva de Mesa</option>
                    <option value="pedido">Consulta sobre Pedidos</option>
                    <option value="evento">Eventos Especiales</option>
                    <option value="sugerencia">Sugerencias</option>
                    <option value="queja">Quejas o Reclamos</option>
                    <option value="trabajo">Oportunidades de Trabajo</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Mensaje *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                  <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
                  <small class="form-text">{{ form.message.length }}/500 caracteres</small>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="privacy"
                      v-model="form.acceptPrivacy"
                      class="form-check-input"
                      :class="{ 'is-invalid': errors.acceptPrivacy }"
                      required
                    />
                    <label for="privacy" class="form-check-label">
                      Acepto el tratamiento de mis datos personales según la 
                      <a href="#" class="privacy-link">Política de Privacidad</a>
                    </label>
                    <div v-if="errors.acceptPrivacy" class="invalid-feedback">{{ errors.acceptPrivacy }}</div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn-submit"
                  :disabled="isSubmitting"
                >
                  <div class="btn-content">
                    <i class="fas fa-paper-plane btn-icon"></i>
                    <span class="btn-text">
                      {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
                    </span>
                  </div>
                  <div class="btn-loading" v-if="isSubmitting">
                    <div class="loading-spinner"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información Corporativa -->
    <section class="corporate-info py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Información <span class="text-primary">Corporativa</span>
          </h2>
          <p class="section-subtitle">
            Datos importantes para proveedores, aliados y consultas empresariales
          </p>
        </div>

        <div class="row g-4">
          <!-- Información legal -->
          <div class="col-lg-6">
            <div class="corporate-card">
              <h4 class="corporate-title">
                <i class="fas fa-building me-2"></i>
                Información Legal
              </h4>
              <div class="corporate-details">
                <div class="detail-row">
                  <span class="detail-label">Razón Social:</span>
                  <span class="detail-value">Antaurus Restaurant S.A.S.</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">NIT:</span>
                  <span class="detail-value">900.123.456-7</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Registro Mercantil:</span>
                  <span class="detail-value">12345678</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Representante Legal:</span>
                  <span class="detail-value">María García Rodríguez</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Actividad Económica:</span>
                  <span class="detail-value">Restaurantes y servicios de comida</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Datos de contacto corporativo -->
          <div class="col-lg-6">
            <div class="corporate-card">
              <h4 class="corporate-title">
                <i class="fas fa-handshake me-2"></i>
                Contacto Corporativo
              </h4>
              <div class="corporate-details">
                <div class="detail-row">
                  <span class="detail-label">Gerencia General:</span>
                  <span class="detail-value">gerencia@antaurus.com</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Recursos Humanos:</span>
                  <span class="detail-value">rrhh@antaurus.com</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Proveedores:</span>
                  <span class="detail-value">proveedores@antaurus.com</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Marketing:</span>
                  <span class="detail-value">marketing@antaurus.com</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Atención al Cliente:</span>
                  <span class="detail-value">atencion@antaurus.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Redes Sociales -->
    <section class="social-section py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="social-title">Síguenos en Redes Sociales</h3>
            <p class="social-description">
              Mantente al día con nuestras promociones, nuevos productos y 
              eventos especiales. ¡Únete a nuestra comunidad digital!
            </p>
          </div>
          <div class="col-lg-4">
            <div class="social-links">
              <a href="#" class="social-link facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="#" class="social-link instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="#" class="social-link tiktok" title="TikTok">
                <i class="fab fa-tiktok"></i>
                <span>TikTok</span>
              </a>
              <a href="#" class="social-link youtube" title="YouTube">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Rápido -->
    <section class="faq-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            Preguntas <span class="text-primary">Frecuentes</span>
          </h2>
          <p class="section-subtitle">
            Respuestas rápidas a las consultas más comunes
          </p>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="faq-accordion">
              <div 
                v-for="(faq, index) in faqs" 
                :key="faq.id"
                class="faq-item"
              >
                <button
                  @click="toggleFaq(index)"
                  class="faq-question"
                  :class="{ 'active': activeFaq === index }"
                >
                  <span>{{ faq.question }}</span>
                  <i class="fas fa-chevron-down faq-icon"></i>
                </button>
                <div 
                  class="faq-answer"
                  :class="{ 'show': activeFaq === index }"
                >
                  <div class="faq-answer-content">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
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
const isSubmitting = ref(false)
const activeFaq = ref(null)

// Formulario de contacto
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  acceptPrivacy: false
})

const errors = ref({})

// FAQs
const faqs = ref([
  {
    id: 1,
    question: '¿Cuál es el tiempo de entrega a domicilio?',
    answer: 'Nuestro tiempo promedio de entrega es de 30-45 minutos, dependiendo de la zona. Para pedidos en la Zona Rosa y alrededores, el tiempo es de 20-30 minutos.'
  },
  {
    id: 2,
    question: '¿Aceptan reservas? ¿Cómo puedo hacer una?',
    answer: 'Sí, aceptamos reservas. Puedes hacer tu reserva llamando al (300) 123-4567, por WhatsApp o llenando el formulario de contacto. Te recomendamos reservar con anticipación los fines de semana.'
  },
  {
    id: 3,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de crédito y débito (Visa, Mastercard), transferencias bancarias, Nequi, Daviplata y pagos con QR.'
  },
  {
    id: 4,
    question: '¿Tienen opciones vegetarianas o veganas?',
    answer: 'Sí, tenemos hamburguesas vegetarianas y veganas en nuestro menú. También ofrecemos opciones sin gluten. Consulta con nuestro personal sobre ingredientes específicos.'
  },
  {
    id: 5,
    question: '¿Manejan eventos privados o corporativos?',
    answer: 'Sí, organizamos eventos privados y corporativos. Contáctanos con al menos 48 horas de anticipación para coordinar menús especiales y espacios.'
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
  const message = "¡Hola! Me gustaría hacer una consulta sobre Antaurus."
  return `https://wa.me/573001234567?text=${encodeURIComponent(message)}`
})

// Lifecycle hooks
onMounted(() => {
  console.log('📞 Vista de Contacto montada')
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

const validateForm = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = 'El nombre es requerido'
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'El email es requerido'
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'El email no es válido'
  }

  if (!form.value.subject) {
    errors.value.subject = 'Selecciona un asunto'
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'El mensaje es requerido'
  } else if (form.value.message.length > 500) {
    errors.value.message = 'El mensaje no puede exceder 500 caracteres'
  }

  if (!form.value.acceptPrivacy) {
    errors.value.acceptPrivacy = 'Debes aceptar la política de privacidad'
  }

  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Aquí iría la lógica real de envío
    console.log('Formulario enviado:', form.value)

    // Resetear formulario
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      acceptPrivacy: false
    }

    showNotification('¡Mensaje enviado exitosamente! Te responderemos pronto.', 'success')

  } catch (error) {
    console.error('Error enviando formulario:', error)
    showNotification('Error al enviar el mensaje. Intenta de nuevo.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const showNotification = (message, type) => {
  const notification = document.createElement('div')
  notification.className = `notification-toast ${type}`
  notification.innerHTML = `
    <div class="toast-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} toast-icon"></i>
      <span class="toast-message">${message}</span>
    </div>
  `
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#16a34a' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    z-index: 9999;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 300px;
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)
  
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 4000)
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
.contact-hero {
  min-height: 70vh;
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
  background: url('https://images.unsplash.com/photo-1556909114-5ba9ac1cdf64?w=1200&h=800&fit=crop') center/cover;
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

/* Métodos de contacto */
.contact-methods {
  position: relative;
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

.contact-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  text-align: center;
  transition: all var(--transition-normal);
  height: 100%;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.whatsapp-card:hover {
  border-color: #25d366;
}

.whatsapp-card:hover::before {
  background: linear-gradient(135deg, rgba(37, 211, 102, 0.05), rgba(37, 211, 102, 0.1));
  opacity: 1;
}

.phone-card:hover {
  border-color: #4a90e2;
}

.phone-card:hover::before {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.05), rgba(74, 144, 226, 0.1));
  opacity: 1;
}

.email-card:hover {
  border-color: #f59e0b;
}

.email-card:hover::before {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(245, 158, 11, 0.1));
  opacity: 1;
}

.card-icon {
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
  z-index: 2;
}

.whatsapp-card .card-icon {
  background: linear-gradient(135deg, #25d366, #20ba5a);
}

.phone-card .card-icon {
  background: linear-gradient(135deg, #4a90e2, #357abd);
}

.email-card .card-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-title {
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-gray);
  font-size: 1.25rem;
}

.card-description {
  color: var(--medium-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.feature-tag {
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

.card-action-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
  color: var(--white);
}

.whatsapp-btn {
  background: linear-gradient(135deg, #25d366, #20ba5a);
}

.whatsapp-btn:hover {
  background: linear-gradient(135deg, #20ba5a, #1da851);
  color: var(--white);
  transform: translateY(-2px);
}

.phone-btn {
  background: linear-gradient(135deg, #4a90e2, #357abd);
}

.phone-btn:hover {
  background: linear-gradient(135deg, #357abd, #2968a3);
  color: var(--white);
  transform: translateY(-2px);
}

.email-btn {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.email-btn:hover {
  background: linear-gradient(135deg, #d97706, #b45309);
  color: var(--white);
  transform: translateY(-2px);
}

/* Sección del formulario */
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

.form-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
}

.form-description {
  font-size: 1.1rem;
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.form-benefits {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--dark-gray);
}

.benefit-item i {
  color: var(--primary-red);
  font-size: 1.1rem;
}

/* Formulario */
.contact-form-container {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(227, 30, 36, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-control {
  padding: 0.875rem 1rem;
  border: 2px solid rgba(227, 30, 36, 0.2);
  border-radius: var(--border-radius-md);
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  background: var(--white);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 0 0.2rem rgba(227, 30, 36, 0.25);
}

.form-control.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.form-text {
  color: var(--medium-gray);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.form-check {
  display: flex;
  gap: 0.75rem;
}

.form-check-input {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(227, 30, 36, 0.3);
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}

.form-check-input:checked {
  background-color: var(--primary-red);
  border-color: var(--primary-red);
}

.form-check-label {
  font-size: 0.9rem;
  color: var(--dark-gray);
  line-height: 1.4;
}

.privacy-link {
  color: var(--primary-red);
  text-decoration: none;
}

.privacy-link:hover {
  text-decoration: underline;
}

.btn-submit {
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
  border: none;
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-submit:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--primary-red-dark), var(--primary-red));
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-submit:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity var(--transition-fast);
}

.btn-submit:disabled .btn-content {
  opacity: 0;
}

.btn-loading {
  position: absolute;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.btn-submit:disabled .btn-loading {
  opacity: 1;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid var(--white);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Información corporativa */
.corporate-card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(227, 30, 36, 0.1);
  height: 100%;
}

.corporate-title {
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
  display: flex;
  align-items: center;
}

.corporate-title i {
  color: var(--primary-red);
}

.corporate-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(227, 30, 36, 0.1);
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 500;
  color: var(--medium-gray);
  font-size: 0.9rem;
}

.detail-value {
  font-weight: 600;
  color: var(--dark-gray);
  font-size: 0.9rem;
  text-align: right;
}

/* Redes sociales */
.social-section {
  background: linear-gradient(135deg, var(--primary-red), var(--primary-red-dark));
}

.social-title {
  font-weight: 700;
  margin-bottom: 1rem;
}

.social-description {
  opacity: 0.9;
  margin-bottom: 0;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: var(--white);
  text-decoration: none;
  padding: 1rem;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all var(--transition-normal);
  font-weight: 500;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--white);
  transform: translateY(-2px);
}

.social-link i {
  font-size: 1.2rem;
}

/* FAQ */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--white);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(227, 30, 36, 0.1);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--dark-gray);
  transition: all var(--transition-normal);
}

.faq-question:hover {
  background: rgba(227, 30, 36, 0.05);
}

.faq-question.active {
  background: rgba(227, 30, 36, 0.1);
  color: var(--primary-red);
}

.faq-icon {
  transition: transform var(--transition-normal);
}

.faq-question.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
}

.faq-answer.show {
  max-height: 200px;
}

.faq-answer-content {
  padding: 0 1.5rem 1.5rem;
  color: var(--medium-gray);
  line-height: 1.6;
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
  
  .contact-card {
    padding: 2rem 1.5rem;
  }
  
  .card-features {
    justify-content: flex-start;
  }
  
  .contact-form-container {
    padding: 2rem 1.5rem;
  }
  
  .social-links {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
  
  .detail-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .detail-value {
    text-align: left;
  }
}

@media (max-width: 576px) {
  .contact-card {
    padding: 1.5rem 1rem;
  }
  
  .card-features {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-form-container {
    padding: 1.5rem 1rem;
  }
  
  .faq-question {
    padding: 1rem;
  }
  
  .faq-answer-content {
    padding: 0 1rem 1rem;
  }
}
</style>