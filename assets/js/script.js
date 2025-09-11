'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);


/**
 * contact form success message via query param
 */

(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === '1') {
    const el = document.querySelector('.contact-form .form-success');
    if (el) el.hidden = false;
  }
})();


/**
 * i18n: load translations, detect language, apply, and handle switchers
 */

(function () {
  const I18N_URL = './assets/i18n/translations.json';
  const LS_KEY = 'site_lang';

  // Fallback translations used if fetching JSON fails (e.g., file://)
  const I18N_FALLBACK = {
    "en": {
      "meta.title": "KiwoLabs",
      "meta.description": "Modern web development agency building fast, accessible websites and scalable web apps.",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact Us",
      "hero.title": "Modern <span class=\"span\">web</span> development agency",
      "hero.text": "We design and build fast, accessible websites and web apps that scale — from landing pages to complex platforms.",
      "hero.cta": "Get Started",
      "services.title": "Our web development <span class=\"span\">services</span>.",
      "services.text": "From concept to launch, we design, develop, and optimize modern websites and applications.",
      "services.card1.title": "Website Development",
      "services.card1.text": "Responsive, accessible websites built with modern, reliable stacks.",
      "services.card2.title": "Mobile Development",
      "services.card2.text": "Need an app on App Store or Play Store? We’ve got you.",
      "services.card3.title": "Frontend Engineering",
      "services.card3.text": "Pixel‑perfect UI, performance, and accessibility.",
      "services.card4.title": "E‑commerce & CMS",
      "services.card4.text": "Shopify, WordPress, and headless solutions that are easy to manage.",
      "about.title": "We build on modern <span class=\"span\">web tech</span>.",
      "about.text": "Our stack is crafted for speed, accessibility, and scale. We specialize in Shopify storefronts, WordPress & headless CMS, and modern app frameworks.",
      "about.more": "More About Us",
      "tech.shopify": "Shopify",
      "tech.wordpress": "WordPress",
      "tech.headless": "Headless CMS",
      "tech.nextjs": "Next.js",
      "tech.react": "React",
      "tech.node": "Node.js",
      "tech.ts": "TypeScript",
      "tech.tailwind": "Tailwind CSS",
      "tech.rest": "REST",
      "tech.graphql": "GraphQL",
      "team.title": "Who we are",
      "team.senior_dev": "Senior Developer",
      "team.designer": "Designer",
      "team.marketer": "Marketing Specialist",
      "roles.fullstack": "Full‑stack",
      "roles.frontend": "Frontend",
      "roles.uiux": "UI/UX",
      "roles.growth": "Growth",
      "team.summary": "Our team: 2 senior developers, 1 designer, 1 marketing specialist.",
      "projects.title": "Our recent <span class=\"span\">projects</span>.",
      "projects.text": "A few launches across Shopify, WordPress, headless CMS, and modern web apps — built for speed, accessibility, and scale.",
      "projects.c1.title": "Shopify Storefront for UrbanThreads",
      "projects.c1.tag": "E‑commerce, Shopify",
      "projects.c2.title": "B2B Dashboard (Next.js + Node)",
      "projects.c2.tag": "Web App, Next.js",
      "projects.c3.title": "Headless CMS Marketing Site",
      "projects.c3.tag": "Headless, CMS",
      "projects.c4.title": "SaaS Marketing Website Redesign",
      "projects.c4.tag": "Frontend, Performance",
      "projects.c5.title": "WordPress → Headless Migration",
      "projects.c5.tag": "WordPress, API",
      "contact.title": "Get in <span class=\"span\">touch</span>.",
      "contact.text": "We'd love to hear from you.",
      "form.name": "Name",
      "form.name_placeholder": "Your name",
      "form.email": "Email",
      "form.email_placeholder": "you@example.com",
      "form.subject": "Subject",
      "form.subject_placeholder": "How can we help?",
      "form.message": "Message",
      "form.message_placeholder": "Write your message",
      "form.submit": "Send Message",
      "form.success": "Thanks — your message was sent. We'll get back to you soon.",
      "footer.language": "Language",
      "footer.links": "Links",
      "footer.legal": "Legal",
      "legal.privacy": "Privacy Policy",
      "legal.terms": "Terms of Service",
      "legal.cookies": "Cookie Policy",
      "cookie.text": "We use cookies to improve your experience. Do you accept?",
      "cookie.accept": "Accept",
      "cookie.decline": "Decline",
      "cookie.accept_all": "Accept all",
      "cookie.reject_all": "Reject all",
      "cookie.manage": "Manage preferences",
      "cookie.save": "Save preferences",
      "cookie.detail": "Choose which cookies to accept. Necessary cookies are always on.",
      "cookie.necessary": "Necessary",
      "cookie.necessary_desc": "Required for core site functionality.",
      "cookie.analytics": "Analytics",
      "cookie.analytics_desc": "Helps us understand site usage.",
      "cookie.marketing": "Marketing",
      "cookie.marketing_desc": "Used for personalization and ads."
    },
    "de": {
      "meta.title": "KiwoLabs",
      "meta.description": "Moderne Webentwicklungsagentur für schnelle, barrierefreie Websites und skalierbare Web-Apps.",
      "nav.home": "Startseite",
      "nav.services": "Leistungen",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "hero.title": "Moderne <span class=\"span\">Web</span>-Entwicklungsagentur",
      "hero.text": "Wir entwerfen und entwickeln schnelle, barrierefreie Websites und Web‑Apps – von Landingpages bis zu komplexen Plattformen.",
      "hero.cta": "Jetzt starten",
      "services.title": "Unsere <span class=\"span\">Leistungen</span> in der Webentwicklung.",
      "services.text": "Von der Idee bis zum Launch: Wir entwerfen, entwickeln und optimieren moderne Websites und Anwendungen.",
      "services.card1.title": "Website-Entwicklung",
      "services.card1.text": "Responsiv und zugänglich, gebaut mit modernen, zuverlässigen Stacks.",
      "services.card2.title": "Mobile Entwicklung",
      "services.card2.text": "Eine App für App Store oder Play Store? Wir kümmern uns darum.",
      "services.card3.title": "Frontend Engineering",
      "services.card3.text": "Pixelgenaue UI, Performance und Barrierefreiheit.",
      "services.card4.title": "E‑Commerce & CMS",
      "services.card4.text": "Shopify, WordPress und Headless‑Lösungen, die leicht zu pflegen sind.",
      "about.title": "Wir bauen auf moderner <span class=\"span\">Web-Technologie</span> auf.",
      "about.text": "Unser Stack ist auf Geschwindigkeit, Barrierefreiheit und Skalierung ausgelegt. Shopify‑Shops, WordPress & Headless CMS sowie moderne Frameworks.",
      "about.more": "Mehr über uns",
      "tech.shopify": "Shopify",
      "tech.wordpress": "WordPress",
      "tech.headless": "Headless CMS",
      "tech.nextjs": "Next.js",
      "tech.react": "React",
      "tech.node": "Node.js",
      "tech.ts": "TypeScript",
      "tech.tailwind": "Tailwind CSS",
      "tech.rest": "REST",
      "tech.graphql": "GraphQL",
      "team.title": "Wer wir sind",
      "team.senior_dev": "Senior Entwickler",
      "team.designer": "Designerin",
      "team.marketer": "Marketing‑Spezialist",
      "roles.fullstack": "Full‑Stack",
      "roles.frontend": "Frontend",
      "roles.uiux": "UI/UX",
      "roles.growth": "Growth",
      "team.summary": "Unser Team: 2 Senior‑Entwickler, 1 Designerin, 1 Marketing‑Spezialist.",
      "projects.title": "Unsere aktuellen <span class=\"span\">Projekte</span>.",
      "projects.text": "Einige Launches auf Shopify, WordPress, Headless CMS und modernen Web‑Apps – schnell, zugänglich und skalierbar.",
      "projects.c1.title": "Shopify Storefront für UrbanThreads",
      "projects.c1.tag": "E‑Commerce, Shopify",
      "projects.c2.title": "B2B‑Dashboard (Next.js + Node)",
      "projects.c2.tag": "Web‑App, Next.js",
      "projects.c3.title": "Headless CMS Marketing‑Website",
      "projects.c3.tag": "Headless, CMS",
      "projects.c4.title": "SaaS Marketing‑Website Redesign",
      "projects.c4.tag": "Frontend, Performance",
      "projects.c5.title": "WordPress → Headless Migration",
      "projects.c5.tag": "WordPress, API",
      "contact.title": "Nehmen Sie <span class=\"span\">Kontakt</span> auf.",
      "contact.text": "Wir freuen uns auf Ihre Nachricht.",
      "form.name": "Name",
      "form.name_placeholder": "Ihr Name",
      "form.email": "E‑Mail",
      "form.email_placeholder": "sie@beispiel.de",
      "form.subject": "Betreff",
      "form.subject_placeholder": "Wobei können wir helfen?",
      "form.message": "Nachricht",
      "form.message_placeholder": "Ihre Nachricht",
      "form.submit": "Nachricht senden",
      "form.success": "Danke – Ihre Nachricht wurde gesendet. Wir melden uns bald.",
      "footer.language": "Sprache",
      "footer.links": "Links",
      "footer.legal": "Rechtliches",
      "legal.privacy": "Datenschutzerklärung",
      "legal.terms": "Nutzungsbedingungen",
      "legal.cookies": "Cookie‑Richtlinie",
      "cookie.text": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Akzeptieren Sie?",
      "cookie.accept": "Akzeptieren",
      "cookie.decline": "Ablehnen",
      "cookie.accept_all": "Alle akzeptieren",
      "cookie.reject_all": "Alle ablehnen",
      "cookie.manage": "Einstellungen verwalten",
      "cookie.save": "Einstellungen speichern",
      "cookie.detail": "Wählen Sie, welche Cookies Sie akzeptieren. Notwendige Cookies sind immer aktiv.",
      "cookie.necessary": "Notwendig",
      "cookie.necessary_desc": "Erforderlich für die grundlegende Funktionalität.",
      "cookie.analytics": "Analyse",
      "cookie.analytics_desc": "Hilft uns, die Nutzung zu verstehen.",
      "cookie.marketing": "Marketing",
      "cookie.marketing_desc": "Für Personalisierung und Werbung."
    },
    "nl": {
      "meta.title": "KiwoLabs",
      "meta.description": "Modern webbureau voor snelle, toegankelijke websites en schaalbare webapps.",
      "nav.home": "Home",
      "nav.services": "Diensten",
      "nav.about": "Over ons",
      "nav.contact": "Contact",
      "hero.title": "Modern <span class=\"span\">web</span>ontwikkelingsbureau",
      "hero.text": "Wij ontwerpen en bouwen snelle, toegankelijke websites en webapps — van landingspagina’s tot complexe platforms.",
      "hero.cta": "Aan de slag",
      "services.title": "Onze <span class=\"span\">diensten</span> in webontwikkeling.",
      "services.text": "Van concept tot lancering — wij ontwerpen, ontwikkelen en optimaliseren moderne websites en apps.",
      "services.card1.title": "Websiteontwikkeling",
      "services.card1.text": "Responsieve, toegankelijke sites met moderne, betrouwbare stacks.",
      "services.card2.title": "Mobiele ontwikkeling",
      "services.card2.text": "Een app in de App Store of Play Store? Wij regelen het.",
      "services.card3.title": "Frontend engineering",
      "services.card3.text": "Pixel‑perfect UI, performance en toegankelijkheid.",
      "services.card4.title": "E‑commerce & CMS",
      "services.card4.text": "Shopify, WordPress en headless oplossingen die eenvoudig te beheren zijn.",
      "about.title": "Wij bouwen op moderne <span class=\"span\">webtech</span>.",
      "about.text": "Onze stack is gericht op snelheid, toegankelijkheid en schaalbaarheid. Shopify‑shops, WordPress & headless CMS en moderne frameworks.",
      "about.more": "Meer over ons",
      "tech.shopify": "Shopify",
      "tech.wordpress": "WordPress",
      "tech.headless": "Headless CMS",
      "tech.nextjs": "Next.js",
      "tech.react": "React",
      "tech.node": "Node.js",
      "tech.ts": "TypeScript",
      "tech.tailwind": "Tailwind CSS",
      "tech.rest": "REST",
      "tech.graphql": "GraphQL",
      "team.title": "Wie wij zijn",
      "team.senior_dev": "Senior ontwikkelaar",
      "team.designer": "Designer",
      "team.marketer": "Marketing specialist",
      "roles.fullstack": "Full‑stack",
      "roles.frontend": "Frontend",
      "roles.uiux": "UI/UX",
      "roles.growth": "Groei",
      "team.summary": "Ons team: 2 senior ontwikkelaars, 1 designer, 1 marketing specialist.",
      "projects.title": "Onze recente <span class=\"span\">projecten</span>.",
      "projects.text": "Lanceringen op Shopify, WordPress, headless CMS en moderne webapps — snel, toegankelijk en schaalbaar.",
      "projects.c1.title": "Shopify Storefront voor UrbanThreads",
      "projects.c1.tag": "E‑commerce, Shopify",
      "projects.c2.title": "B2B‑dashboard (Next.js + Node)",
      "projects.c2.tag": "Webapp, Next.js",
      "projects.c3.title": "Headless CMS marketing site",
      "projects.c3.tag": "Headless, CMS",
      "projects.c4.title": "SaaS marketingwebsite redesign",
      "projects.c4.tag": "Frontend, Performance",
      "projects.c5.title": "WordPress → Headless migratie",
      "projects.c5.tag": "WordPress, API",
      "contact.title": "Neem <span class=\"span\">contact</span> op.",
      "contact.text": "We horen graag van je.",
      "form.name": "Naam",
      "form.name_placeholder": "Je naam",
      "form.email": "E‑mail",
      "form.email_placeholder": "jij@voorbeeld.nl",
      "form.subject": "Onderwerp",
      "form.subject_placeholder": "Waarmee kunnen we helpen?",
      "form.message": "Bericht",
      "form.message_placeholder": "Schrijf je bericht",
      "form.submit": "Verstuur bericht",
      "form.success": "Bedankt — je bericht is verzonden. We reageren snel.",
      "footer.language": "Taal",
      "footer.links": "Links",
      "footer.legal": "Juridisch",
      "legal.privacy": "Privacybeleid",
      "legal.terms": "Gebruiksvoorwaarden",
      "legal.cookies": "Cookiebeleid",
      "cookie.text": "We gebruiken cookies om je ervaring te verbeteren. Accepteer je?",
      "cookie.accept": "Accepteren",
      "cookie.decline": "Weigeren",
      "cookie.accept_all": "Alles accepteren",
      "cookie.reject_all": "Alles weigeren",
      "cookie.manage": "Voorkeuren beheren",
      "cookie.save": "Voorkeuren opslaan",
      "cookie.detail": "Kies welke cookies je accepteert. Noodzakelijke cookies staan altijd aan.",
      "cookie.necessary": "Noodzakelijk",
      "cookie.necessary_desc": "Vereist voor basisfunctionaliteit.",
      "cookie.analytics": "Analyse",
      "cookie.analytics_desc": "Helpt ons het gebruik te begrijpen.",
      "cookie.marketing": "Marketing",
      "cookie.marketing_desc": "Gebruikt voor personalisatie en advertenties."
    },
    "es": {
      "meta.title": "KiwoLabs",
      "meta.description": "Agencia moderna que crea sitios y aplicaciones web rápidas, accesibles y escalables.",
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.about": "Nosotros",
      "nav.contact": "Contacto",
      "hero.title": "Agencia moderna de <span class=\"span\">desarrollo web</span>",
      "hero.text": "Diseñamos y desarrollamos sitios y apps web rápidos y accesibles — desde landing pages hasta plataformas complejas.",
      "hero.cta": "Empezar",
      "services.title": "Nuestros <span class=\"span\">servicios</span> de desarrollo web.",
      "services.text": "De la idea al lanzamiento: diseñamos, desarrollamos y optimizamos sitios y aplicaciones modernas.",
      "services.card1.title": "Desarrollo de sitios web",
      "services.card1.text": "Sitios responsivos y accesibles con stacks modernos y confiables.",
      "services.card2.title": "Desarrollo móvil",
      "services.card2.text": "¿Necesitas una app en App Store o Play Store? Nosotros nos encargamos.",
      "services.card3.title": "Ingeniería Frontend",
      "services.card3.text": "UI perfecta al píxel, rendimiento y accesibilidad.",
      "services.card4.title": "E‑commerce y CMS",
      "services.card4.text": "Shopify, WordPress y soluciones headless fáciles de gestionar.",
      "about.title": "Construimos con <span class=\"span\">tecnología web</span> moderna.",
      "about.text": "Nuestro stack prioriza velocidad, accesibilidad y escalabilidad. Tiendas Shopify, WordPress y CMS headless, y frameworks modernos.",
      "about.more": "Saber más",
      "tech.shopify": "Shopify",
      "tech.wordpress": "WordPress",
      "tech.headless": "Headless CMS",
      "tech.nextjs": "Next.js",
      "tech.react": "React",
      "tech.node": "Node.js",
      "tech.ts": "TypeScript",
      "tech.tailwind": "Tailwind CSS",
      "tech.rest": "REST",
      "tech.graphql": "GraphQL",
      "team.title": "Quiénes somos",
      "team.senior_dev": "Desarrollador senior",
      "team.designer": "Diseñadora",
      "team.marketer": "Especialista en marketing",
      "roles.fullstack": "Full‑stack",
      "roles.frontend": "Frontend",
      "roles.uiux": "UI/UX",
      "roles.growth": "Crecimiento",
      "team.summary": "Nuestro equipo: 2 desarrolladores senior, 1 diseñadora y 1 especialista en marketing.",
      "projects.title": "Nuestros <span class=\"span\">proyectos</span> recientes.",
      "projects.text": "Lanzamientos en Shopify, WordPress, CMS headless y apps web modernas — velocidad, accesibilidad y escala.",
      "projects.c1.title": "Tienda Shopify para UrbanThreads",
      "projects.c1.tag": "E‑commerce, Shopify",
      "projects.c2.title": "Panel B2B (Next.js + Node)",
      "projects.c2.tag": "Web App, Next.js",
      "projects.c3.title": "Sitio de marketing con Headless CMS",
      "projects.c3.tag": "Headless, CMS",
      "projects.c4.title": "Rediseño de web de marketing SaaS",
      "projects.c4.tag": "Frontend, Rendimiento",
      "projects.c5.title": "Migración de WordPress a Headless",
      "projects.c5.tag": "WordPress, API",
      "contact.title": "Ponte en <span class=\"span\">contacto</span>.",
      "contact.text": "Nos encantaría saber de ti.",
      "form.name": "Nombre",
      "form.name_placeholder": "Tu nombre",
      "form.email": "Correo",
      "form.email_placeholder": "tu@ejemplo.com",
      "form.subject": "Asunto",
      "form.subject_placeholder": "¿Cómo podemos ayudar?",
      "form.message": "Mensaje",
      "form.message_placeholder": "Escribe tu mensaje",
      "form.submit": "Enviar mensaje",
      "form.success": "Gracias — tu mensaje fue enviado. Te responderemos pronto.",
      "footer.language": "Idioma",
      "footer.links": "Enlaces",
      "footer.legal": "Legal",
      "legal.privacy": "Política de privacidad",
      "legal.terms": "Términos del servicio",
      "legal.cookies": "Política de cookies",
      "cookie.text": "Usamos cookies para mejorar tu experiencia. ¿Aceptas?",
      "cookie.accept": "Aceptar",
      "cookie.decline": "Rechazar",
      "cookie.accept_all": "Aceptar todo",
      "cookie.reject_all": "Rechazar todo",
      "cookie.manage": "Gestionar preferencias",
      "cookie.save": "Guardar preferencias",
      "cookie.detail": "Elige qué cookies aceptar. Las necesarias siempre están activas.",
      "cookie.necessary": "Necesarias",
      "cookie.necessary_desc": "Requeridas para la funcionalidad básica.",
      "cookie.analytics": "Analíticas",
      "cookie.analytics_desc": "Nos ayuda a entender el uso del sitio.",
      "cookie.marketing": "Marketing",
      "cookie.marketing_desc": "Para personalización y anuncios."
    },
    "fr": {
      "meta.title": "KiwoLabs",
      "meta.description": "Agence moderne qui crée des sites et applications web rapides, accessibles et évolutifs.",
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "hero.title": "Agence moderne de <span class=\"span\">développement web</span>",
      "hero.text": "Nous concevons et développons des sites et apps web rapides et accessibles — des landing pages aux plateformes complexes.",
      "hero.cta": "Commencer",
      "services.title": "Nos <span class=\"span\">services</span> en développement web.",
      "services.text": "De l’idée au lancement, nous concevons, développons et optimisons des sites et applications modernes.",
      "services.card1.title": "Développement de sites",
      "services.card1.text": "Sites responsives et accessibles, bâtis avec des stacks modernes et fiables.",
      "services.card2.title": "Développement mobile",
      "services.card2.text": "Besoin d’une app sur l’App Store ou le Play Store ? On s’en occupe.",
      "services.card3.title": "Ingénierie Frontend",
      "services.card3.text": "UI au pixel près, performance et accessibilité.",
      "services.card4.title": "E‑commerce & CMS",
      "services.card4.text": "Shopify, WordPress et solutions headless faciles à gérer.",
      "about.title": "Nous construisons sur des <span class=\"span\">technos web</span> modernes.",
      "about.text": "Notre stack privilégie la vitesse, l’accessibilité et l’évolutivité. Boutiques Shopify, WordPress & CMS headless, et frameworks modernes.",
      "about.more": "En savoir plus",
      "tech.shopify": "Shopify",
      "tech.wordpress": "WordPress",
      "tech.headless": "Headless CMS",
      "tech.nextjs": "Next.js",
      "tech.react": "React",
      "tech.node": "Node.js",
      "tech.ts": "TypeScript",
      "tech.tailwind": "Tailwind CSS",
      "tech.rest": "REST",
      "tech.graphql": "GraphQL",
      "team.title": "Qui nous sommes",
      "team.senior_dev": "Développeur senior",
      "team.designer": "Designeuse",
      "team.marketer": "Spécialiste marketing",
      "roles.fullstack": "Full‑stack",
      "roles.frontend": "Frontend",
      "roles.uiux": "UI/UX",
      "roles.growth": "Croissance",
      "team.summary": "Notre équipe : 2 développeurs senior, 1 designeuse, 1 spécialiste marketing.",
      "projects.title": "Nos <span class=\"span\">projets</span> récents.",
      "projects.text": "Plusieurs lancements sur Shopify, WordPress, CMS headless et apps web modernes — rapides, accessibles et évolutifs.",
      "projects.c1.title": "Boutique Shopify pour UrbanThreads",
      "projects.c1.tag": "E‑commerce, Shopify",
      "projects.c2.title": "Tableau de bord B2B (Next.js + Node)",
      "projects.c2.tag": "Web App, Next.js",
      "projects.c3.title": "Site marketing avec Headless CMS",
      "projects.c3.tag": "Headless, CMS",
      "projects.c4.title": "Refonte de site marketing SaaS",
      "projects.c4.tag": "Frontend, Performance",
      "projects.c5.title": "Migration WordPress → Headless",
      "projects.c5.tag": "WordPress, API",
      "contact.title": "Entrer en <span class=\"span\">contact</span>.",
      "contact.text": "Nous serions ravis d’échanger avec vous.",
      "form.name": "Nom",
      "form.name_placeholder": "Votre nom",
      "form.email": "E‑mail",
      "form.email_placeholder": "vous@exemple.fr",
      "form.subject": "Sujet",
      "form.subject_placeholder": "Comment pouvons‑nous aider ?",
      "form.message": "Message",
      "form.message_placeholder": "Écrivez votre message",
      "form.submit": "Envoyer",
      "form.success": "Merci — votre message a été envoyé. Nous revenons vers vous rapidement.",
      "footer.language": "Langue",
      "footer.links": "Liens",
      "footer.legal": "Mentions légales",
      "legal.privacy": "Politique de confidentialité",
      "legal.terms": "Conditions d'utilisation",
      "legal.cookies": "Politique de cookies",
      "cookie.text": "Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous ?",
      "cookie.accept": "Accepter",
      "cookie.decline": "Refuser",
      "cookie.accept_all": "Tout accepter",
      "cookie.reject_all": "Tout refuser",
      "cookie.manage": "Gérer les préférences",
      "cookie.save": "Enregistrer les préférences",
      "cookie.detail": "Choisissez les cookies à accepter. Les cookies nécessaires sont toujours activés.",
      "cookie.necessary": "Nécessaires",
      "cookie.necessary_desc": "Requis pour les fonctions de base du site.",
      "cookie.analytics": "Analytique",
      "cookie.analytics_desc": "Nous aide à comprendre l'utilisation du site.",
      "cookie.marketing": "Marketing",
      "cookie.marketing_desc": "Utilisés pour la personnalisation et la publicité."
    }
  };

  function pickInitialLang(dict) {
    const saved = localStorage.getItem(LS_KEY);
    if (saved && dict[saved]) return saved;
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('de') && dict['de']) return 'de';
    if (nav.startsWith('nl') && dict['nl']) return 'nl';
    if (nav.startsWith('es') && dict['es']) return 'es';
    if (nav.startsWith('fr') && dict['fr']) return 'fr';
    return 'en';
  }

  function applyTranslations(dict, lang) {
    const t = dict[lang] || dict['en'];
    // data-i18n innerHTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.innerHTML = t[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });
    // document title and meta description
    if (t['meta.title']) document.title = t['meta.title'];
    if (t['meta.description']) {
      let md = document.querySelector('meta[name="description"]');
      if (!md) {
        md = document.createElement('meta');
        md.setAttribute('name', 'description');
        document.head.appendChild(md);
      }
      md.setAttribute('content', t['meta.description']);
    }
    // select widgets reflect lang
    const selects = document.querySelectorAll('#lang-switcher, #lang-switcher-footer');
    selects.forEach(sel => { if (sel) sel.value = lang; });
  }

  (fetch(I18N_URL).then(r => r.json()).catch(() => I18N_FALLBACK))
    .then(dict => {
      const lang = pickInitialLang(dict);
      applyTranslations(dict, lang);

      const onChange = (e) => {
        const val = e.target.value;
        if (!dict[val]) return;
        localStorage.setItem(LS_KEY, val);
        applyTranslations(dict, val);
      };

      const selHeader = document.getElementById('lang-switcher');
      const selFooter = document.getElementById('lang-switcher-footer');
      if (selHeader) selHeader.addEventListener('change', onChange);
      if (selFooter) selFooter.addEventListener('change', onChange);
    })
    .catch(() => {
      // As a last resort, apply fallback EN strings directly
      try { applyTranslations(I18N_FALLBACK, 'en'); } catch (_) {}
    });
})();


