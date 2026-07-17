document.documentElement.classList.add('js');

const portfolio = {
  capabilities: [
    {
      title: 'Arquitectura modular',
      metric: 'Sistema completo',
      text: 'Organizo sistemas por responsabilidades claras para que cada módulo pueda evolucionar sin romper el resto.',
    },
    {
      title: 'Backend confiable',
      metric: 'Backend-first',
      text: 'Trabajo con sesiones, middleware, transacciones SQL, consultas preparadas, validaciones y APIs REST.',
    },
    {
      title: 'Producto operable',
      metric: 'Flujos reales',
      text: 'Conecto usuarios, roles, información, reportes, inventario y operación diaria dentro de flujos funcionales.',
    },
    {
      title: 'Interfaces sobrias',
      metric: 'UX práctica',
      text: 'Diseño interfaces Full Stack funcionales, claras y rápidas, priorizando legibilidad sobre decoración.',
    },
  ],
  projects: [
    {
      id: 'profitnessgym',
      featured: true,
      name: 'ProFitnessGym',
      label: 'Featured Case Study',
      type: 'Sistema administrativo web completo para gimnasios',
      year: '2026',
      status: 'Construido desde cero',
      description: 'Plataforma administrativa completa para gestionar clientes, membresías, inventario, ventas, visitantes, reportes, transferencias, portal del cliente y APIs REST.',
      impact: [
        'Centraliza operación administrativa en un solo sistema.',
        'Reduce trabajo manual con flujos conectados entre ventas, inventario y membresías.',
        'Base de datos relacional diseñada desde cero para consistencia y escalabilidad.',
      ],
      modules: ['Autenticación', 'Roles', 'Dashboard', 'Clientes', 'Membresías', 'Inventario', 'Productos', 'Ventas', 'Visitantes', 'Reportes', 'Transferencias', 'Portal del cliente', 'APIs REST'],
      stack: ['PHP', 'MySQL', 'JavaScript ES6', 'Fetch API', 'SQL Transactions', 'Gestión de archivos'],
      architecture: [
        'Separación de módulos por dominio operativo.',
        'Validaciones frontend y backend para proteger consistencia de datos.',
        'Transacciones SQL en operaciones críticas de ventas e inventario.',
        'Consultas preparadas y control de sesiones para seguridad básica.',
        'Base preparada para agregar documentación, capturas, videos y diagramas.',
      ],
      challenges: [
        { title: 'Consistencia entre ventas e inventario', text: 'El reto no era solo registrar ventas, sino mantener stock, historial y reportes confiables en cada operación.' },
        { title: 'Escalar módulos sin desorden', text: 'El sistema debía crecer de clientes a membresías, productos, reportes y portal sin convertirse en una colección de archivos inconexos.' },
        { title: 'Experiencia administrativa clara', text: 'La interfaz prioriza tareas frecuentes, lectura rápida y acciones directas para usuarios no técnicos.' },
      ],
      media: [
        { title: 'Dashboard operativo', src: 'assets/images/projects/profitnessgym/dashboard.svg', alt: 'Dashboard administrativo de ProFitnessGym', kind: 'primary', width: 1120, height: 700 },
        { title: 'Arquitectura modular', src: 'assets/images/projects/profitnessgym/architecture.svg', alt: 'Diagrama visual de módulos y arquitectura de ProFitnessGym', width: 1120, height: 700 },
      ],
    },
    {
      id: 'ecommerce-zihua',
      featured: false,
      name: 'E-Commerce Zihua',
      label: 'Experiencia profesional · NDA',
      type: 'Módulos en plataforma e-commerce',
      year: '2026',
      status: 'Contenido limitado por confidencialidad',
      description: 'Proyecto desarrollado durante mis estadías profesionales. Contribuí en módulos específicos dentro de una plataforma e-commerce con Laravel 11, APIs REST, JavaScript y MySQL; algunos detalles están limitados por acuerdo de confidencialidad.',
      stack: ['Laravel 11', 'Sanctum', 'APIs REST', 'MVC', 'Middleware', 'Eloquent', 'JavaScript', 'MySQL'],
    },
  ],
  techGroups: [
    { name: 'Backend', emphasis: 'Fortaleza principal', items: ['PHP 8', 'Laravel', 'MySQLi', 'APIs REST', 'Laravel Sanctum', 'Eloquent ORM', 'Sesiones', 'Middleware', 'Prepared Statements', 'Transacciones SQL'] },
    { name: 'Frontend', emphasis: 'Interfaces Full Stack', items: ['HTML5', 'CSS3', 'JavaScript ES6', 'Fetch API', 'AJAX', 'Bootstrap', 'Vite'] },
    { name: 'Base de datos', emphasis: 'Modelado relacional', items: ['MySQL', 'Diseño relacional', 'Foreign Keys', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'Normalización'] },
    { name: 'Herramientas', emphasis: 'Flujo profesional', items: ['Git', 'GitHub', 'VS Code'] },
  ],
  processSteps: [
    { title: 'Entender el dominio', text: 'Primero defino usuarios, reglas de negocio, datos críticos y operaciones que no pueden fallar.' },
    { title: 'Diseñar la base', text: 'Modelo entidades, relaciones y restricciones antes de construir pantallas para evitar deuda estructural.' },
    { title: 'Construir por módulos', text: 'Cada módulo entrega valor propio, pero se integra al sistema completo mediante flujos consistentes.' },
    { title: 'Cuidar la operación', text: 'Valido datos, manejo errores, protejo sesiones y diseño interfaces que reducen fricción diaria.' },
  ],
};

