package com.projeto.vendas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.vendas.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
