let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}








/*substitution*/

  const substitutionBtn = document.getElementById('substitute-btn');
  const substitutionResults = document.getElementById('substitution-results');

  substitutionBtn.addEventListener('click', () => {
    const ingredientInput = document.getElementById('ingredient').value;
    const substitutions = findSubstitutions(ingredientInput);
    displaySubstitutions(substitutions);
  });

  function findSubstitutions(ingredient) {
    // Implement your logic to find substitutions for the given ingredient
    // You can use an API or a predefined list for substitutions
    // Return an array of substitution options
	const substitutions = {
		Flour: ['Almond flour', 'Coconut flour', 'Oat flour'],
		Sugar: ['Honey', 'Maple syrup', 'Stevia'],
		Butter: ['Coconut oil', 'Olive oil', 'Avocado'],
		Milk: ['Almond milk', 'Soy milk', 'Coconut milk'],
		Eggs: ['Banana', 'Applesauce', 'Flaxseed meal'],
		Salt: ['Sea salt', 'Himalayan salt', 'Garlic salt'],
		Garlic: ['Garlic powder', 'Onion powder', 'Chives'],
		Onion: ['Shallot', 'Leek', 'Green onion'],
		Tomato: ['Red bell pepper', 'Canned tomatoes', 'Tomato sauce'],
    salt: ['white salt', 'Black salt'],
	  };
	
	  return substitutions[ingredient] || [];
  }

  function displaySubstitutions(substitutions) {
    substitutionResults.innerHTML = '';
    if (substitutions.length > 0) {
      const resultList = document.createElement('ul');
      substitutions.forEach((substitution) => {
        const listItem = document.createElement('li');
        listItem.textContent = substitution;
        resultList.appendChild(listItem);
      });
      substitutionResults.appendChild(resultList);
    } else {
      substitutionResults.textContent = 'No substitutions found.';
    }
  }
/*subtitution*/



       