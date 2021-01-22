package com.projeto.vendas.model.controller.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServiceProvidedDTO {
	
	private String description;	
	private String value;
	private Integer idClient;				
	private String date;
	
	

}
