package com.corenetworks.proyectoFinCursoGabrielaBack.Servicio.Implementacion;
import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Cancion;
import com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio.IRepositoryCancion;
import com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio.IRepository;
import com.corenetworks.proyectoFinCursoGabrielaBack.Repositorio.IRepositoryInterprete;
import com.corenetworks.proyectoFinCursoGabrielaBack.Servicio.IServicioCancion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ServicioCancion extends ServicioImpl<Cancion,Integer> implements IServicioCancion {

    @Autowired
    private IRepositoryCancion iCrudCancionRepositorio;

    @Autowired
    private IRepositoryInterprete iRepositoryInterprete;


    @Override
    protected IRepository getRepo() {
        return iCrudCancionRepositorio;
    }

//    public void borrarCancionPorNombre(String nombreCancion){
//        Cancion cancion=iCrudCancionRepositorio.findALLByNombre(nombreCancion);
//        iCrudCancionRepositorio.borrarCancionDeTablaOriginada(cancion.getIdCancion());
//    }
    public List<Cancion> getCancionesPorNombre(String nombreCancion)
    {
        List<Cancion> canciones=iCrudCancionRepositorio.findALLByNombre(nombreCancion);
        if (canciones==null){return null;}
        else {return canciones;}
    }

}
