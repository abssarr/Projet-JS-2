const MathUtils = {
    factorielle(n) {
        if (n < 0) throw new Error("n doit être ≥ 0");
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    },

    estPremier(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    },

    fibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        const suite = [0, 1];
        for (let i = 2; i < n; i++) {
            suite.push(suite[i - 1] + suite[i - 2]);
        }
        return suite;
    }
};

// Utilisation :
console.log(MathUtils.factorielle(7));   // 5040
console.log(MathUtils.estPremier(19));   // true
console.log(MathUtils.fibonacci(8));     // [0, 1, 1, 2, 3, 5, 8, 13]
