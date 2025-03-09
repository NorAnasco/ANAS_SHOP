// Sélectionne tous les boutons "Ajouter au panier"
const boutons = document.querySelectorAll(".produit button");
const compteurPanier = document.getElementById("compteur");
const listePanier = document.getElementById("liste-panier");
const totalPrix = document.getElementById("total");

let totalProduits = 0;
let totalMontant = 0;

// Ajoute un écouteur d'événements sur chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener("click", (event) => {
        totalProduits++; // Incrémente le compteur
        compteurPanier.textContent = totalProduits; // Met à jour l'affichage

        // Récupérer les infos du produit
        const produit = event.target.parentElement;
        const nomProduit = produit.querySelector("h2").textContent;
        const prixProduit = parseFloat(produit.querySelector("p").textContent.replace("FCFA", "").trim());

        // Ajouter le produit à la liste du panier
        const nouvelElement = document.createElement("li");
        nouvelElement.textContent = `${nomProduit} - ${prixProduit} FCFA`;
        listePanier.appendChild(nouvelElement);

        // Mettre à jour le total
        totalMontant += prixProduit;
        totalPrix.textContent = `Total : ${totalMontant.toFixed(2)} FCFA`;
    });
});

// Sélectionne le bouton "Vider le panier"
const boutonVider = document.getElementById("vider-panier");

boutonVider.addEventListener("click", () => {
    listePanier.innerHTML = ""; // Vide la liste des produits
    totalMontant = 0; // Réinitialise le total
    totalProduits = 0; // Réinitialise le compteur d’articles
    compteurPanier.textContent = totalProduits;
    totalPrix.textContent = `Total : 0 FCFA`;
});


// Sélectionne le bouton "Passer à la caisse"
const boutonCaisse = document.getElementById("passer-a-la-caisse");

boutonCaisse.addEventListener("click", () => {
    if (totalProduits > 0) {
        alert("Merci pour votre commande ! Total à payer : " + totalMontant + " FCFA");
        // Ici, tu pourrais ajouter une redirection vers une page de paiement
    } else {
        alert("Votre panier est vide !");
    }
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


