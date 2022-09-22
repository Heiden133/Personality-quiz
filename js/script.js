// Database array below. 5 possible answers from answA to answE.

const database = [
    {
        question: "1",
        a: "Lubię otrzymywać wyrazy uznania",
        b: "Lubię, gdy mnie ktoś przytula",
        answA: "a",
        answE: "b",
    },
    {
        question: "2",
        a: "Lubię spędzać czas sam na sam z osobą, która jest mi szczególnie droga",
        b: "Czuję miłość, gdy ktoś mi pomaga",
        answB: "a",
        answD: "b",
    },
    {
        question: "3",
        a: "Lubię, gdy ludzie coś mi dają",
        b: "Lubię spokojne wizyty u przyjaciół i bliskich mi osób",
        answC: "a",
        answB: "b",
    },
    {
        question: "4",
        a: "Czuję miłość, gdy ludzie robią coś, by mi pomóc",
        b: "Czuję miłość, gdy ludzie mnie dotykają",
        answD: "a",
        answB: "b",
    },
    {
        question: "5",
        a: "Czuję miłość, gdy ktoś, kogo kocham albo cenię, otoczy mnie ramieniem",
        b: "Czuję miłość, gdy dostaję prezent od osoby, którą kocham albo cenię",
        answE: "a",
        answC: "b",
    },
    {
        question: "6",
        a: "Lubię gdzieś wyjść z przyjaciółmi i bliskimi",
        b: "Lubię przybić piątkę albo trzymać za rękę tę szczególną osobę",
        answB: "a",
        answE: "e",
    },
    {
        question: "7",
        a: "Bardzo ważne są dla mnie widoczne oznaki miłości (podarunki)",
        b: "Czuję miłość, gdy ludzie mnie chwalą",
        answC: "a",
        answE: "b",
    },
    {
        question: "8",
        a: "Lubię siedzieć blisko ludzi, których towarzystwo sprawia mi radość",
        b: "Lubię, gdy ludzie mówią mi, że jestem atrakcyjna",
        answE: "a",
        answA: "b",
    },
    {
        question: "9",
        a: "Lubię spędzać czas z przyjaciółmi i bliskimi",
        b: "Lubię otrzymywać prezenty od przyjaciół i bliskich",
        answB: "a",
        answC: "b",
    },
    {
        question: "10",
        a: "Ważne są dla mnie wyrażenia afirmatywne",
        b: "Czuję, że ktoś mnie kocha, gdy mi pomaga",
        answA: "a",
        answD: "b",
    },
    {
        question: "11",
        a: "Lubię przebywać i robić coś z przyjaciółmi i bliskimi",
        b: "Lubię, gdy ludzie mówią mi dobre rzeczy",
        answA: "b",
        answB: "a",
    },
    {
        question: "12",
        a: "Ważniejsze dla mnie jest to, co ktoś robi, niż to, co mówi",
        b: "Dzięki uściskom czuję więź z innymi i własną wartość",
        answA: "a",
        answE: "b",
    },
    {
        question: "13",
        a: "Cenię pochwały i staram się unikać krytykowania innych",
        b: "Kilka małych podarunków znaczy dla mnie więcej niż jeden duży",
        answA: "a",
        answC: "b",
    },
    {
        question: "14",
        a: "Czuję z kimś bliskość, gdy rozmawiamy albo robimy coś razem",
        b: "Czuję więź z moimi przyjaciółmi i bliskimi, gdy często mnie dotykają",
        answB: "a",
        answE: "b",
    },
    {
        question: "15",
        a: "Lubię, gdy ludzie chwalą moje osiągnięcia",
        b: "Wiem, że ludzie mnie kochają, gdy robią dla mnie coś, czego nie lubią robić",
        answA: "a",
        answD: "b",
    },
    {
        question: "16",
        a: "Lubię, gdy przyjaciele i bliscy dotykają mnie, kiedy przechodzą obok",
        b: "Lubię, gdy ludzie mnie słuchają i wykazują szczere zainteresowanie tym, co mówię",
        answE: "a",
        answB: "b",
    },
    {
        question: "17",
        a: "Czuję się kochana, gdy przyjaciele i bliscy pomagają mi w pracy i w realizacji moich projektów",
        b: "Bardzo lubię otrzymywać prezenty od przyjaciół i bliskich",
        answD: "a",
        answC: "b",
    },
    {
        question: "18",
        a: "Lubię, gdy ludzie chwalą mój wygląd",
        b: "Czuję miłość, gdy ludzie starają się zrozumieć moje uczucia",
        answA: "a",
        answB: "b",
    },
    {
        question: "19",
        a: "Czuję się bezpiecznie, gdy dotyka mnie ta szczególna osoba",
        b: "Czuję miłość dzięki drobnym przysługom",
        answE: "a",
        answD: "b",
    },
    {
        question: "20",
        a: "Doceniam wiele rzeczy, które robi dla mnie ta szczególna osoba",
        b: "Lubię prezenty, które ten ktoś mi robi",
        answD: "a",
        answC: "b",
    },
    {
        question: "21",
        a: "Bardzo lubię to uczucie, gdy ktoś obdarza mnie swoją niepodzielną uwagą",
        b: "Bardzo lubię to uczucie, gdy ktoś wyświadcza mi drobne przysługi",
        answB: "a",
        answD: "b",
    },
    {
        question: "22",
        a: "Czuję miłość, gdy ktoś uczci moje urodziny i da mi prezent",
        b: "Czuję miłość, gdy ktoś uczci moje urodziny i powie coś dobrego",
        answC: "a",
        answA: "b",
    },
    {
        question: "23",
        a: "Poznaję, że ktoś o mnie myśli, gdy daje mi prezent",
        b: "Czuję miłość, gdy ktoś pomaga mi w pracach domowych",
        answC: "a",
        answD: "b",
    },
    {
        question: "24",
        a: "Doceniam, gdy ktoś słucha mnie cierpliwie i nie przerywa mi",
        b: "Doceniam, gdy ktoś ważne daty upamiętnia prezentami",
        answB: "a",
        answC: "b",
    },
    {
        question: "25",
        a: "Cieszę się, że bliscy troszczą się o mnie i pomagają mi w realizacji codziennych zadań",
        b: "Lubię dłuższe wycieczki z tą szczególną osobą",
        answD: "a",
        answB: "b",
    },
    {
        question: "26",
        a: "Lubię całusy i przytulanie od ludzi, którzy są mi bliscy",
        b: "Cieszą mnie prezenty, które dostaję bez żadnego powodu",
        answA: "a",
        answC: "b",
    },
    {
        question: "27",
        a: "Lubię, gdy ludzie mówią mi, że mnie cenią",
        b: "Lubię, gdy osoba, z którą rozmawiam, patrzy na mnie",
        answA: "a",
        answB: "b",
    },
    {
        question: "28",
        a: "Prezenty od przyjaciela albo od ukochanej osoby zawsze są dla mnie ważne",
        b: "Czuję się dobrze, gdy dotyka mnie przyjaciel albo ukochana osoba",
        answC: "a",
        answE: "b",
    },
    {
        question: "29",
        a: "Czuję miłość, gdy ktoś z ochotą spełnia jakąś moją prośbę",
        b: "Czuję miłość, gdy ktoś mówi mi, że mnie ceni",
        answD: "a",
        answA: "b",
    },
    {
        question: "30",
        a: "Każdego dnia potrzebuję dotyku",
        b: "Każdego dnia potrzebuję wyrażeń afirmatywnych",
        answE: "a",
        answA: "b",
    },
    {
        question: "31",
        a: "Chciałbym, żeby moja partnerka załatwiała sprawunki lub tankowała paliwo do samochodu",
        b: "Chciałbym, żeby partnerka częściej mnie dotykała",
        answD: "a",
        answE: "b",
    },
    {
        question: "32",
        a: "Chciałbym, aby partnerka objęła mnie w obecności innych osób",
        b: "d czasu do czasu chciałbym dostać od partnerki jakąś niespodziankę",
        answE: "a",
        answC: "b",
    },
];

