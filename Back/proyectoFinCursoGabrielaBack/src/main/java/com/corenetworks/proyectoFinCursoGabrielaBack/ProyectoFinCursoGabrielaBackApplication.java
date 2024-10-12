package com.corenetworks.proyectoFinCursoGabrielaBack;

import com.corenetworks.proyectoFinCursoGabrielaBack.Servicio.IServicioInterprete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProyectoFinCursoGabrielaBackApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoFinCursoGabrielaBackApplication.class, args);
	}
//	@Autowired
//	private Servicio_Interprete servicioInterprete;
//	@Autowired
//	private Servicio_genero servicioGenero;
//	@Autowired
//	private Servicio_cancion servicioCancion;
	@Autowired
	private IServicioInterprete iServicioInterprete;
	@Override
	public void run(String... args) throws Exception {
//		Genero genero=new Genero(0,"rock");
//		servicioGenero.registrar(genero);
//		Interprete interprete=new Interprete(0,"Oasis",new Date(1970,5,25),"Inglaterra");
//		servicioInterprete.registrar(interprete);
//
//		List<Interprete> interpretes=new ArrayList<>();
//		interpretes.add(interprete);
//		Cancion cancion=new Cancion("Wonderfull"
//				, new Date(1980,4,17)
//				,126
//				,0,0,interpretes,genero);
//		Cancion cancion2=new Cancion("Wonderfull2"
//				, new Date(1985,7,25)
//				,123
//				,0,0,interpretes,genero);
//
//		servicioCancion.registrar(cancion);
//		servicioCancion.registrar(cancion2);
//
//		servicioCancion.borrarCancionPorNombre("Wonderfull2");
	}
}
