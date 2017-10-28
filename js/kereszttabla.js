getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json",
    function (tableData) {
        fillTable(tableData);
    }
);

/*function fillTable(rows) {

    rows = rows.rounds;
    var table = document.getElementById("tabla");

    for (var i = 0; i < rows.length; i++) {
        var ford = i + 1;
        a = "<table border=1 id =" + ford + " class = \"nagyonclass\"> <tr> <td colspan = 4> " + ford + ".forduló </td></tr> ";
        document.getElementById("tablediv").innerHTML += a;
        table = document.getElementById(ford);

    }

}*/

function fillTable2(rows) {
    var table = document.querySelector("table");
    var content = "";


    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];

        for (var j = 0; j < row.matches.length; j++) {
            var match = row.matches[j];
            var tr = "<tr>";

            tr += "<td>" + (i + 1) + "</td>";
            tr += "<td>" + match.date + "</td>";
            tr += "<td>" + match.team1.name + "</td>";
            tr += "<td>" + match.team2.name + "</td>";
            tr += "<td>" + match.score1 + "</td>";
            tr += "<td>" + match.score2 + "</td>";

            tr += "</tr>";
            content += tr;
        }
        table.querySelector("tbody").innerHTML = content;

    }
}


/*var meccsek = rows[i].matches;
        var content = "";
        for (var j = 0; j < 2; j++) {
            var tr = "<tr>";
            tr += "<td>" + ford + "</td></tr><tr>";
            tr += "<td colspan=2>" + "1. csapat" + "</td>";
            tr += "<td>-</td>";
            tr += "<td colspan=2>" + "2. csapat" + "</td>";
            tr += "</tr>";
            content += tr;
            console.log(table);
            document.querySelector("body").innerHTML += content;
        }

        document.querySelector("body").innerHTML += "</table><br>";
    }


}*/
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