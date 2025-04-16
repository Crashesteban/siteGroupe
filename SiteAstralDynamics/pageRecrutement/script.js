"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const formulaire = document.querySelector('.application-form');
  
    if (formulaire) {
      formulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
  
        // Récupération des données des champs
        const nom = formulaire.elements.nom.value;
        const email = formulaire.elements.email.value;
        const role = formulaire.elements.role.value;
        const plateformes = formulaire.elements.plateformes.value;
        const liens = formulaire.elements.liens.value;
        const message = formulaire.elements.message.value;
  
        // Affichage des données récupérées dans la console (pour l'exemple)
        console.log("Nom:", nom);
        console.log("Email:", email);
        console.log("Poste Souhaité:", role);
        console.log("Plateformes Utilisées:", plateformes);
        console.log("Liens Utiles:", liens);
        console.log("Votre Message / Motivation:", message);
  
        // --- Ici, vous pouvez ajouter votre logique de stockage des données ---
  
        // Exemple de stockage dans un objet JavaScript :
        const donneesUtilisateur = {
          nom: nom,
          email: email,
          role: role,
          plateformes: plateformes,
          liens: liens,
          message: message
        };
        console.log("Données utilisateur:", donneesUtilisateur);
  
        // Exemple de stockage dans le localStorage :
        localStorage.setItem('candidature_nom', nom);
        localStorage.setItem('candidature_email', email);
        localStorage.setItem('candidature_role', role);
        localStorage.setItem('candidature_plateformes', plateformes);
        localStorage.setItem('candidature_liens', liens);
        localStorage.setItem('candidature_message', message);
        console.log("Données stockées dans le localStorage.");
  
        // Exemple d'envoi des données à un serveur (à adapter avec votre API) :
        /*
        fetch('/api/soumettre-candidature', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(donneesUtilisateur)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Succès de l\'envoi au serveur:', data);
          // Traiter la réponse du serveur ici
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi au serveur:', error);
        });
        */
  
        // Vous pouvez ajouter ici d'autres actions après la récupération des données,
        // comme afficher un message de confirmation à l'utilisateur.
      });
    } else {
      console.error("Le formulaire avec la classe 'application-form' n'a pas été trouvé.");
    }
  });