let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = "PROMO10"
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 300

let sousTotal = prix * quantite
console.log("Sous-total :", sousTotal, "MAD")

let reduction = 0

if (codePromo !== null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100
}

console.log("Réduction :", reduction, "MAD")

let total = sousTotal - reduction
console.log("Total final :", total, "MAD")

if (soldeCompte >= total) {

    console.log("Paiement accepté")

    let nouveauSolde = soldeCompte - total

    console.log("\n===== RÉCAPITULATIF =====")
    console.log("Produit   :", nomProduit)
    console.log("Quantité  :", quantite)
    console.log("Prix unit.:", prix, "MAD")
    console.log("Sous-total:", sousTotal, "MAD")
    console.log("Réduction :", reduction, "MAD")
    console.log("Total     :", total, "MAD")
    console.log("Statut    : Paiement accepté")
    console.log("Solde     :", nouveauSolde, "MAD")
    console.log("=========================")

} else {

    console.log("Solde insuffisant")

}