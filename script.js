var screen = document.getElementById("screen");
var title = document.getElementById("pageTitle");
var modal = document.getElementById("modal");

let page = "home";


/* =========================
   START
========================= */

function home() {

    screen.innerHTML = `

        <div class="hero">

            <h2>Dokumenty pod ręką</h2>

            <p>
                To jest całkowicie fikcyjna
                aplikacja demonstracyjna.
                Nie służy do potwierdzania
                tożsamości.
            </p>

        </div>


        <div class="section-title">
            Twoje dokumenty
        </div>


        <button class="list-btn"
                onclick="openDocument()">

            <div class="ico">
                ▣
            </div>

            <div class="grow">

                <b>
                    Dokument Demo
                </b>

                <div class="small">
                    Dokument przykładowy
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>


        <div class="section-title">
            Szybkie akcje
        </div>


        <button class="list-btn"
                onclick="toast('Potwierdzanie danych jest wyłączone w wersji demo')">

            <div class="ico">
                ✓
            </div>

            <div>

                <b>
                    Potwierdź swoje dane
                </b>

                <div class="small">
                    Funkcja demonstracyjna
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>


        <button class="list-btn"
                onclick="
                    page='services';
                    app();
                ">

            <div class="ico">
                ⚙
            </div>

            <div>

                <b>
                    Usługi
                </b>

                <div class="small">
                    Otwórz listę usług
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>

    `;
}


/* =========================
   DOKUMENTY
========================= */

function documents() {

    screen.innerHTML = `

        <div class="section-title">
            Dokumenty
        </div>


        <button class="list-btn"
                onclick="openDocument()">

            <div class="ico">
                ▣
            </div>

            <div class="grow">

                <b>
                    Dokument Demo
                </b>

                <div class="small">
                    Przykładowe dane
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>


        <button class="list-btn"
                onclick="
                    toast(
                        'Dodawanie dokumentu jest dostępne tylko jako demonstracja'
                    )
                ">

            <div class="ico">
                ＋
            </div>

            <div>

                <b>
                    Dodaj dokument
                </b>

                <div class="small">
                    Demo
                </div>

            </div>

        </button>

    `;
}


/* =========================
   DOKUMENT DEMO
========================= */

function openDocument() {

    screen.innerHTML = `

        <div class="doc">

            <div class="doc-head">

                <div class="demo-doc">

                    <div class="photo">
                        👤
                    </div>


                    <div class="doc-name">
                        OSOBA DEMO
                    </div>


                    <div class="doc-line">
                        Imię i nazwisko:
                        JAN DEMO
                    </div>


                    <div class="doc-line">
                        Obywatelstwo:
                        DEMONSTRACYJNE
                    </div>


                    <div class="doc-line">
                        Data urodzenia:
                        01.01.2000
                    </div>


                    <div class="doc-line">
                        Numer:
                        DEMO-000000
                    </div>

                </div>

            </div>


            <div class="valid">
                ✓ Dokument demonstracyjny
            </div>

        </div>


        <button class="primary"
                onclick="
                    toast(
                        'Weryfikacja tożsamości nie działa — to tylko demo'
                    )
                ">

            Potwierdź swoje dane

        </button>


        <button class="outline"
                onclick="showData()">

            Dane dokumentu

        </button>


        <button class="outline"
                onclick="qr()">

            Pokaż kod QR

        </button>

    `;

    title.textContent = "Dokument Demo";
}


/* =========================
   DANE DOKUMENTU
========================= */

function showData() {

    modal.innerHTML = `

        <div class="sheet">

            <button class="close"
                    onclick="closeModal()">
                ×
            </button>


            <h2>
                Dane dokumentu
            </h2>


            <p>
                <b>Imię i nazwisko:</b>
                JAN DEMO
            </p>


            <p>
                <b>Obywatelstwo:</b>
                DEMONSTRACYJNE
            </p>


            <p>
                <b>Numer:</b>
                DEMO-000000
            </p>


            <p>
                <b>Status:</b>
                tylko demonstracja
            </p>


            <p class="small">
                Żadne dane z tego ekranu nie są
                prawdziwym dokumentem ani dowodem
                tożsamości.
            </p>

        </div>

    `;

    modal.classList.remove("hidden");
}


/* =========================
   USŁUGI
========================= */

const services = [

    [
        "🎫",
        "Bilety demo",
        "Przykładowe bilety kolejowe i komunikacyjne"
    ],

    [
        "🚌",
        "Bezpieczny autobus",
        "Informacje i ustawienia usługi demo"
    ],

    [
        "🌿",
        "Naruszenie środowiskowe",
        "Zgłoszenie przykładowego zdarzenia"
    ],

    [
        "✈️",
        "Wyjazd za granicę",
        "Informacje podróżne — wersja demonstracyjna"
    ],

    [
        "⚡",
        "Dodatek elektryczny",
        "Przykładowa usługa"
    ],

    [
        "💊",
        "eRecepta",
        "Tylko ekran demonstracyjny"
    ]

];


