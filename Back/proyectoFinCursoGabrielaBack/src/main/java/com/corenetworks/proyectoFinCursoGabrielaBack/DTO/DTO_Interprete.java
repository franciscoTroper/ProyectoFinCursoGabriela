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

public class DTO_Interprete {

    @NotNull
    @Min(0)
    @Max(120)
    private String nombreInterprete;

    private Date fechaCreacion;

    @Min(0)
    @Max(120)
    private String paisOrigen;

}
