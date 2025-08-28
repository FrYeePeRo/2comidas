import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Location from '../views/Location.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      title: 'Antaurus - Las Mejores Hamburguesas Gourmet',
      description: 'Las mejores hamburguesas gourmet de Bogotá. Sabores únicos con ingredientes frescos y calidad premium.'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: { 
      title: 'Antaurus - Menú Gourmet',
      description: 'Explora nuestro menú completo de hamburguesas gourmet, acompañamientos, bebidas y postres.'
    }
  },
  {
    path: '/ubicacion',
    name: 'Location',
    component: Location,
    meta: { 
      title: 'Antaurus - Ubicación y Cómo Llegar',
      description: 'Encuentra nuestro restaurante en la Zona Rosa de Bogotá. Información de ubicación, horarios y cómo llegar.'
    }
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact,
    meta: { 
      title: 'Antaurus - Contacto y Reservas',
      description: 'Contáctanos para reservas, consultas o sugerencias. Múltiples canales de atención disponibles.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (botón atrás del navegador)
    if (savedPosition) {
      return savedPosition
    } 
    // Si hay un hash, ir a ese elemento
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset para el header fijo
      }
    } 
    // Por defecto, ir al top
    else {
      return { 
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  console.log(`🚀 Navegando de ${from.name || 'unknown'} a ${to.name}`)
  
  // Mostrar indicador de carga para navegación lenta
  if (typeof window !== 'undefined') {
    document.body.classList.add('page-loading')
  }
  
  // Actualizar título de la página
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Actualizar meta description
  updateMetaDescription(to.meta.description)
  
  // Actualizar meta canonical
  updateCanonicalUrl(to.fullPath)
  
  next()
})

router.afterEach((to, from, failure) => {
  // Remover indicador de carga
  if (typeof window !== 'undefined') {
    document.body.classList.remove('page-loading')
  }
  
  console.log(`✅ Navegación completada a ${to.name}`)
  
  // Enviar evento de página vista a analytics (si está configurado)
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: to.meta.title,
      page_location: window.location.href,
      page_path: to.path
    })
  }
  
  // Log para debugging
  if (failure) {
    console.warn('⚠️ Error en navegación:', failure)
  }
})

// Utility functions
function updateMetaDescription(description) {
  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = description
      document.getElementsByTagName('head')[0].appendChild(metaDescription)
    }
  }
}

function updateCanonicalUrl(path) {
  const baseUrl = window.location.origin
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `${baseUrl}${path}`)
  } else {
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = `${baseUrl}${path}`
    document.getElementsByTagName('head')[0].appendChild(canonicalLink)
  }
}

// Función para navegar programáticamente con analytics
export function navigateWithAnalytics(routeName, params = {}, query = {}) {
  // Enviar evento antes de navegar
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_navigation', {
      event_category: 'navigation',
      event_label: routeName,
      custom_map: {
        route_name: routeName
      }
    })
  }
  
  return router.push({ name: routeName, params, query })
}

// Función para scroll suave a elemento
export function scrollToElement(elementId, offset = 80) {
  nextTick(() => {
    const element = document.getElementById(elementId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  })
}

export default router