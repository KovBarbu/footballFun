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
        for (var j = 0; j < rows[i].matches.length; j++) {
            if (code === matches.team1.code || code === matches.team2.code); {
                var tr = "<tr>";

                tr += "<td>" + (i + 1) + "</td>";
                tr += "<td>" + rows[i].matches.date + "</td>";
                tr += "<td>" + rows[i].matches.team1.name + "</td>";
                tr += "<td>" + rows[i].matches.team2.name + "</td>";
                tr += "<td>" + rows[i].matches.score1 + "</td>";
                tr += "<td>" + rows[i].matches.score2 + "</td>";

                tr += "</tr>";
                content += tr;
            }
        }
        table.querySelector("tbody").innerHTML = content;

    }


}