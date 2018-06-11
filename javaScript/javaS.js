var hospedes = [];
var funcionarios= [];
Login();


function Login() {
    var button = document.getElementById('btnLog');
    button.onclick = function () {
        LoginValidate();
       

    };

}

function Cadastros() {
    var cadastro = cadastarHospede();
}



function CadastrosFunc() {
    var cadastro = cadastarFuncionario();
}





function back() {
    var voltar = Voltar();
}
function Saveh() {
    SalvarH();

}
function SaveF(){
    SalvarF();
}


function LoginValidate() {
    var name = "admin";
    var password = "admin";
    var inputName = document.getElementById('name');
    var inputPassword = document.getElementById('password');

    if (inputName.value == name && inputPassword.value == password) {
        window.open("Principal.html", "_self");
    } else {
        alert("usuario ou senha invalido");
    }
}
function isValidField(field) {
    return field.value.trim() != '';
}



function cadastarHospede() {
    window.open("cadastroHospede.html", "_self");
}

function Voltar() {
    window.open("Principal.html", "_self");
}

function SalvarH() {


    var inputName = document.getElementById('nameH');
    var inputCPF = document.getElementById('cpfH');
    var inputEmail = document.getElementById('emailH');
    var inputPhone = document.getElementById('telH');
    var inputQuart = document.getElementById('quartoH');

    var hospede = {
        name: inputName.value,
        cpf: inputCPF.value,
        email: inputEmail.value,
        tel: inputPhone.value,
        quarto: inputQuart.value
    };
       hospedes.push(hospede);
     saveLocaStorageH();
     clearFields();
      }
function validateField(input) {
    return input.value.trim() != "";
}

function cadastarFuncionario() {
    window.open("cadastroFuncionario.html", "_self");
}


function clearFields(inputName, inputCPF, inputEmail,inputPhone, inputQuart) {
    inputName.value = "";
    inputCPF.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputQuart.value = "";
    inputName.focus();
}



function saveLocaStorageH() {
    var data = JSON.stringify(hospedes); //transforma array em string
    localStorage.setItem("hospedes", data);
}


function   SalvarF(){
    var inputName = document.getElementById('nameF');
    var inputCPF = document.getElementById('cpfF');
    var inputEmail = document.getElementById('emailF');
    var inputPhone = document.getElementById('telF');
    var inputPis = document.getElementById('pisF');

    var funcionario = {
        name: inputName.value,
        cpf: inputCPF.value,
        email: inputEmail.value,
        tel: inputPhone.value,
        pis: inputPis.value
    };
    funcionarios.push(funcionario);
     saveLocaStorageF();
           }

           function saveLocaStorageF() {
            var dataF = JSON.stringify(funcionarios); //transforma array em string
            localStorage.setItem("funcionarios", dataF);
        }
        

