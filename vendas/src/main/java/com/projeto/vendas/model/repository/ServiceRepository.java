package com.projeto.vendas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.vendas.model.entity.Service;

public interface ServiceRepository extends JpaRepository<Service, Integer>{

}
