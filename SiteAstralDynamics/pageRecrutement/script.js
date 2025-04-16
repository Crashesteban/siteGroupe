"use strict";

document.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire

  const formData = {
    nom: '',
    email: '',
    posteSouhaite: [],
    plateformes: '',
    liens: '',
    message: ''
  };
  const form = document.querySelector('.application-form'); // Sélectionne le formulaire par son ID
  const storedData = JSON.parse(localStorage.getItem('applications')) || [];

  // Récupère la valeur du champ Nom
  const nomInput = form.querySelector('input[name="nom"]');
  if (nomInput) {
    formData.nom = nomInput.value.trim(); // Supprime les espaces blancs au début et à la fin
  }

  // Récupère la valeur du champ Email
  const emailInput = form.querySelector('input[name="email"]');
  if (emailInput) {
    formData.email = emailInput.value.trim(); // Supprime les espaces blancs au début et à la fin
  }

  // Vérifie si le nom ou l'e-mail existe déjà dans les données stockées
  const isDuplicate = storedData.some(item => item.nom === formData.nom || item.email === formData.email);

  if (isDuplicate && formData.nom !== '' && formData.email !== '') {
    alert('Un enregistrement avec ce nom ou cette adresse e-mail existe déjà.');
    return; // Empêche le traitement ultérieur si c'est un doublon
  }

  // Récupère les valeurs des cases à cocher pour le Poste Souhaité
  const postesSouhaites = [];
  const streamerCheckbox = form.querySelector('input[name="poste"][value="Streamer"]');
  if (streamerCheckbox && streamerCheckbox.checked) {
    postesSouhaites.push(streamerCheckbox.value);
  }
  const vtuberCheckbox = form.querySelector('input[name="poste"][value="Vtuber"]');
  if (vtuberCheckbox && vtuberCheckbox.checked) {
    postesSouhaites.push(vtuberCheckbox.value);
  }
  const staffCheckbox = form.querySelector('input[name="poste"][value="Staff"]');
  if (staffCheckbox && staffCheckbox.checked) {
    postesSouhaites.push(staffCheckbox.value);
  }
  formData.posteSouhaite = postesSouhaites;

  // Récupère la valeur du champ Plateformes Utilisées
  const plateformesInput = form.querySelector('input[name="plateformes"]');
  if (plateformesInput) {
    formData.plateformes = plateformesInput.value.trim();
  }

  // Récupère la valeur du champ Liens Utiles
  const liensInput = form.querySelector('input[name="liens"]');
  if (liensInput) {
    formData.liens = liensInput.value.trim();
  }

  // Récupère la valeur du champ Votre Message / Motivation
  const messageTextarea = form.querySelector('textarea[name="message"]');
  if (messageTextarea) {
    formData.message = messageTextarea.value.trim();
  }

  // Ajoute les nouvelles données au tableau (si ce n'est pas un doublon)
  if (!isDuplicate && formData.nom !== '' && formData.email !== '') {
    storedData.push(formData);
    // Stocke les données mises à jour dans le localStorage
    localStorage.setItem('applications', JSON.stringify(storedData));
    alert('Votre candidature a été enregistrée !');
    form.reset(); // Réinitialise le formulaire après l'enregistrement
  } else if (formData.nom === '' || formData.email === '') {
    alert('Veuillez renseigner le nom et l\'adresse e-mail.');
  }

  // Vous pouvez également afficher les données stockées pour vérification
  console.log('Données stockées:', storedData);
});

// Optionnel : Afficher les données stockées au chargement de la page (pour le débogage)
document.addEventListener('DOMContentLoaded', function() {
  const storedDataOnLoad = JSON.parse(localStorage.getItem('applications'));
  if (storedDataOnLoad) {
    console.log('Données stockées au chargement:', storedDataOnLoad);
  }
});