var myApp = angular.module('myApp', []);
myApp.controller('projectCtrl', function ($http, $window) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.Classificacao = '';
    ctrl.salvar = false;
    ctrl.alterar = false;
    ctrl.showAlterarButton = true;
    ctrl.showProjectButtons = true;

    //Get
    $http.get("/pms_producao/PMS/GetProjetos")
      .then(function (response) {
          ctrl.projetos = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });

    //GetUsers
    $http.get("/pms_producao/PMS/GetUsuarios")
     .then(function (response) {
         ctrl.usuarios = response.data;
     })
     .catch(function (response) {
         console.log(response);
     });


    //Add
    ctrl.AddProjetos = function () {
        $http.post("/pms_producao/PMS/AddProjetos", ctrl.newData);
        location.reload();
    }

    //Delete
    ctrl.DelProjetos = function () {
        $http.post("/pms_producao/PMS/ExcluirProjeto", ctrl.newData);
        location.reload();
    }

    //Alterar
    ctrl.AlterProjetos = function () {
        $http.post("/pms_producao/PMS/AlterProjetos", ctrl.newData);
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }
    // OCORRÊNCIAS
    //==========================================================================================
    //Get
    ctrl.GetOcorrencias = function () {

        $http.post("/pms_producao/PMS/GetListaOcorrencias/" + ctrl.newData.Id)
          .then(function (response) {
              ctrl.ocurrences = response.data;
          })
          .catch(function (response) {
              console.log(response);
          });
       }

    //Add
    ctrl.AddOcorrencia = function () {
        $http.post("/pms_producao/PMS/AddOcorrencias/" + ctrl.newData.Id, { Desc: ctrl.newData.Desc, Titulo: ctrl.newData.Titulo });
        location.reload();
    }

    ctrl.HabilitarEdicao = function () {
        ctrl.salvar = true;
        ctrl.alterar = false;
        ctrl.showAlterarButton = false;        
        ctrl.showProjectButtons = true;
    }

    ctrl.Reload = function () {

        ctrl.newData = {};
        ctrl.btnAdd = true;
        ctrl.btnSave = false;
        ctrl.salvar = false;
        ctrl.alterar = false;
        ctrl.showAlterarButton = true;
        ctrl.showProjectButtons = true;
        ctrl.verificaDadosLimpar() = true;
    }

    ctrl.Select = function (user) {        
        ctrl.newData = user;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
        ctrl.showAlterarButton = true;
        ctrl.visualizar = true;
        ctrl.alterar = true;
        ctrl.salvar = false;
        ctrl.showProjectButtons = false;
    }

    ctrl.Clear = function () {
        ctrl.newData = {};
    }

    ctrl.verificaDadosLimpar = function () {
        if (ctrl.newData == null)
            return true;
        else
            return false;
    }

    
});
