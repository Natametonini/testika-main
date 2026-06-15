package com.project.testika.service;

import com.project.testika.entity.UsuarioEntity;
import com.project.testika.enums.TipoPlano;
import com.project.testika.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioEntity cadastrar(UsuarioEntity usuario) {
        if (usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            throw new RuntimeException("Este e-mail já está em uso!");
        }
        return usuarioRepository.save(usuario);
    }

    public UsuarioEntity login(String email, String senha) {
        return usuarioRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("E-mail ou senha incorretos!"));
    }

    public UsuarioEntity alterarPlano(Long id, TipoPlano novoPlano) {
        UsuarioEntity usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
        
        usuario.setTipoPlano(novoPlano);
        return usuarioRepository.save(usuario);
    }
}