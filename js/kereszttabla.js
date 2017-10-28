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

    for (var i = 0; i < rows.length; i++) {
        a = "<table border=1 id = \"" + (i + 1) + "fordulo\" class = \"nagyonclass\"> <tr> <td colspan = 4> " + (i + 1) + ".forduló </td></tr> ";
        document.querySelector("body").innerHTML += a;
        var meccsek = rows[i].matches;
        console.log(meccsek);
        var content = "";
        for (var j = 0; j < 2; j++) {
            var tr = "<tr>";
            tr += "<td>" + (j + 1) + "</td>";
            tr += "<td>" + "1. csapat" + "</td>";
            tr += "<td>-</td>";
            tr += "<td>" + "2. csapat" + "</td>";
            tr += "</tr>";
            content += tr;
            console.log(tr);
            /* 
                        var tr = "<tr>";
                        tr += "<td>" + (j + 1) + "</td>";
                        tr += "<td>" + meccsek[j].team1[j].name + "</td>";
                        tr += "<td>-</td>";
                        tr += "<td>" + meccsek[j].team2[j].name + "</td>";
                        tr += "</tr>";
                        content += tr;*/
            document.querySelector("body").innerHTML += content;
        }

        document.querySelector("body").innerHTML += "</table><br>";
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