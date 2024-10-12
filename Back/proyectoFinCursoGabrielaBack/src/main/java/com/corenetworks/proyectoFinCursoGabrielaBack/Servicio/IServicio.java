package com.corenetworks.proyectoFinCursoGabrielaBack.Servicio;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IServicio<T,ID> {
    T registrar(T t) throws Exception;

    T modificar(T t) throws Exception;

    List<T> listar() throws Exception;

    T listarPorId(ID id) throws Exception;

    void eliminar(ID id) throws Exception;
}
