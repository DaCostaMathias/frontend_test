
$(document).ready(function(){
    $('#pricingCarousel').carousel();
});
function startCalculator({selector}) {


    const $root = document.querySelector(selector);

    const $inputs = $root.querySelectorAll('input');

    const $outputArea = $root.querySelector('.calculator__result');

    // contains a map of form input names and values
    const currentFormState = {};

    const outputResult = ($el, formState) => {
        $el.innerHTML = '';
        if (!formState.clientLicenses) {
            formState.clientLicenses = 0;
        }
        if (!formState.serverLicenses) {
            formState.serverLicenses = 0;
        }
        if (formState.clientLicenses && formState.serverLicenses) {
            const result = formState.clientLicenses * 0 + formState.serverLicenses * 15 + formState.enterpriseLicenses * 29
            $el.innerHTML = `
            <dl>
                <dt>Total Cost of Ownership (TCO)</dt>
                <dd class="calculator__total-cost">$${result}.00</dd>
            </dl>
            `;
        }
        console.log($el, formState)
    }
    // load initial state
    $inputs.forEach(node => {
        currentFormState[node.getAttribute('name')] = node.value;
    })
    outputResult($outputArea, currentFormState);

    $inputs.forEach(node => {
        node.addEventListener('change', e => {
            console.log('input change:', node.getAttribute('name'), ':', node.value);
            currentFormState[node.getAttribute('name')] = node.value;
            outputResult($outputArea, currentFormState);
        })
    })

}

// main start
const calculatorID = '#calculator__form';
document.addEventListener('DOMContentLoaded', () => {

    startCalculator({ selector: calculatorID });
})