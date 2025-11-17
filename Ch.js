const StringUtils = {

    // 1️⃣ Inverser une chaîne de caractères
    inverserChaine: function(str) {
        return str.split("").reverse().join("");
    },

    // 2️⃣ Compter les caractères d'une chaîne
    compterCaracteres: function(str) {
        return str.length;
    },

    // 3️⃣ Mettre en majuscule la première lettre de chaque mot
    capitaliserPhrase: function(phrase) {
        return phrase
            .split(" ")
            .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase())
            .join(" ");
    }
};
