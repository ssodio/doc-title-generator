const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const copyButton = document.getElementById('copy');

submitButton.addEventListener('click', function () {
    let input1 = form.input1.value;
    let input2 = form.dropdown.value;

    let generatedTitle = generateTitle(input1, input2);
    document.getElementById('final-doc-title').innerText = generatedTitle;
});

function generateTitle(input1, input2) {
    return input1.concat(" and " + input2);
}

clearButton.addEventListener('click', function () {
    document.getElementById('final-doc-title').innerText = "";
    document.getElementById('form').reset();
});

copyButton.addEventListener('click', function () {
    let copiedText = document.getElementById("final-doc-title").innerText;

    navigator.clipboard.writeText(copiedText);
});