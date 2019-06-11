package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.points.PointFocal;

@RestController
@RequestMapping(path="/point_focal")
public class PointFocalController extends CrudController<PointFocal, Integer>{

	
}
