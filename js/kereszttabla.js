var tableData = [];

var code = location.href.split("=")[1];

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json",
    function (data) {
        tableData = data.rounds;
        fillTable2(tableData);
    }
);

function fillTable2(rows) {
    var table = document.querySelector("table");
    var content = "";


    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var tr = "<tr>";
        tr += "<td colspan=7 class='matchday'>" + row.name + "</td>";
        tr += "</tr>";
        tr += "<tr>";
        tr += "<th>Forduló</th>";
        tr += "<th>Dátum</th>";
        tr += "<th>Hazai</th>";
        tr += "<th colspan=3>Eredmény</th>";
        tr += "<th>Vendég</th>";
        tr += "</tr>";
        tr += "<tr>";
        content += tr;
        for (var j = 0; j < row.matches.length; j++) {
            var match = row.matches[j];
            // két random generált változó mondja meg, hogy mennyi lett a meccs végeredménye
            if (Date.parse(match.date) <= Date.now()) {
                var hazai = Math.floor((Math.random() * 6) + 1);
                var vendeg = Math.floor((Math.random() * 6) + 1);
            }
            var tr = "<tr>";
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
        table.querySelector("tbody").innerHTML = content;

    }


}