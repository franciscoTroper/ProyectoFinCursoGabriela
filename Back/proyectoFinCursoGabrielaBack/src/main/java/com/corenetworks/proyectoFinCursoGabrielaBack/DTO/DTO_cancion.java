package com.corenetworks.proyectoFinCursoGabrielaBack.DTO;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class DTO_cancion {

    @NotNull
    @Min(0)
    @Max(120)
    private String nombreCancion;
    @NotNull
    private float duracion;
    private Date fechaCreacion;

}
