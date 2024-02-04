/**
 * Obsługuje przesłanie formularza zamówienia.
 * @function submitOrder
 * @param {Event} event - Obiekt zdarzenia przycisku "Zamów".
 */
function submitOrder() {
  // Zatrzymaanie domyślne działanie przycisku "Zamów"
  event.preventDefault();

  // Pobieranie wartości pól formularza
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Sprawdzanie, czy wszystkie pola formularza są wypełnione
  if (!fname || !lname || !email || !message) {
    displayModal("Błąd", "Wszystkie pola formularza muszą być wypełnione."); return;
  }

  // Walidacja pola email
  var emailRegex = /@+.[a-zA-Z]/;
  if (!emailRegex.test(email)) {
    displayModal("Błąd", "Email musi zawierać '@' oraz domenę");
    return;
  }

  // Wyświetlenie potwierdzenia zamówienia w oknie 

  displayModal("Potwierdzenie przesłania przepisu", fname + ' ' + lname + ' ' + 'przesłał przepis: ' + message);
}


/**
 * Wyświetlanie okna modalnego z tytułem i treścią.
 * @function displayModal
 * @param {string} title - Tytuł okna modalnego.
 * @param {string} text - Treść do wyświetlenia w oknie modalnym.
 */
function displayModal(title, text) {
  var modal = document.getElementById('myModal');
  var modalTitle = document.getElementById('modalTitle');
  var modalText = document.getElementById('modalText');

  modalTitle.textContent = title;
  modalText.innerHTML = text;

  modal.style.display = 'flex';
}

/**
 * Ukrywanie okno modalne.
 * @function hideRecipe
 */
function hideRecipe() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

/**
 * Obsługuje kliknięcie myszą.
 * Jeśli kliknięto poza oknem modalnym, ukrywa je.
 * @function windowOnClick
 * @param {Event} event - Obiekt zdarzenia myszy.
 */
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  // Ukryj okno, jeśli kliknięto poza nie
  if (event.target == modal) {
    hideRecipe();
  }
};

