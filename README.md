# 🍔 Antaurus Restaurant - Aplicación Web

Una moderna aplicación web para restaurante de hamburguesas gourmet construida con Vue.js 3 y Vite.

## ✨ Características

- **Interfaz moderna y responsiva** con Tailwind CSS
- **Carrito de compras funcional** con sidebar deslizante
- **Navegación por categorías** de productos
- **Gestión de estado reactivo** con Vue 3 Composition API
- **Componentes reutilizables** y modulares
- **Optimización de imágenes** con lazy loading
- **Animaciones suaves** y transiciones
- **Diseño mobile-first**

## 🚀 Tecnologías

- **Vue.js 3** - Framework frontend progresivo
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome** - Iconos vectoriales
- **JavaScript ES6+** - Lenguaje de programación

## 📁 Estructura del Proyecto

```
comidas/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CategoryCard.vue
│   │   ├── ProductCard.vue
│   │   └── CartSidebar.vue
│   ├── assets/
│   │   └── vue.svg
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona o descarga el proyecto**
```bash
git clone <tu-repositorio>
cd comidas
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Construye para producción**
```bash
npm run build
```

5. **Previsualiza la build de producción**
```bash
npm run preview
```

## 🎯 Funcionalidades

### 🍔 Menú de Productos
- Navegación por categorías (Hamburguesas, Acompañamientos, Bebidas, etc.)
- Vista detallada de productos con precios y descripciones
- Calificaciones y tiempo de preparación

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Modificar cantidades
- Calcular total automáticamente
- Sidebar deslizante con animaciones

### 📱 Diseño Responsivo
- Optimizado para móviles, tablets y desktop
- Navegación adaptativa
- Imágenes responsivas con lazy loading

### 🎨 Interfaz de Usuario
- Diseño moderno con gradientes y sombras
- Animaciones suaves en hover y click
- Loading states y manejo de errores
- Temas de color consistentes

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción  
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
```

## 📝 Personalización

### Colores y Temas
Los colores principales están definidos en `src/style.css` y pueden modificarse:
- Rojo principal: `#dc2626` (red-600)
- Amarillo de acento: `#facc15` (yellow-400)
- Grises: `#374151`, `#6b7280`, `#9ca3af`

### Productos y Categorías
Los datos se encuentran en `src/App.vue` en las variables `categories` y `products`. Puedes:
- Agregar nuevas categorías con iconos emoji
- Añadir productos con imágenes, precios y descripciones
- Modificar las características de productos existentes

### Estilos
El proyecto usa Tailwind CSS vía CDN. Para personalizar:
- Modifica las clases en los componentes Vue
- Agrega CSS personalizado en `src/style.css`
- Cambia la configuración de Tailwind si usas una build local

## 🚨 Solución de Problemas

### Imágenes no cargan
- Verifica las URLs de las imágenes en los datos de productos
- El proyecto incluye fallback para imágenes rotas

### Estilos no se aplican
- Asegúrate de que Tailwind CSS se está cargando desde el CDN
- Verifica que no hay conflictos en `src/style.css`

### Errores de compilación
- Ejecuta `npm install` para instalar dependencias
- Verifica que tienes Node.js 16+ instalado
- Limpia caché con `npm run build -- --force`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para Antaurus Restaurant

---

¡Disfruta construyendo tu aplicación de restaurante! 🍔✨