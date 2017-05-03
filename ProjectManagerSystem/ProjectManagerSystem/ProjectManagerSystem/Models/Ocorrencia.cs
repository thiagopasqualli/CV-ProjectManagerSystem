using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectManagerSystem.EntityFramework
{
    public class Ocorrencia
    {
        public int IdOcorrencia { get; set; }
        public string DescricaoOcorrencia { get; set; }
        public int IdProjeto { get; set; }
        public DateTime DataHora { get; set; }
        public Projeto Projeto { get; set; }

    }
}