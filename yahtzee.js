function yahtzee(a, b, c, d, e) {

    const resultat = a + b + c + d + e;
    var values = [a, b, c, d, e];
    var compteur = 1;
    
    // Vérification de la règle - Three Of a Kind
    for(var i = 0; i<5; i++){
        for(var j = 0; j<5; j++){
            if(i != j){
                if(values[i] == values[j]) {
                    compteur += 1;
                }
            }
            if(j == 4 && compteur == 3) return resultat;
            if(j == 4 && compteur < 3) compteur = 1;
        }
    }

}

module.exports = yahtzee;