const createTags = (items, strong = false) => `
  <div class="tag-cloud${strong ? ' tag-cloud-strong' : ''}">
    ${items.map((item) => `<span>${item}</span>`).join('')}
  </div>
`;

const createList = (items) => `
  <ul class="clean-list">
    ${items.map((item) => `<li>${item}</li>`).join('')}
  </ul>
`;

function renderCapabilities() {
  document.querySelector('#capabilities').innerHTML = portfolio.capabilities
    .map((item) => `
      <article class="capability-card glass-card" data-reveal>
        <span>${item.metric}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join('');
}

function renderFeaturedProject() {
  const project = portfolio.projects.find((item) => item.featured);
  const [primaryMedia, ...secondaryMedia] = project.media;
  document.querySelector('#featured-project').innerHTML = `
    <article class="featured-project glass-card" data-reveal>
      <div class="project-copy">
        <div class="project-meta">
          <span>${project.label}</span><span>${project.year}</span><span>${project.status}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="project-type">${project.type}</p>
        <p>${project.description}</p>
        <div class="project-section"><h4>Resultado operativo</h4>${createList(project.impact)}</div>
        <div class="project-section"><h4>Módulos construidos</h4>${createTags(project.modules)}</div>
      </div>
      <div class="project-showcase">
        <figure class="showcase-frame showcase-frame-primary">
          <img src="${primaryMedia.src}" alt="${primaryMedia.alt}" width="${primaryMedia.width}" height="${primaryMedia.height}" decoding="async" loading="lazy" />
          <figcaption>${primaryMedia.title}</figcaption>
        </figure>
        <div class="showcase-thumbnails">
          ${secondaryMedia.map((media) => `
          <figure class="showcase-frame showcase-frame-small">
            <img src="${media.src}" alt="${media.alt}" width="${media.width}" height="${media.height}" decoding="async" loading="lazy" />
            <figcaption>${media.title}</figcaption>
          </figure>
        `).join('')}
        </div>
      </div>
      <div class="project-deep-dive">
        <div><h4>Arquitectura</h4>${createList(project.architecture)}</div>
        <div>
          <h4>Desafíos técnicos</h4>
          <div class="challenge-stack">
            ${project.challenges.map((challenge) => `<article><h5>${challenge.title}</h5><p>${challenge.text}</p></article>`).join('')}
          </div>
        </div>
        <div><h4>Tecnologías</h4>${createTags(project.stack, true)}</div>
      </div>
    </article>
  `;
}

function renderProjects() {
  const secondaryProjects = portfolio.projects.filter((item) => !item.featured);
  document.querySelector('#project-grid').innerHTML = `
    ${secondaryProjects.map((project) => `
      <article class="project-card glass-card" data-reveal>
        <div class="project-meta"><span>${project.label}</span><span>${project.year}</span><span>${project.status}</span></div>
        <h3>${project.name}</h3>
        <p class="project-type">${project.type}</p>
        <p>${project.description}</p>
        ${createTags(project.stack)}
      </article>
    `).join('')}
    <aside class="project-card project-card-empty" data-reveal>
      <span>Portafolio en crecimiento</span>
      <h3>Más casos se integrarán aquí.</h3>
      <p>El sistema ya está preparado para sumar proyectos con capturas, arquitectura y documentación cuando existan materiales reales.</p>
    </aside>
  `;
}

function renderTechStack() {
  document.querySelector('#tech-stack').innerHTML = portfolio.techGroups
    .map((group) => `
      <article class="tech-card glass-card" data-reveal>
        <div><span>${group.emphasis}</span><h3>${group.name}</h3></div>
        ${createTags(group.items)}
      </article>
    `)
    .join('');
}

function renderProcess() {
  document.querySelector('#process-list').innerHTML = portfolio.processSteps
    .map((step, index) => `
      <article class="process-item" data-reveal>
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div><h3>${step.title}</h3><p>${step.text}</p></div>
      </article>
    `)
    .join('');
}

function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const elements = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  elements.forEach((element) => observer.observe(element));
}

function initImageFallbacks() {
  document.querySelectorAll('.showcase-frame img').forEach((image) => {
    image.addEventListener('error', () => {
      const frame = image.closest('.showcase-frame');
      if (frame) frame.classList.add('media-unavailable');
      image.removeAttribute('src');
    }, { once: true });
  });
}

function initMobileMenu() {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menú de navegación');
    menu.hidden = true;
  };

  const openMenu = () => {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Cerrar menú de navegación');
    menu.hidden = false;
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

renderCapabilities();
renderFeaturedProject();
renderProjects();
renderTechStack();
renderProcess();
initImageFallbacks();
initMobileMenu();
initHeaderScroll();
initReveal();
