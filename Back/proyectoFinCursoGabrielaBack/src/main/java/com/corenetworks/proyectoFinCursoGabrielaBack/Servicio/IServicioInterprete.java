package com.corenetworks.proyectoFinCursoGabrielaBack.Servicio;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Interprete;
import org.springframework.stereotype.Service;

@Service
public interface IServicioInterprete extends IServicio<Interprete,Integer> {
    Interprete findByNombre(String nombre);

}
