var myApp = angular.module('myApp', []);
myApp.controller('projetosCtrl', function ($http, $window) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.btnSave = false;
    ctrl.Classificacao = '';
    ctrl.salvar = false;
    ctrl.alterar = false;
    ctrl.showAlterarButton = true;

    // USUARIOS
    //==========================================================================================

    //GetUsuarios
    $http.get("/pms_producao/PMS/GetUsuarios")
      .then(function (response) {
          ctrl.usuarios = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });

    //AddUsuarios
    ctrl.AddUser = function () {
        $http.post("/pms_producao/PMS/AddUsuarios", ctrl.newData);
        location.reload();
    }

    //DeleteUsuario
    ctrl.DeleteUser = function () {
        $http.post("/pms_producao/PMS/DelUsuarios", ctrl.newData);
        location.reload();
    }

    //Limpar
    ctrl.Clear = function () {
        ctrl.newData = {};
    }


    //Alterar
    ctrl.AlterUser = function () {
        $http.post("/pms_producao/PMS/AlterUsuarios", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }

    // PROJETOS
    //==========================================================================================
    //GetProjetos
    $http.get("/pms_producao/PMS/GetProjetos")
      .then(function (response) {
          ctrl.projetos = response.data;
      })

      .catch(function (response) {
          console.log(response);
      });

    //AddProjetos
    ctrl.AddProjetos = function () {
        $http.post("/pms_producao/PMS/AddProjetos", ctrl.newData);
        location.reload();
    }

    //DeleteProjetos

    ctrl.DelProjetos = function () {
        $http.post("/pms_producao/PMS/DelProjetos", ctrl.newData);
        location.reload();
    }

    //Alterar
    ctrl.AlterProjetos = function () {
        $http.post("/pms_producao/PMS/AlterProjetos", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }

    // OCORRÊNCIAS
    //==========================================================================================

    //GetOcorrencias
    ctrl.GetOcorrencias = function () {
        $http.post("/pms_producao/PMS/GetListaOcorrencias/" + ctrl.newData.Id)
          .then(function (response) {
              ctrl.ocurrences = response.data;
          })
          .catch(function (response) {
              console.log(response);
          });
    }

    //AddOcorrencias
    ctrl.AddOcorrencia = function () {
        $http.post("/pms_producao/PMS/AddOcorrencias/" + ctrl.newData.Id, { Desc: ctrl.newData.Desc, Titulo: ctrl.newData.Titulo });
        location.reload();
    }

    ctrl.HabilitarEdicao = function () {
        ctrl.alterar = false;
        ctrl.showAlterarButton = false;
        ctrl.salvar = true;
    }

    ctrl.Reload = function () {

        ctrl.newData = {};
        ctrl.btnAdd = true;
        ctrl.btnSave = false;
        ctrl.salvar = false;
        ctrl.alterar = false;
        ctrl.showAlterarButton = true;
    }

    ctrl.ExcluirUser = function () {
        $http.post("/pms_producao/PMS/DelUsuarios", ctrl.newData).then(function (response) {
            if ((response.data) == "True")
                window.alert("excluiu");
            else
                window.alert("Usuario Vinculado!");
        })
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
    }

});