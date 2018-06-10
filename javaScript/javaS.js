var hospedes = [];
Login();


function Login() {
    var button = document.getElementById('btnLog');
        button.onclick = function() {
        LoginValidate();
        loadDataFromLocalStorage();
     
     };
     
    }

    function Cadastros(){
          var cadastro = cadastarHospede();
        }

    function ConsultaHospede(){
        var consultaHsp = consultaHospedes();
    }

    function CadastrosFunc(){
        var cadastro = cadastarFuncionario();
      }

  function ConsultaFunc(){
      var consultaHsp = consultaFuncionario();
  }




       function back(){
            var voltar = Voltar();
    }
    function Saveh(){
               SalvarH();
        
         }


   function LoginValidate(){
   var name = "admin";
   var password = "admin";
   var inputName = document.getElementById('name');
    var inputPassword = document.getElementById('password');
  
       if(inputName.value == name && inputPassword.value == password){
        window.open("Principal.html", "_self");
    }else{
        alert("usuario ou senha invalido");
    }
   }
function isValidField(field){
    return field.value.trim() != '';
}



function cadastarHospede(){
    window.open("cadastroHospede.html", "_self");
}

function Voltar(){
    window.open("Principal.html", "_self");
}

function SalvarH(){

    
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
    //clearTableH();
    populateTableH();
    saveLocaStorage();
    alert('botao funcionando');
}
function validateField(input) {
    return input.value.trim() != "";
}

function consultaHospedes(){
    window.open("ConsultarHospedes.html", "_self");
}
function cadastarFuncionario(){
    window.open("cadastroFuncionario.html", "_self");
}
function consultaFuncionario(){
    window.open("ConsultarFuncionario.html", "_self");
}

function clearFields(inputName, inputCPF, inputEmail, inputQuart) {
    inputName.value = "";
    inputCPF.value = "";
    inputEmail.value = "";
    inputQuart.value = "";
    inputName.focus();
}

/*function clearTableH(){
    var Table = document.getElementById('hospedes_table');
     var tBody = Table.tBodies[0];

    for (var i =  tBody.children.length; i > 0; i--){
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}
*/
function populateTableH(){
    var table = document.getElementById('hospedes_table')
    console.log(table);
    

    for(var i = 0; i < hospedes.length; i++){
        var hospede = hospedes[i];
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdCpf = document.createElement('td');
        var tdEmail = document.createElement('td');
        var tdPhone = document.createElement('td');
        var tdQuarto = document.createElement('td');

        tdName.innerHTML = hospede.name;
        tdCpf.innerHTML= hospede.cpf;
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

function saveLocaStorage(){
    var data = JSON.stringify(hospedes); //transforma array em string
    localStorage.setItem("hospedes",data);
}

function loadDataFromLocalStorage(){ // função sera chamada toda vez que carregar a pagina
    var hospedesSaved = localStorage.getItem("hospedes");
    if(hospedesSaved){ // testando se tem algo
        hospedes =JSON.parse(hospedesSaved);
        populateTable();
    }
}

