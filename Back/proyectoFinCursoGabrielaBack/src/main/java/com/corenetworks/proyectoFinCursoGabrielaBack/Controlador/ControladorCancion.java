package com.corenetworks.proyectoFinCursoGabrielaBack.Controlador;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/canciones")

public class ControladorCancion {

//    @Autowired
//    private Servicio_Interprete servicioInterprete;
//    @Autowired
//    private Servicio_genero servicioGenero;
//    @Autowired
//    private Servicio_cancion servicioCancion;
//
//    @Autowired
//    private ModelMapper mapper;
//
//
//    @GetMapping
//    public ResponseEntity<List<DTO_cancion>> consultarTodasLasCanciones()throws Exception{
//        List<DTO_cancion> resultado= servicioInterprete.listar()
//                .stream().map(x-> mapper.map(x, DTO_cancion.class))
//                .collect(Collectors.toList());
//        return new ResponseEntity<>(resultado, HttpStatus.OK);
//    }
//
//    @GetMapping("{nombreCancion}")
//    public ResponseEntity<List<DTO_cancion>> consultarCancionesPorNombreCancion(@PathVariable("nombreCancion") String nombreCancion) throws Exception{
//        List<Cancion> canciones= servicioCancion.getCancionesPorNombre(nombreCancion);
//        List<DTO_cancion> canciones_dto=canciones
//                .stream()
//                .map(x->mapper.map(x,DTO_cancion.class))
//                .collect(Collectors.toList());
//        return new ResponseEntity<>(canciones_dto,HttpStatus.OK);
//
//    }
//
//    @GetMapping("idGenero")
//    public ResponseEntity<List<DTO_cancion>> consyltaCancionesPorGenero(@PathVariable("idGenero")String tipoGenero){
//       //Obtengo genero por nombre y compruebo que exista
//        Genero genero= servicioGenero.getGeneroPorNombre(tipoGenero);
//        if (genero==null){
//            throw new ExceptionNoEncontradoModelo(tipoGenero+" no ha sido encontrado");
//           // return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
//        }
//        //Genero existe
//        else {
//            List<DTO_cancion> canciones_dto=genero.getCanciones()
//                    .stream()
//                    .map(x->mapper.map(x,DTO_cancion.class))
//                    .collect(Collectors.toList());
//            return new ResponseEntity<>(canciones_dto,HttpStatus.OK);
//        }
//    }
//
//    @PostMapping
//    public ResponseEntity<DTO_cancion> insertar(@Validated @RequestBody DTO_cancion dtoCancion) throws Exception{
//        //Mapeo la cancion nueva
//        Cancion cancion = mapper.map(dtoCancion,Cancion.class);
//        return new ResponseEntity<>(mapper.map(servicioCancion.registrar(cancion),DTO_cancion.class),HttpStatus.CREATED);
//
//    }
//    @PutMapping
//    public ResponseEntity<DTO_cancion> modificar(@Validated @RequestBody DTO_cancion dtoCancion) throws Exception{
//
//        Cancion cancion=mapper.map(dtoCancion,Cancion.class);
//        Cancion cancion1= servicioCancion.listarPorId(cancion.getIdCancion());
//        if (cancion1==null){
//            throw new ExceptionNoEncontradoModelo("El id: " + dtoCancion.getNombreCancion() +" no ha sido encontrado");
//           // return new ResponseEntity<>(mapper.map(null, DTO_cancion.class),HttpStatus.NO_CONTENT);
//        }
//        else {
//            return new ResponseEntity<>(mapper.map(servicioCancion.registrar(cancion1), DTO_cancion.class),HttpStatus.OK);
//
//        }
//
//    }

//    @DeleteMapping("{nombre}")
//    public ResponseEntity<DTO_cancion> eliminar(@PathVariable("nombre") String nombreCancion) throws Exception{
//
//    }

}
