package com.corenetworks.proyectoFinCursoGabrielaBack.Modelo;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

@Entity
@Table(name="generos")

public class Genero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idGenero;

    @Column(length = 60, nullable = false)
    private String tipoGenero;


    @OneToMany(mappedBy = "genero",
            cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REFRESH,CascadeType.REMOVE},
            orphanRemoval = true)
    List<Cancion> canciones=new ArrayList<>();

    public Genero(int idGenero, String tipoGenero) {
        this.idGenero=idGenero;
        this.tipoGenero = tipoGenero;
    }
}
