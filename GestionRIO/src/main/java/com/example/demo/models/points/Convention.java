package com.example.demo.models.points;

import java.util.UUID;

public class Convention {

	private UUID id;
	public String nomPartenaire;
	
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	public String getNomPartenaire() {
		return nomPartenaire;
	}
	public void setNomPartenaire(String nomPartenaire) {
		this.nomPartenaire = nomPartenaire;
	}
	
}
