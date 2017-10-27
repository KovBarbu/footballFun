var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json",
    function (tableData) {
        fillTable(tableData);
    }
);

function fillTable(rows) {

    rows = rows.rounds;
    var table = document.getElementById("tabla");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        a = "<table border=1 id = \"" + (i + 1) + "fordulo\" class = \"nagyonclass\"> <tr> <td colspan = 4> " + (i + 1) + ".forduló </td></tr> ";
        document.querySelector("body").innerHTML += a;
        for (var j = 0; j < rows.matches[i].length; j++) {

            var tr = "<tr>";
            tr += "<td>" + (j + 1) + "</td>";
            tr += "<td>" + rows.matches[j].team1.name + "</td>";
            tr += "<td>-</td>";
            tr += "<td>" + rows.matches[j].team2.name + "</td>";
            tr += "</tr>";
            content += tr;
            table.querySelector("body").innerHTML += content;
        }

        document.querySelector("body").innerHTML += "</table>";
    }

    // 
}
/*
function fillTable(rows) {
    // 
    console.log(rows);
    var table = document.getElementById("tabla");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        if (rows.d)
            var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}*/