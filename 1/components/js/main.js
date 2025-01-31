import { loadComponent, loadSection } from "./utils";

loadSection("src/partials/sections/header.html", "header");
loadSection("src/partials/sections/hero.html", "hero");
loadSection("src/partials/sections/feature.html", "feature");
loadSection("src/partials/sections/portfolio.html", "portfolio");
loadSection("src/partials/sections/team.html", "team");
loadSection("src/partials/sections/footer.html", "footer");

loadComponent("src/partials/components/logo.html", "logo");
loadComponent("src/partials/components/navigation.html", "nav");
loadComponent("src/partials/components/contacts.html", "contacts");
loadComponent("src/partials/components/socials.html", "socials");
loadComponent("src/partials/components/description.html", "description");
