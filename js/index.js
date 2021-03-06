var tableData = [];

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.clubs.json",
    function (data) {
        tableData = data.clubs;
        fillTable(tableData);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        // Ponttáblázathoz random szám generálása minden írásnál (mivel eltárolni nem tudjuk)
        var gyozelem = Math.floor((Math.random() * 10));
        var dontetlen = Math.floor((Math.random() * (10 - gyozelem)));
        var vereseg = 10 - gyozelem - dontetlen;
        var pont = (gyozelem * 3) + dontetlen;
        rows.key = pont;
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += "<td>" + gyozelem + "</td>";
        tr += "<td>" + dontetlen + "</td>";
        tr += "<td>" + vereseg + "</td>";
        tr += "<td>" + pont + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '=?csapat=' + rows[i].name + '">Összes meccs</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}

//Név szerinti rendezés A-Z
function nevsor() {

    tableData.sort(function (a, b) {
        if (!a.name) {
            return -1;
        } else if (!b.name) {
            return 1;
        }
        return a.name.localeCompare(b.name);
    });


    fillTable(tableData);
}

//Név szeirint visszafelé rendezés
function lenevsor() {

    tableData.sort(function (a, b) {
        if (!a.name) {
            return -1;
        } else if (!b.name) {
            return 1;
        }
        return b.name.localeCompare(a.name);
    });


    fillTable(tableData);
}

// Ez a szűrt tábla kirajzolása rész
function szurTable(rows, searchtext) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var gyozelem = Math.floor((Math.random() * 10));
        var dontetlen = Math.floor((Math.random() * (10 - gyozelem)));
        var vereseg = 10 - gyozelem - dontetlen;
        var pont = (gyozelem * 3) + dontetlen;
        rows.key = pont;
        // Ha az indexOf metódus megtalálja, akkor rajzol csak sorokat
        if (rows[i].name.indexOf(searchtext) != -1) {
            var tr = "<tr>";
            tr += "<td>" + (i + 1) + "</td>";
            tr += "<td>" + rows[i].name + "</td>";
            tr += "<td>" + rows[i].code + "</td>";
            tr += "<td>" + gyozelem + "</td>";
            tr += "<td>" + dontetlen + "</td>";
            tr += "<td>" + vereseg + "</td>";
            tr += "<td>" + pont + "</td>";
            tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '=?csapat=' + rows[i].name + '">Összes meccs</a></td>';
            tr += "</tr>";
            content += tr;
        }
    }

    table.querySelector("tbody").innerHTML = content;
}

// Csapatnévre szűrés -->  gyakrorlatilag egy textben tárolja a számot és meghív egy szűrt tábla rajzolást.
function szures() {
    var searchtext = document.getElementById("searchtext").value;
    console.log(searchtext);
    szurTable(tableData, searchtext);
}


document.getElementById("sort-name").addEventListener("click", nevsor);
document.getElementById("sort-namele").addEventListener("click", lenevsor);
document.getElementById("szuresgomb").addEventListener("click", szures);