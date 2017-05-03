
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProjectManagerSystem.EntityFramework
{
    public class PMSDataContext : DbContext
    {
        public PMSDataContext() : base("name=dbconnection")
        {
            Database.SetInitializer(new NullDatabaseInitializer<PMSDataContext>());
        }
        public DbSet<Projeto> PMSlistProjetos { get; set; }
        public DbSet<Usuario> PMSlistUsuarios { get; set; }
        public DbSet<Ocorrencia> PMSlistOcorrencias { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Projeto>().ToTable("Projeto");
            modelBuilder.Entity<Projeto>().HasKey(x => x.Id);

            modelBuilder.Entity<Usuario>().ToTable("Usuario");
            modelBuilder.Entity<Usuario>().HasKey(x => x.Matricula);

            modelBuilder.Entity<Ocorrencia>().ToTable("Ocorrencia");
            modelBuilder.Entity<Ocorrencia>().HasKey(x => x.IdOcorrencia);

            modelBuilder.Entity<Projeto>().HasMany(x => x.Ocorrencias).WithRequired(x => x.Projeto).HasForeignKey(x => x.IdProjeto);
        }

    }
}