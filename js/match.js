var tableData = [];

var code = location.href.split("=")[1];
var csapat = location.href.split("=")[3];
if (csapat == "Brighton%20&%20Hove%20Albion") {
    csapat = "Brighton";
}
csapat = csapat.replace("%20", " ");

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json",
    function (data) {
        tableData = data.rounds;
        fillTable2(tableData);
        csapatlogok(csapat);
    }
);

function fillTable2(rows) {
    var table = document.querySelector("table");
    var content = "";


    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];

        for (var j = 0; j < row.matches.length; j++) {
            var match = row.matches[j];


            if (code === match.team1.code || code === match.team2.code) {
                var tr = "<tr>";
                // két random generált változó mondja meg, hogy mennyi lett a meccs végeredménye  
                if (Date.parse(match.date) <= Date.now()) {
                    var hazai = Math.floor((Math.random() * 6) + 1);
                    var vendeg = Math.floor((Math.random() * 6) + 1);
                }
                tr += "<td>" + (i + 1) + "</td>";
                tr += "<td>" + match.date + "</td>";
                // A győztes csapat dőlt lesz, amennyiben az első csapat nyert
                if (hazai > vendeg) {
                    tr += "<td><em>" + match.team1.name + "</em></td>";
                } else {
                    tr += "<td>" + match.team1.name + "</td>";
                }
                //Random generált eredmények akkor ,ha a dátum kisebb,mint a futtatás pillanata.
                if (Date.parse(match.date) <= Date.now()) {
                    tr += "<td><strong>" + hazai + "</strong></td>";
                    tr += "<td> - </td>";
                    tr += "<td><strong>" + vendeg + "</strong></td>";
                } else {
                    tr += "<td colspan=3>Később játszott</td>";
                }
                // megintcsak dőltté teszi a győztes csapatot, amennyiben az a vendég csapat
                if (vendeg > hazai) {
                    tr += "<td><em>" + match.team2.name + "</em></td>";
                } else {
                    tr += "<td>" + match.team2.name + "</td>";
                }
                tr += "</tr>";
                content += tr;
            }
        }
        table.querySelector("tbody").innerHTML = content;

    }


}

function csapatlogok(csapat) {
    // ide majd kellene egy kis logo CSS
    var fejresz = "<h2><img src='jpegs/" + csapat + ".jpg' class='header-logo-fejresz' alt='" + csapat + "'-logo' width=80>";
    fejresz += " A(z) " + csapat + " mérkőzései sorrendben! </h2>";
    document.getElementById("elocucc").innerHTML = fejresz;

}


/*
Barbi!! 
Kérlek szépen próbáld meg nekem megcsinálni azt, hogy ha a csapat kódja = null, 
akkor név szerint keressen a meccsek között és azokat írja ki a match.js a meccsek oldalán! O:)

Ezt találtam ki még, mert ugye ez így hiba, hogy ott nem ír ki semmit :/

Köszi!

Ha bármim kérdés van ,hívj a 30-asomon, a FB csoportban megtalálod :)

*/

/*
Zsófi:
Kérlek szépen ,hogy nézd meg hogy mit sikerült elbarmolnom. :)
A meccses gombos Barbis csodára tettem logokat fel. Egyrészt szeretném kérni, hogy minden oldalon legyen egy nagyon halvány háttérkép
valami marhanagy premiere league oroszlánnal, biztos lehet ilyet lopni netről.  Én egy szimpit találtam, esetleg azt megpróbálhatnád 
berakni, a hatter-pl.jpg a neve a jpegs mappában. 

Ezen kívül a  főoldalon az angol bajnokság fejrész szerintem csúnya. A csík oké, de mindneképp körbevágott logot kell majd keresni  
holnap hozzá, meg a szöveg sem tetszik, azt holnap átírnám. 
*/


/*
Holnapra még új features ötleteim, mondjátok majd el, hogy nektek bejön -e:
1. a Főoldalon szeretnék nem csak csapatokat , hanem mondjuk 10 fordulóhoz random eredményeket (meccs, győzelem ,döntetlen ,vereség, pont)
    A pont nyilván az előtte lévő 3 adatból generálódna
2. Szeretnék pont szerinti összesítés gombot is csinálni, erről egyelőre még nincs ötletem, de remélem hamarosan lesz.

3.: Valami háttérkép (amit fenn írtam)
4: Minden csapatra működjön a meccsei gomb, a nullosokra is

NAgyjából ennyi, ha bármit kihagytam, akkor nyugodtan szóljatok!

*/