function servicesPage() {

    screen.innerHTML = `

        <div class="section-title">
            Usługi
        </div>

        ${services.map((service, index) => `

            <button class="list-btn"
                    onclick="service(${index})">

                <div class="ico">
                    ${service[0]}
                </div>

                <div class="grow">

                    <b>
                        ${service[1]}
                    </b>

                    <div class="small">
                        ${service[2]}
                    </div>

                </div>

                <div class="arrow">
                    ›
                </div>

            </button>

        `).join("")}

    `;
}


/* =========================
   USŁUGA
========================= */

function service(index) {

    const service = services[index];

    modal.innerHTML = `

        <div class="sheet">

            <button class="close"
                    onclick="closeModal()">
                ×
            </button>


            <h2>
                ${service[0]}
                ${service[1]}
            </h2>


            <p>
                ${service[2]}
            </p>


            <p>
                Ten ekran pokazuje wyłącznie
                przykładową funkcjonalność.
            </p>


            <button class="primary"
                    onclick="
                        toast('Funkcja demo została uruchomiona');
                        closeModal();
                    ">

                Uruchom demo

            </button>

        </div>

    `;

    modal.classList.remove("hidden");
}


/* =========================
   QR
========================= */

function qr() {

    screen.innerHTML = `

        <div class="qrbox">

            <h2>
                Kod QR
            </h2>

            <p class="small">
                Przykładowy kod — nie służy
                do weryfikacji dokumentu.
            </p>


            <div class="qr"></div>


            <button class="primary"
                    onclick="
                        toast('Kod demo odświeżony')
                    ">

                Odśwież kod

            </button>

        </div>

    `;
}


/* =========================
   WIĘCEJ
========================= */

function more() {

    screen.innerHTML = `

        <div class="section-title">
            Więcej
        </div>


        <button class="list-btn"
                onclick="showSettings()">

            <div class="ico">
                ⚙
            </div>

            <div class="grow">

                <b>
                    Ustawienia
                </b>

                <div class="small">
                    Preferencje aplikacji
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>


        <button class="list-btn"
                onclick="
                    toast(
                        'Powiadomienia: włączone (demo)'
                    )
                ">

            <div class="ico">
                ♧
            </div>

            <div class="grow">

                <b>
                    Powiadomienia
                </b>

                <div class="small">
                    Ustawienia powiadomień
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>


        <button class="list-btn"
                onclick="showAbout()">

            <div class="ico">
                i
            </div>

            <div class="grow">

                <b>
                    O aplikacji
                </b>

                <div class="small">
                    Wersja demonstracyjna
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </button>

    `;
}


/* =========================
   USTAWIENIA
========================= */

function showSettings() {

    modal.innerHTML = `

        <div class="sheet">

            <button class="close"
                    onclick="closeModal()">
                ×
            </button>


            <h2>
                Ustawienia
            </h2>


            <button class="setting"
                    onclick="
                        toast('Motyw jasny')
                    ">

                Motyw → Jasny

            </button>


            <button class="setting"
                    onclick="
                        toast(
                            'Powiadomienia przełączone'
                        )
                    ">

                Powiadomienia → przełącz

            </button>


            <button class="setting"
                    onclick="
                        toast(
                            'Dane demo zostały zachowane lokalnie'
                        )
                    ">

                Dane aplikacji

            </button>

        </div>

    `;

    modal.classList.remove("hidden");
}


/* =========================
   INFORMACJE
========================= */

function showAbout() {

    modal.innerHTML = `

        <div class="sheet">

            <button class="close"
                    onclick="closeModal()">
                ×
            </button>


            <h2>
                Dokumenty Demo
            </h2>


            <p>
                Interaktywny projekt HTML/CSS/JS
                inspirowany układem aplikacji
                dokumentowej.
            </p>


            <p>
                <b>
                    DEMO — NIE JEST DOKUMENTEM
                </b>
            </p>

        </div>

    `;

    modal.classList.remove("hidden");
}


/* =========================
   MODAL
========================= */

function closeModal() {

    modal.classList.add("hidden");
}


/* =========================
   KOMUNIKAT
========================= */

function toast(message) {

    closeModal();


    const element =
        document.createElement("div");

    element.className = "toast";

    element.textContent = message;


    document.body.appendChild(element);


    setTimeout(() => {

        element.remove();

    }, 2200);
}


/* =========================
   NAWIGACJA
========================= */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                page =
                    button.dataset.page;

                app();

            }
        );

    });


/* PRZYCISK WSTECZ */

document
    .getElementById("backBtn")
    .addEventListener(
        "click",
        () => {

            page = "home";

            app();

        }
    );


/* PRZYCISK EDYCJI */

document
    .getElementById("editBtn")
    .addEventListener(
        "click",
        () => {

            toast(
                "Tryb edycji demo"
            );

        }
    );


/* =========================
   GŁÓWNA FUNKCJA
========================= */

function app() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    const titles = {

        home: "Start",

        documents: "Dokumenty",

        services: "Usługi",

        qr: "Kod QR",

        more: "Więcej"

    };


    title.textContent =
        titles[page] || "Demo";


    if (page === "home") {
        home();
    }

    if (page === "documents") {
        documents();
    }

    if (page === "services") {
        servicesPage();
    }

    if (page === "qr") {
        qr();
    }

    if (page === "more") {
        more();
    }

}


/* URUCHOMIENIE */

app();