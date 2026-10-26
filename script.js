document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  const cartCount = document.querySelector(".cart-count");
  let itemCount = 0;
  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
      itemCount += 1;
      if (cartCount) {
        cartCount.textContent = String(itemCount);
      }
      const cartButton = document.querySelector(".cart-button");
      if (cartButton) {
        cartButton.setAttribute("aria-label", `Shopping bag, ${itemCount} items`);
      }
      const originalText = button.firstChild.textContent;
      button.firstChild.textContent = "Added to bag ";
      window.setTimeout(() => {
        button.firstChild.textContent = originalText;
      }, 1100);
    });
  });

  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelector(".category-tab.active")?.classList.remove("active");
      tab.classList.add("active");
      const selectedCategory = tab.dataset.filter;
      document.querySelectorAll(".product-card").forEach((card) => {
        card.hidden = selectedCategory !== "all" && card.dataset.category !== selectedCategory;
      });
    });
  });

  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "index.html#shop";
    });
  }

  document.querySelectorAll(".contact-form, .newsletter-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      if (message) {
        message.textContent = form.classList.contains("contact-form")
          ? "Thanks for your note! This demo form is ready, but messages are not sent."
          : "You’re on the list! This demo does not save email addresses.";
        message.setAttribute("role", "status");
      }
      form.reset();
    });
  });
});
