using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectManagerSystem.EntityFramework
{
    public class Projeto
    {
        public int Id { get; set; }
        public int IdBR { get; set; }
        public int IdLinx { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public DateTime InicioPrevisto { get; set; }
        public DateTime FimPrevisto { get; set; }
        public int IdUsuario { get; set; }
        public string Status { get; set; }
        public List<Ocorrencia> Ocorrencias { get; set; }
        public Usuario Usuarios { get; set; }

        

    }
}