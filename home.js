(function () {
    const birth = new Date(2009, 6, 22);

    function calculateAgeYearsDecimal(birthDate) {
        const now = new Date();
        const diffMs = now - birthDate;
        const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
        const years = diffMs / msPerYear;
        return years;
    }

    function ensureAgeDiv() {
        let div = document.getElementById('Age');
        if (!div) {
            div = document.createElement('div');
            div.id = 'Age';
        }
        return div;
    }

    function updateAgeDisplay() {
        const yearsDecimal = calculateAgeYearsDecimal(birth);
        const formatted = yearsDecimal.toFixed(2).replace('.', '.');
        const div = ensureAgeDiv();
        div.textContent = `${formatted} years old`;
    }

    updateAgeDisplay();

    const oneHour = 60 * 60 * 1000;
    setInterval(updateAgeDisplay, oneHour);
})();
