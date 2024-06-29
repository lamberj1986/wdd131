document.addEventListener('DOMContentLoaded', function() {
    class DateManager {
        lastModified;
        copyYear;

        constructor(){
            this.genCopyYear();
            this.genLastModified();
        }

        genCopyYear(){
            this.copyYear = new Date().getFullYear();
        }

        genLastModified(){
            this.lastModified = document.lastModified;
        }

        displayLastModified(){
            return this.lastModified.toString();
        }

        displayCopyYear(){
            return `${this.copyYear}`;
        }
    }

    function main(){
        const manager = new DateManager();
        const currentYear = document.getElementById('currentYear');
        const lastModified = document.getElementById('lastModified');

        const windSpeed = 15;
        const temperature = 89.0;
        let windChill = null;

        currentYear.innerHTML = manager.displayCopyYear();
        lastModified.innerHTML = `Last modified: ${manager.displayLastModified()}`;

        function calculateWindChill(temperature, windSpeed, withFahrenheitSymbol=true) {
        const wc = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return withFahrenheitSymbol ? `${Math.round(wc)} ˚F` : Math.round(wc);
        }

        if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed);
        }

        document.getElementById('temp').innerText = `${temperature} ˚F`;
        document.getElementById('wind-speed').innerText = `${windSpeed} mph`;
        document.getElementById('wind-chill').innerText = `${windChill === null ? 'N/A' : windChill}`;
    }

    main();
});