  const container = document.getElementById('category-buttons');
    let activeBtn = null; // Tracking  active buttons list 

    async function loadCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();

        categories.forEach((category) => {
          const btn = document.createElement('button');
          btn.className = `px-4 py-2 rounded-xl bg-white text-black rounded border border-gray-300 hover:bg-gray-100 transition-colors`;
          btn.textContent = category;

        //  /active event added 
          btn.addEventListener('click', () => {
            if (activeBtn) {
              activeBtn.classList.remove('bg-blue-500', 'text-white');
              activeBtn.classList.add('bg-white', 'text-black');
            }
            btn.classList.remove('bg-white', 'text-black');
            btn.classList.add('bg-blue-500', 'text-white');
            activeBtn = btn;
          });

          container.appendChild(btn);
        });
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    }

    loadCategories();