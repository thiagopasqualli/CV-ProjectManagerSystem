var myApp = angular.module('myApp', []);
myApp.controller('projectCtrl', function ($http, $window) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.btnSave = false;
    ctrl.Classificacao = '';
    ctrl.Status = ['Andamento', 'Parado', 'Encerrdo'];
    ctrl.salvar = false;
    ctrl.alterar = false;
    ctrl.showAlterarButton = true;
    ctrl.showProjectButtons = true;

    //Get
    $http.get("/PMS/GetProjetos")
      .then(function (response) {
          ctrl.projetos = response.data;
      })

      .catch(function (response) {
          console.log(response);
      });

    //GetUsers
    $http.get("/PMS/GetUsuarios")
     .then(function (response) {
         ctrl.usuarios = response.data;
     })
     .catch(function (response) {
         console.log(response);
     });


    //Add
    ctrl.AddProjetos = function () {
        $http.post("/PMS/AddProjetos", ctrl.newData);
        location.reload();
    }

    //Delete
    ctrl.DelProjetos = function () {
        confirma = confirm("Tem certeza que deseja excluir esse projeto?");
        if (confirma) {
            $http.post("/PMS/ExcluirProjeto", ctrl.newData);
            location.reload();
        }
    } 

    //Alterar
    ctrl.AlterProjetos = function () {
        $http.post("/PMS/AlterProjetos", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }
    // OCORRÊNCIAS
    //==========================================================================================
    //Get
    ctrl.GetOcorrencias = function () {

        $http.post("/PMS/GetListaOcorrencias/" + ctrl.newData.Id)
          .then(function (response) {
              ctrl.ocurrences = response.data;
          })
          .catch(function (response) {
              console.log(response);
          });
       }

    //Add
    ctrl.AddOcorrencia = function () {
        $http.post("/PMS/AddOcorrencias/" + ctrl.newData.Id, { Desc: ctrl.newData.Desc, Titulo: ctrl.newData.Titulo });
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
        ctrl.showProjectButtons = true;
    }

    ctrl.ExcluirUser = function () {
        $http.post("/PMS/DelUsuarios", ctrl.newData).then(function (response) {
            debugger
            if ((response.data) == "True")
                window.alert("excluiu");
            else
                window.alert("Usuario Vinculado!");
     })}

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
        ctrl.newData = null;
    }

    ctrl.verificaDadosLimpar = function () {
        if (ctrl.newData == null)
            return true;
        else
            return false;
    }

    
});
