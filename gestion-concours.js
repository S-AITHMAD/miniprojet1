// Variables globales
const formConcours = document.getElementById('formConcours');
const listeConcours = document.getElementById('listeConcours');

// Tableau pour stocker les concours
let concours = [
    {
        titre: "Master Web Intelligence",
        description: "Concours pour le master en Web Intelligence",
        dateDebut: "01-11-2024",
        dateFin: "04-11-2024",
        statut: "Ouvert",
    }
];

// Fonction pour afficher les concours dans le tableau
function afficherConcours() {
    listeConcours.innerHTML = ''; // Réinitialiser la liste

    concours.forEach((concours, index) => {
        const row = `
            <tr>
                <td>${concours.titre}</td>
                <td>${concours.description}</td>
                <td>${concours.dateDebut}</td>
                <td>${concours.dateFin}</td>
                <td>${concours.statut}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="modifierConcours(${index})">Modifier</button>
                    <button class="btn btn-sm btn-danger" onclick="supprimerConcours(${index})">Supprimer</button>
                </td>
            </tr>
        `;
        listeConcours.insertAdjacentHTML('beforeend', row);
    });
}

// Fonction pour ajouter un concours
formConcours?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const titre = document.getElementById('titre').value.trim();
    const description = document.getElementById('description').value.trim();
    const dateDebut = document.getElementById('dateDebut').value;
    const dateFin = document.getElementById('dateFin').value;

    if (!titre || !description || !dateDebut || !dateFin) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    // Ajouter le concours au tableau
    const nouveauConcours = {
        titre,
        description,
        dateDebut,
        dateFin,
        statut: 'Ouvert',
    };
    concours.push(nouveauConcours);

    // Mettre à jour l'affichage
    afficherConcours();

    // Réinitialiser le formulaire
    formConcours.reset();
    fermerFormulaire(); // Masquer le formulaire si nécessaire
});

// Fonction pour supprimer un concours
function supprimerConcours(index) {
    concours.splice(index, 1); // Supprimer le concours du tableau
    afficherConcours(); // Réactualiser l'affichage
}

// Fonction pour modifier un concours
function modifierConcours(index) {
    const concoursAModifier = concours[index];

    // Remplir le formulaire avec les données du concours sélectionné
    document.getElementById('titre').value = concoursAModifier.titre;
    document.getElementById('description').value = concoursAModifier.description;
    document.getElementById('dateDebut').value = concoursAModifier.dateDebut;
    document.getElementById('dateFin').value = concoursAModifier.dateFin;

    // Supprimer le concours en cours de modification pour éviter les doublons
    supprimerConcours(index);

    // Ouvrir le formulaire pour modification
    ouvrirFormulaire();
}

// Fonction pour afficher le formulaire
function ouvrirFormulaire() {
    formConcours.classList.remove('d-none');
}

// Fonction pour masquer le formulaire
function fermerFormulaire() {
    formConcours.classList.add('d-none');
    formConcours.reset(); // Réinitialiser le formulaire
}

// Initialiser les concours au chargement
afficherConcours();
// Tableau des résultats fictifs
const resultats = [
    { nom: "Dupont", prenom: "Jean", score: 95, classement: 1 },
    { nom: "Martin", prenom: "Sophie", score: 90, classement: 2 },
    { nom: "Durand", prenom: "Paul", score: 85, classement: 3 },
];

// Fonction pour afficher les résultats dans le tableau
function afficherResultats() {
    const tableau = document.getElementById('resultatsParticipant');
    tableau.innerHTML = ''; // Réinitialiser le contenu

    resultats.forEach(resultat => {
        const row = `
            <tr>
                <td>${resultat.nom}</td>
                <td>${resultat.prenom}</td>
                <td>${resultat.score}</td>
                <td>${resultat.classement}</td>
            </tr>
        `;
        tableau.insertAdjacentHTML('beforeend', row);
    });
}

// Charger les résultats au démarrage
document.addEventListener('DOMContentLoaded', afficherResultats);
