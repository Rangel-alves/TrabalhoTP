loadDataFromLocalStorageF();

function ConsultaFunc() {
    var consultaFunc = consultaFuncionario();
}

function consultaFuncionario() {
    window.open("ConsultarFuncionario.html", "_self");
    clearTableF();
    populateTableF();
}

function clearTableF(){
    var Table = document.getElementById('func_table');
     var tBody = Table.tBodies[0];

    for (var i =  tBody.children.length; i > 0; i--){
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTableF() {
    var table = document.getElementById('func_table')


    for (var i = 0; i < funcionarios.length; i++) {
        var funcionario = funcionarios[i];
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdCpf = document.createElement('td');
        var tdEmail = document.createElement('td');
        var tdPhone = document.createElement('td');
        var tdPis = document.createElement('td');

        tdName.innerHTML = funcionario.name;
        tdCpf.innerHTML = funcionario.cpf;
        tdEmail.innerHTML = funcionario.email;
        tdPhone.innerHTML = funcionario.phone;
        tdPis.innerHTML = funcionario.pis;


        tr.appendChild(tdName);
        tr.appendChild(tdCpf)
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);
        tr.appendChild(tdPis);

        table.tBodies[0].appendChild(tr);

    }
}

function loadDataFromLocalStorageF() { // função sera chamada toda vez que carregar a pagina
    var FuncionariosSaved = localStorage.getItem("funcionarios");
    if (FuncionariosSaved) { // testando se tem algo
        funcionarios= JSON.parse(FuncionariosSaved);
        populateTableF();
    }
}