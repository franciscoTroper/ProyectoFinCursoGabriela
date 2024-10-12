package com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Cancion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryCancion extends IRepository<Cancion, Integer> {
    List<Cancion> findALLByNombre(String nombre);

    @Query(value = "SELECT * FROM canciones WHERE id_genero = :name",nativeQuery = true)
    List<Cancion> findByIdGeneroNative(@Param("name")int idGenero);

    void deleteByNombre(String nombreCancion);

    @Query(value ="DELETE FROM cancion_interprete " +
            "WHERE id_cancion=:id",nativeQuery = true)
     void borrarCancionDeTablaOriginada(@Param("id") int id_cancion);


}
