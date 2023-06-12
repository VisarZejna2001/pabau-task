const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const shuffleButton = document.getElementById('shuffleButton');
const changeButton = document.getElementById('changeButton');
const showButton = document.getElementById('showButton');

function shuffleValues(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    for (let i = checkboxes.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log('j',j);

        form.insertBefore(checkboxes[j].parentNode, checkboxes[i].parentNode);
    }
}
shuffleButton.addEventListener('click', shuffleValues);

function changeValues(e) {
    e.preventDefault();
    checkboxes.forEach((checkbox) => {
        checkbox.value = "Changed value";
    });
}

changeButton.addEventListener('click', changeValues);

function showSelectedValues(e) {
    e.preventDefault();
    const selectedCheckboxes = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCheckboxes.push({
                label: checkbox.parentNode.textContent.trim(),
                value: checkbox.value
            });
        }
    });

    const selectedCheckboxesDiv = document.getElementById('selectedCheckboxes');
    selectedCheckboxesDiv.innerHTML = '';

    if (selectedCheckboxes.length > 0) {
        const div = document.createElement('div');
        selectedCheckboxes.forEach((checkbox) => {
            const p = document.createElement('p');
            p.textContent = checkbox.label + ': ' + checkbox.value;
            div.appendChild(p);
        });
        selectedCheckboxesDiv.appendChild(div);
    } else {
        selectedCheckboxesDiv.textContent = 'No checkboxes selected.';
    }
}
showButton.addEventListener('click', showSelectedValues);