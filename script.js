const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');

submitButton.addEventListener('click', function () {
    let input1 = form.input1.value;
    let input2 = form.dropdown.value;

    let generatedTitle = generateTitle(input1, input2);
    document.getElementById('final-doc-title').innerText = generatedTitle;
});

clearButton.addEventListener('click', function () {
    document.getElementById('final-doc-title').innerText = "";
});

function generateTitle(input1, input2) {
    return input1.concat(" and " + input2);
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
} 