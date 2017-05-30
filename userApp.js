var myApp = angular.module('myApp', []);
myApp.controller('userCtrl', function ($http, $window) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.salvar = false;
    ctrl.alterar = false;
    ctrl.showAlterarButton = true;
    ctrl.showUserButtons = true;


    //Get
    $http.get("/pms_producao/PMS/GetUsuarios")
      .then(function (response) {
          ctrl.usuarios = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });

    //Add
    ctrl.AddUser = function () {
        $http.post("/pms_producao/PMS/AddUsuarios", ctrl.newData);
        location.reload();
    }

    //Limpar
    ctrl.Clear = function () {
        ctrl.newData = {};
        ctrl.verificaDadosLimpar() = true;
    }

    //Alterar
    ctrl.AlterUser = function () {
        $http.post("/pms_producao/PMS/AlterUsuarios", ctrl.newData);
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }

    ctrl.HabilitarEdicao = function () {
        ctrl.alterar = false;
        ctrl.showAlterarButton = false;
        ctrl.salvar = true;
        ctrl.showUserButtons = true;      

    }

    ctrl.Reload = function () {
        ctrl.newData = {};
        ctrl.btnAdd = true;
        ctrl.btnSave = false;
        ctrl.salvar = false;
        ctrl.alterar = false;
        ctrl.showAlterarButton = true;
        ctrl.showUserButtons = true;
        ctrl.verificaDadosLimpar() = true;

        ctrl.newData.$setPristine();
    }

    ctrl.DelUser = function () {
        confirma = confirm("Tem certeza que deseja excluir esse usuário?");
        if (confirma) {
            $http.post("/pms_producao/PMS/DelUsuarios", ctrl.newData).then(function (response) {
                if ((response.data) == "True") {
                    window.alert("Usuário excluído");
                    location.reload();
                }
                else
                    window.alert("Usuario vinculado a um projeto. Não é possível deletar.");
            })
        }
    }

    //Selecionar 
    ctrl.SelectUser = function (user) {
        ctrl.newData = user;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
        ctrl.showAlterarButton = true;
        ctrl.visualizar = true;
        ctrl.alterar = true;
        ctrl.salvar = false;
        ctrl.showUserButtons
    }

    ctrl.verificaDadosLimpar = function () {
        if (ctrl.newData == null)
            return true;
        else
            return false;
    }
});
