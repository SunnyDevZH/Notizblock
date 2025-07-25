let notiz = [];
let thema = [];

/**
 * Rendert alle gespeicherten Notizen und Themen im DOM.
 * Leert die Anzeige und fügt für jede Notiz ein neues Element hinzu.
 * Setzt die Eingabefelder nach dem Rendern zurück.
 */
function render() {
    let myposts = document.getElementById('myposts');
    myposts.innerHTML = '';
    for (let i = 0; i < notiz.length; i++) {
        myposts.innerHTML += `
        <div class="post">
            <b>Notiz: ${thema[i]}
            ${notiz[i]} 
        </div> 
        <button onclick="deleteNotiz(${i})">Löschen</button>
        `;
    }
    document.getElementById('notiz').value = '';
    document.getElementById('thema').value = '';
}

/**
 * Fügt eine neue Notiz und ein Thema zum jeweiligen Array hinzu.
 * Aktualisiert die Anzeige und speichert die Daten im Local Storage.
 */
function addNotiz() {
    let text = document.getElementById('notiz').value;
    let name = document.getElementById('thema').value;
    notiz.push(text);
    thema.push(name);

    render();
    save();
}

/**
 * Löscht eine Notiz und das zugehörige Thema anhand des Index.
 * Aktualisiert die Anzeige und speichert die Daten im Local Storage.
 * @param {number} i - Index der zu löschenden Notiz
 */
function deleteNotiz(i) {
    thema.splice(i, 1);
    notiz.splice(i, 1);
    render();
    save();
}

/**
 * Speichert die Arrays für Notizen und Themen als Strings im Local Storage.
 */
function save() {
    let themaAsText = JSON.stringify(thema);
    let notizAsText = JSON.stringify(notiz);

    localStorage.setItem('thema', themaAsText);
    localStorage.setItem('notiz', notizAsText);
}

/**
 * Lädt die gespeicherten Notizen und Themen aus dem Local Storage.
 * Falls Daten vorhanden sind, werden die Arrays aktualisiert und die Anzeige gerendert.
 */
function load() {
    let themaAsText = localStorage.getItem('thema');
    let notizAsText = localStorage.getItem('notiz');
    if (themaAsText && notizAsText) {
        thema = JSON.parse(themaAsText);
        notiz = JSON.parse(notizAsText);
    }
    render();
}

