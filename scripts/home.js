// Fonction pour ajouter un produit au panier
function ajouterPanier() {
    alert("Produit ajouté au panier !");
  }
  
  // Gestion du formulaire de contact
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire pour la démonstration
  
    // Récupération des valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validation simple
    if (nom && email && message) {
      alert("Votre message a été envoyé avec succès !");
      form.reset(); // Réinitialisation du formulaire
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  });
  
  // Amélioration de l'UX pour les produits (panier)
  const produits = document.querySelectorAll('.produit button');
  
  produits.forEach(button => {
    button.addEventListener('click', function() {
      const produit = this.closest('.produit');
      const produitNom = produit.querySelector('h3').textContent;
      alert(produitNom + " ajouté au panier !");
    });
  });
  