// Recipe data
const recipes = [
    {
      name: "Spaghetti Carbonara",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Spaghetti_carbonara.jpg",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    },
    {
      name: "Chicken Curry",
      image: "https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-2360173335.jpg",
      description: "A flavorful and spicy curry dish made with tender chicken pieces.",
    },
    {
      name: "Vegetable Stir Fry",
      image: "https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1703377301&s=1a9a7367540b534f0b4d7b41a15a9816",
      description: "A quick and healthy dish with fresh vegetables and soy sauce.",
    },
    {
      name: "Tacos",
      image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14221.jpg",
      description: "Mexican-style tacos with your choice of protein and toppings.",
    },
    {
      name: "Chocolate Cake",
      image: "https://www.foodandwine.com/thmb/JB9N0qA141JpFZVJ-EBxCQ9kJx8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/moms-chocolate-cake-XL-RECIPE0918-10dde1dcd79b47b9876cda8812f11ad6.jpg",
      description: "A rich and moist chocolate cake perfect for dessert lovers.",
    },
    {
      name: "Panner Butter Masala",
      image: "https://t3.ftcdn.net/jpg/07/07/16/16/360_F_707161627_ZcREXZTdnUiXwfuDSpVsXhQPle51FhqE.jpg",
      description: "Paneer Butter Masala is a rich, creamy curry with paneer in a spiced, buttery tomato gravy.",
    },
    {
      name: "Fish Pakora",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpvk1_poAoCkahpUdYrmRBrsauPC7CDf5OQ&s",
      description: "Fish Pakora is a crispy, flavorful snack made by deep-frying marinated fish pieces in a spiced gram flour batter.",
    },
    {
      name: "Saag Aloo",
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Saag-Aloo-square-FS-45.jpg",
      description: "Saag Aloo is a flavorful Indian dish with tender potatoes cooked in a spiced spinach and mustard greens curry.",
    },
    {
      name: "Saag Paneer",
      image: "https://spicecravings.com/wp-content/uploads/2017/08/Palak-Paneer-5.jpg",
      description: "Saag Paneer is a creamy, spiced curry made with paneer cubes cooked in a flavorful spinach and mustard greens sauce.",
    },
    {
      name: "Mathi Matar Malai",
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Methi-Matar-Malai-2-3-500x375.jpg",
      description: "Methi Mutter Malai is a creamy, mildly spiced curry with fenugreek, peas, and a rich, velvety sauce.",
    }

  ];
  
  // Elements
  const recipesContainer = document.getElementById("recipes");
  const searchBar = document.getElementById("search-bar");
  
  // Display recipes
  function displayRecipes(recipes) {
    recipesContainer.innerHTML = "";
  
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-content">
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <button onclick="viewRecipe('${recipe.name}')">View Recipe</button>
        </div>
      `;
  
      recipesContainer.appendChild(recipeCard);
    });
  }
  
  // Search recipes
  searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchText)
    );
    displayRecipes(filteredRecipes);
  });
  
  // View recipe (for now, it just alerts the name)
  function viewRecipe(name) {
    alert('You clicked on ${name}!');
  }
  
  // Initialize
  displayRecipes(recipes);