const filters = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll(".product-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selectedFilter = filter.dataset.filter;

    filters.forEach((item) => {
      item.classList.remove("is-active");
    });

    filter.classList.add("is-active");

    products.forEach((product) => {
      const productTags = product.dataset.productTags.split(" ");

      if (selectedFilter === "all" || productTags.includes(selectedFilter)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
