
let nom = "   Fatima   ";            // nom avec espaces
let age = "23";                       // âge en chaîne
let email = "fatima@example";         // email invalide
let scoreJeu = "150pts";              // score avec texte
let estAdmin = "false";               // chaîne "false" ou "true"
let derniereConnexion = null;         // peut être null
let nombreConnexions = "0";           // chaîne représentant un nombre


let nomCorrige = nom.trim();          // supprimer espaces début et fin
if (nomCorrige === "") nomCorrige = "Inconnu"; // si vide après trim


let ageEntier = parseInt(age);        // convertir en entier
let ageValide = !isNaN(ageEntier) && ageEntier > 0; // vérifier validité


let indexArrobase = email.indexOf("@");
let indexPointApres = indexArrobase >= 0 ? email.indexOf(".", indexArrobase) : -1;
let emailValide = indexArrobase >= 0 && indexPointApres > indexArrobase;


let score = parseInt(scoreJeu);      
if (isNaN(score)) score = 0;


let admin = estAdmin === "true";      

let derniere = derniereConnexion ?? "Jamais connecté"; 


let nbConnex = parseInt(nombreConnexions);
let nbConnexAffichage = (isNaN(nbConnex) || nbConnex === 0) ? "Aucune connexion" : nbConnex;

//  Affichage du rapport 
console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log('age              : ' + (ageValide ? ageEntier : "invalide") + (ageValide ? " (valide)" : " (invalide ou <= 0)"));
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ')');
console.log('scoreJeu         : ' + score + ' (extrait depuis "' + scoreJeu + '")');
console.log('estAdmin         : ' + admin + ' (attention : Boolean("false") = true, conversion manuelle requise)');
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)');
console.log('nombreConnexions : "' + nbConnexAffichage + '" (' + (nbConnex === 0 ? "0 après conversion" : nbConnex) + ')');
console.log("================================");