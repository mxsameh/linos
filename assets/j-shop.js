const filters = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll(".products li");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selectedFilter = filter.dataset.filter;

    filters.forEach((item) => {
      item.classList.remove("active");
    });

    filter.classList.add("active");

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
