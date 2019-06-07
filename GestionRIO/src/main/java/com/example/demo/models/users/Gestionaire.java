package com.example.demo.models.users;

import java.util.ArrayList;

import com.example.demo.models.points.PointFocal;

public class Gestionaire extends User {

	public ArrayList<PointFocal> reseaux;
	
	public void creerReseau(PointFocal PF) {
		
		this.reseaux.add(PF);
		
	}
	
	public void modifierPF(PointFocal PF) {
		int size = this.reseaux.size();
		this.reseaux.set(size-1,PF);
	}
}
