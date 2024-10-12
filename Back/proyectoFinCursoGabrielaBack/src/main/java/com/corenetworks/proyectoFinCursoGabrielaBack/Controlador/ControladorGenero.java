package com.corenetworks.proyectoFinCursoGabrielaBack.Controlador;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/generos")
public class ControladorGenero {

//    @Autowired
//    private ModelMapper mapper;
//    @Autowired
//    private IRepository_Genero iRepositoryGenero;
//
//    @PostMapping
//    public ResponseEntity<DTO_genero> altaGenero(@Validated @RequestBody DTO_genero dto_genero){
//        Genero genero=mapper.map(dto_genero,Genero.class);
//        if (iRepositoryGenero.findByTipoGenero(genero.getTipoGenero())!=null){
//            return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
//        }
//        else {
//            Genero genero1= iRepositoryGenero.save(genero);
//            DTO_genero dtoGenero=mapper.map(genero1, DTO_genero.class);
//            return new ResponseEntity<>(dtoGenero,HttpStatus.OK);
//        }
//    }
//    @PutMapping
//    public ResponseEntity<DTO_genero> modificarGenero(@Validated @RequestBody DTO_genero dto_genero){
//        Genero genero=mapper.map(dto_genero,Genero.class);
//        if (iRepositoryGenero.findByTipoGenero(genero.getTipoGenero())!=null){
//            return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
//        }
//        else {
//            Genero genero1= iRepositoryGenero.save(genero);
//            DTO_genero dtoGenero=mapper.map(genero1, DTO_genero.class);
//            return new ResponseEntity<>(dtoGenero,HttpStatus.OK);
//        }
//    }

}
