import { $$, byId } from "js/helper";

export const sidebarHandler = () => {
  $$("[data-sidebar]").forEach((btn) => {
    const targetId = btn.getAttribute("data-sidebar")
    const sidebar = byId(targetId)

    btn.addEventListener("click", (e) => {
      sidebar.classList.toggle("is-active");
    });
  });
};