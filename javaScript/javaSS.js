loadDataFromLocalStorage();

function ConsultaHospede() {
    var consultaHsp = consultaHospedes();
}


function ConsultaFunc() {
    var consultaHsp = consultaFuncionario();
}

clearTableH();
populateTableH();
saveLocaStorage();

function clearTableH(){
    var Table = document.getElementById('hospedes_table');
     var tBody = Table.tBodies[0];

    for (var i =  tBody.children.length; i > 0; i--){
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTableH() {
    var table = document.getElementById('hospedes_table')


    for (var i = 0; i < hospedes.length; i++) {
        var hospede = hospedes[i];
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdCpf = document.createElement('td');
        var tdEmail = document.createElement('td');
        var tdPhone = document.createElement('td');
        var tdQuarto = document.createElement('td');

        tdName.innerHTML = hospede.name;
        tdCpf.innerHTML = hospede.cpf;
        tdEmail.innerHTML = hospede.email;
        tdPhone.innerHTML = hospede.phone;
        tdQuarto.innerHTML = hospede.quarto;


        tr.appendChild(tdName);
        tr.appendChild(tdCpf)
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);
        tr.appendChild(tdQuarto);

        table.tBodies[0].appendChild(tr);

    }
}

function loadDataFromLocalStorage() { // função sera chamada toda vez que carregar a pagina
    var hospedesSaved = localStorage.getItem("hospedes");
    if (hospedesSaved) { // testando se tem algo
        hospedes = JSON.parse(hospedesSaved);
        populateTable();
    }
}