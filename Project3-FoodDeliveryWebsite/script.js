document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search input');
  const foodItems = document.querySelectorAll('.food-list li');
  const header = document.querySelector('header');

  // 1. Live Search Filter
  // This filters the food list as you type in the search box
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    foodItems.forEach(item => {
      const title = item.querySelector('h3')?.innerText.toLowerCase() || "";
      const description = item.querySelector('p')?.innerText.toLowerCase() || "";

      if (title.includes(query) || description.includes(query)) {
        item.style.display = "block";
      } else {
        // Don't hide the "Click to see more" item
        if (!item.querySelector('a')) {
          item.style.display = "none";
        }
      }
    });
  });

  // 2. Sticky Header Effect
  // Adds a background color to the header when you scroll down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-active');
      header.style.backgroundColor = "white";
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      header.classList.remove('header-active');
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  });

  // 3. Simple Click Alert for "See More"
  const seeMoreLink = document.querySelector('.food-list a');
  seeMoreLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Loading more delicious options for you...");
  });
});