/**
 * Cookie consent banner
 */
(function () {
  const KEY = 'cookie_preferences';
  const bar = document.getElementById('cookie-consent');
  const modal = document.getElementById('cookie-modal');
  if (!bar || !modal) return;

  function getPrefs() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
  }
  function setPrefs(p) { localStorage.setItem(KEY, JSON.stringify(p)); }
  function decided(p) { return p && typeof p.necessary === 'boolean' && typeof p.analytics === 'boolean' && typeof p.marketing === 'boolean'; }

  function showBar() { bar.hidden = false; }
  function hideBar() { bar.hidden = true; }
  function showModal() { modal.hidden = false; }
  function hideModal() { modal.hidden = true; }

  const prefs = getPrefs();
  if (decided(prefs)) {
    // update modal checkboxes to reflect saved prefs
    const a = document.getElementById('cookie-analytics');
    const m = document.getElementById('cookie-marketing');
    if (a) a.checked = !!prefs.analytics;
    if (m) m.checked = !!prefs.marketing;
  }
  // Always show the bottom banner on load; users can accept/reject or manage
  showBar();

  // buttons
  const acceptAll = document.getElementById('cookie-accept-all');
  const acceptAll2 = document.getElementById('cookie-accept-all-2');
  const rejectAll = document.getElementById('cookie-reject-all');
  const manage = document.getElementById('cookie-manage');
  const save = document.getElementById('cookie-save');
  const openLink = document.getElementById('cookie-open');
  const closeBtn = document.getElementById('cookie-close');

  if (acceptAll) acceptAll.addEventListener('click', () => {
    setPrefs({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() });
    hideBar(); hideModal();
  });
  if (acceptAll2) acceptAll2.addEventListener('click', () => {
    setPrefs({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() });
    hideBar(); hideModal();
  });
  if (rejectAll) rejectAll.addEventListener('click', () => {
    setPrefs({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() });
    hideBar(); hideModal();
  });
  if (manage) manage.addEventListener('click', () => {
    // reflect current state
    const p = getPrefs();
    const a = document.getElementById('cookie-analytics');
    const m = document.getElementById('cookie-marketing');
    if (a) a.checked = !!p.analytics;
    if (m) m.checked = !!p.marketing;
    hideBar();
    showModal();
  });
  if (save) save.addEventListener('click', () => {
    const a = document.getElementById('cookie-analytics');
    const m = document.getElementById('cookie-marketing');
    setPrefs({ necessary: true, analytics: !!(a && a.checked), marketing: !!(m && m.checked), timestamp: Date.now() });
    hideBar(); hideModal();
  });
  if (openLink) openLink.addEventListener('click', (e) => { e.preventDefault(); hideBar(); showModal(); });
  if (closeBtn) closeBtn.addEventListener('click', hideModal);
  // click outside to close
  modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
  // Esc to close
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });
})();
