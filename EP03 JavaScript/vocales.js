var contA = 0, contE = 0, contI= 0, contO= 0, contU= 0;
        var frase = prompt ("ingrese frase para analizar");

        for (var i = 0; i < frase.length; i++) {

            if (frase.charAt(i) == 'a') {
                contA++;
            }
            if (frase.charAt(i) == 'e') {
                contE++;
            }
            if (frase.charAt(i) == 'i') {
                contI++;
            }
            if (frase.charAt(i) == 'o') {
                contO++;
            }
            if (frase.charAt(i) == 'u') {
                contU++;
            }
        

        }
        
        console.log("hay " + contA + "vocales a");
        console.log("hay " + contE + "vocales e");
        console.log("hay " + contI + "vocales i");
        console.log("hay " + contO + "vocales o");
        console.log("hay " + contU + "vocales u");
        console.log("para un total de "+(contA+contE+contI+contO+contU)+" vocales");