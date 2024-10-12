package com.corenetworks.proyectoFinCursoGabrielaBack.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

@Entity
@Table(name="canciones")

public class Cancion  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCancion;

    @Column(length = 120, nullable = false)
    private String nombre;
    @Column
    private Date fechaCreacion;
    @Column(nullable = false)
    private int duracion;
    @Column (nullable = false)
    private long descargas=0;
    @Column (nullable = false)
    private long busquedas=0;


    @ManyToMany
    @JoinTable(
            name = "cancion_interprete",
            joinColumns = @JoinColumn(name = "id_cancion",nullable = false),
            inverseJoinColumns = @JoinColumn(name = "id_Interprete")
    )
    private List<Interprete>interpretes;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="id_genero")
    private Genero genero;

    public Cancion(String nombre, Date fechaCreacion, int duracion, int descargas, int busquedas, List<Interprete> interpretes, Genero genero) {
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.duracion = duracion;
        this.descargas = descargas;
        this.busquedas = busquedas;
        this.interpretes = interpretes;
        this.genero = genero;
    }
    public Cancion(String nombre,int duracion){
        this.nombre=nombre;
        this.duracion=duracion;
    }

}
