package com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Genero;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryGenero extends IRepository<Genero, Integer> {
 Genero findByTipoGenero(String tipoDeGenero);
}
