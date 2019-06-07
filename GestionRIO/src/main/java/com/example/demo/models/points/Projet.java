package com.example.demo.models.points;

import java.util.Date;
import java.util.UUID;

public class Projet {

	private UUID id;
	public String nomProjet;
	public Date dateDebut;
	public Date dateFin;
	
	public Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}
	public Date getDateFin() {
		return dateFin;
	}
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	public String getNomProjet() {
		return nomProjet;
	}
	public void setNomProjet(String nomProjet) {
		this.nomProjet = nomProjet;
	}
	
}
