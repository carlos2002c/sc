var logado = 0;

function createLogin(){    
    var login;
    
    if(!logado){
        document.getElementById("container").innerHTML = "";
        document.getElementById("container").innerHTML = "";
        login = "<div class=\"login\">";
        login += "<h1>Login</h1>";
        login += "<div class=\"textbox\">";
        login += "<i class=\"fas fa-user-circle\"></i>";
        login += "<input type=\"text\" name=\"id\" id=\"id\" placeholder=\"ID\">";
        login += "<br>";
        login += "<i class=\"fas fa-lock\"></i>";
        login += "<input type=\"senha\" name=\"senha\" id=\"senha\" placeholder=\"Senha\">";
        login += "</div>";
        login += "<p>Função: <select name=\"funcao\" id=\"funcao\">";
        login += "<option value=\"vazio\">Vazio</option>";
        login += "<option value=\"paciente\">Paciente</option>";
        login += "<option value=\"funcionario\">Funcionário</option>";
        login += "<option value=\"medico\">Médico</option>";
        login += "</select></p>";
        login += "<button onclick=\"logar()\">Entrar</button>";
        login += "<a href=\"assets/html/menu.html\" id=\"link\">";
        login += "</div>";

        document.getElementById("container").innerHTML = login;
        logado = 1;
    }else{
        document.getElementById("container").innerHTML = "";
        logado = 0;
    }
}

function logar(){
    if(document.getElementById("funcao").value == "vazio"){
        alert("Campo(s) Vazio(s)");
        return;
    }

    if(document.getElementById("funcao").value == "paciente"){
        document.getElementById("link").click();
    }
    
}