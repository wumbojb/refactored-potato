import { sidebarHandler } from "./module_internal/sidebar";
import { viewContentHandler } from "./module_internal/view-content";

const main = () => {
  sidebarHandler();
  viewContentHandler();
};

document.addEventListener("DOMContentLoaded", main);
