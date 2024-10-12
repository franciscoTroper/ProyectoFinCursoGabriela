package com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Interprete;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryInterprete extends IRepository<Interprete, Integer> {

    Interprete findByNombre(String nombre);

//    @Query(value = "SELECT id_cancion from cancion_inteprete where id_interprete = :idinterprete",nativeQuery = true)
//    List<Cancion> findAllBy




}
