package com.corenetworks.proyectoFinCursoGabrielaBack.Controlador;

import com.corenetworks.proyectoFinCursoGabrielaBack.DTO.DTO_Interprete;
import com.corenetworks.proyectoFinCursoGabrielaBack.DTO.DTO_cancion;
import com.corenetworks.proyectoFinCursoGabrielaBack.Excepciones.ExceptionNoEncontradoModelo;
import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Interprete;
import com.corenetworks.proyectoFinCursoGabrielaBack.Servicio.IServicioInterprete;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/interpretes")

public class ControladorInterprete {

    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IServicioInterprete iservicioInterprete;


    @GetMapping("/{nombreInterprete}")
    public ResponseEntity<List<DTO_cancion>> consultaCanciones(@PathVariable("nombreInterprete")String nombreInterprete) throws Exception{
        Interprete interprete= iservicioInterprete.findByNombre(nombreInterprete);
        if (interprete==null){return null;}
        else {
            List<DTO_cancion>canciones= interprete.getCanciones()
                    .stream()
                    .map(x->mapper.map(x,DTO_cancion.class)).collect(Collectors.toList());
            return new ResponseEntity<>(canciones,HttpStatus.OK);
        }

    }
    @GetMapping("{id}")
    public ResponseEntity<DTO_Interprete> consultarUnInterprete(@PathVariable("id")int id) throws Exception {

        Interprete interprete= iservicioInterprete.listarPorId(id);
        if (interprete==null){
            throw new ExceptionNoEncontradoModelo("El id: " + id +" no ha sido encontrado");
            //return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
        }
        else {
            DTO_Interprete dtoInterprete=mapper.map(interprete, DTO_Interprete.class);
            return new ResponseEntity<>(dtoInterprete,HttpStatus.OK);
        }
    }
    @GetMapping("{nombre}")
    public ResponseEntity<DTO_Interprete> consultarInterpretePorNombre(@PathVariable("nombre")String nombre){
        Interprete interpretes= iservicioInterprete.findByNombre(nombre);
        if (interpretes==null){
            throw new ExceptionNoEncontradoModelo(nombre +" no ha sido encontrado en la base de datos");
           // return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
        }
        else {

            DTO_Interprete dtoInterprete= mapper.map(interpretes, DTO_Interprete.class);

            return new ResponseEntity<>(dtoInterprete,HttpStatus.OK);
        }
    }


    @PostMapping
    public ResponseEntity<DTO_Interprete> altaInterprete(@Validated @RequestBody DTO_Interprete dto_Interprete) throws Exception {
        Interprete interprete=mapper.map(dto_Interprete, Interprete.class);
        if (iservicioInterprete.findByNombre(interprete.getNombre())!=null){
            throw new ExceptionNoEncontradoModelo(dto_Interprete.getNombreInterprete() +" no ha sido encontrado");
            //return new ResponseEntity<>(mapper.map(null, DTO_Interprete.class),HttpStatus.NO_CONTENT);
        }
        else {
            iservicioInterprete.registrar(interprete);
            return new ResponseEntity<>(mapper.map(interprete,DTO_Interprete.class),HttpStatus.OK);
        }
    }
    @PutMapping
    public ResponseEntity<DTO_Interprete> modificarInterprete(@Validated @RequestBody DTO_Interprete dto_interprete) throws Exception {
        Interprete interprete=mapper.map(dto_interprete, Interprete.class);
        if (iservicioInterprete.findByNombre(interprete.getNombre())!=null){
            throw new ExceptionNoEncontradoModelo(dto_interprete.getNombreInterprete() +" no ha sido encontrado");
            //return new ResponseEntity<>(mapper.map(null, DTO_Interprete.class),HttpStatus.NO_CONTENT);
        }
        else {
            iservicioInterprete.registrar(interprete);
            return new ResponseEntity<>(mapper.map(interprete,DTO_Interprete.class),HttpStatus.OK);
        }
    }


}
