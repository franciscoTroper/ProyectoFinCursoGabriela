package com.corenetworks.proyectoFinCursoGabrielaBack.DTO;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Interprete;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import com.corenetworks.proyectoFinCursoGabrielaBack.Modelo.Genero;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class DtoCancion {

	@NotNull
	private int idCancion;

	@NotNull
//    @Min(0)
//    @Max(20)
	private String nombre;

	@NotNull
	private LocalDate fechaCreacion;

	@NotNull
	private int duracion;

	@NotNull
	private int busquedas;

	@NotNull
	private int descargas;
	
	// ésta sola, me muestra mucha información en el JSON...
    //@NotNull
	private Genero genero;
	//@NotNull
    private List<Interprete> interpretes;

}