// End of database.

const test = document.getElementById("test");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const submitBtn = document.getElementById("submit");

let currentTest = 0;
let answACount = 0;
let answBCount = 0;
let answCCount = 0;
let answDCount = 0;
let answECount = 0;


loadTest();

function loadTest() {
    deselectAnswers();

    const currentTestDatabase = database[currentTest];
    questionEl.innerText = currentTestDatabase.question;
    a_text.innerText = currentTestDatabase.a;
    b_text.innerText = currentTestDatabase.b;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === database[currentTest].answA) {
            answACount++;
        } else if (answer === database[currentTest].answB) {
            answBCount++;
        } else if (answer === database[currentTest].answC) {
            answCCount++;
        } else if (answer === database[currentTest].answD) {
            answDCount++;
        } else if (answer === database[currentTest].answE) {
            answECount++;
        } else {
            console.log("please select an answer");
        }
    }
//testing
console.log("A: ", answACount);
console.log("B: ", answBCount);
console.log("C: ", answCCount);
console.log("D: ", answDCount);
console.log("E: ", answECount);

    currentTest++;
    if (currentTest < database.length) {
        loadTest();
    } else {
        test.innerHTML = `
            <h2>Gratulacje!
            Twój wynik to:
            </h2>
            <h3>
            A. Wyrażenia afirmatywne = ${answACount} <br>
            B. Dobry czas = ${answBCount} <br>
            C. Podarunki = ${answCCount} <br>
            D. Drobne przysługi = ${answDCount} <br>
            E. Dotyk = ${answECount} <br>
            </h3>
            <button onclick="location.reload()">Od nowa</button>
        `;
    }
    
});





