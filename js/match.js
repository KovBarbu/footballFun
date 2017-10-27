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
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}
}