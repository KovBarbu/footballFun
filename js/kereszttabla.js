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
        console.log(row.name);
        var tr = "<tr>";
        tr += "<td colspan=6>" + row.name + "</td>";
        tr += "</tr>";
        tr += "<tr>";
        tr += "<th>Forduló</th>";
        tr += "<th>Dátum</th>";
        tr += "<th>Hazai</th>";
        tr += "<th>Vengég</th>";
        tr += "<th colspan=2>Eredmény</th>";
        tr += "<th></th>";
        tr += "</tr>";
        tr += "<tr>";
        content += tr;
        for (var j = 0; j < row.matches.length; j++) {
            var match = row.matches[j];
            //if (row.name = "Matchday 1") {
            var tr = "<tr>";

            tr += "<td>" + (i + 1) + "</td>";
            tr += "<td>" + match.date + "</td>";
            tr += "<td>" + match.team1.name + "</td>";
            tr += "<td>" + match.team2.name + "</td>";
            tr += "<td>" + match.score1 + "</td>";
            tr += "<td>" + match.score2 + "</td>";

            tr += "</tr>";
            content += tr;
            //}
        }
        table.querySelector("tbody").innerHTML = content;

    }


}