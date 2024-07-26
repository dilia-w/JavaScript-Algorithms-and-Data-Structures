document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (userInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const isValid = validatePhoneNumber(userInput);
    resultsDiv.textContent = (isValid ? 'Valid' : 'Invalid') + ' US number: ' + userInput;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});

function validatePhoneNumber(number) {
    const validFormats = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/,             // 1 555-555-5555 or 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,       // 1 (555) 555-5555 or (555) 555-5555
        /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,          // (555)555-5555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/,           // 1 555 555 5555 or 555 555 5555
        /^1?\s?\d{10}$/                         // 5555555555
    ];


    const countryCodePattern = /^1?/;
    const hasValidCountryCode = countryCodePattern.test(number);

    return validFormats.some(pattern => pattern.test(number)) && hasValidCountryCode;
}
