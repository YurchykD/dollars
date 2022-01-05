getCurrencies()

async function getCurrencies() {
    const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=35e801b9ae5d4e9095e8fba8087bfedb");
    const data = await response.json();
    const result = await data;

    const euroCurrency = result.rates.EUR;
    const grivnaCurrency = result.rates.UAH;
    const poundCurrency = result.rates.GBP;

    const form = document.getElementById('form');

    function retrieveFromValue(event) {
        event.preventDefault();

        const grivna = form.querySelector('[name="grivna"]')
        const dollar = form.querySelector('[name="dollar"]')
        const euro = form.querySelector('[name="euro"]')
        const pound = form.querySelector('[name="pound"]')

        const values = {
            grivna: grivna.value,
            dollar: dollar.value,
            euro: euro.value,
            pound: pound.value
        };

        let out = document.querySelector('.section__result-count');
        out.textContent =
            ((Number(values.grivna) / grivnaCurrency) +
                Number(values.dollar) +
                (Number(values.euro) / euroCurrency) +
                (Number(values.pound) / poundCurrency)).toFixed(2);
    }

    form.addEventListener('submit', retrieveFromValue)
}
