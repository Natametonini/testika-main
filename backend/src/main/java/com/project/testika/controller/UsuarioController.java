package com.project.testika.controller;

import com.project.testika.entity.UsuarioEntity;
import com.project.testika.dto.request.LoginRequest;
import com.project.testika.dto.response.UsuarioResponse;
import com.project.testika.enums.TipoPlano;
import com.project.testika.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UsuarioEntity usuario) {
        try {
            UsuarioEntity novoUsuario = usuarioService.cadastrar(usuario);
            UsuarioResponse response = mapperParaResponse(novoUsuario);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            UsuarioEntity usuario = usuarioService.login(loginRequest.getEmail(), loginRequest.getSenha());
            UsuarioResponse response = mapperParaResponse(usuario);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }

    // Rota alterada: agora recebe o enum via Query Parameter (?novoPlano=PREMIUM)
    @PutMapping("/{id}/plano")
    public ResponseEntity<?> atualizarPlano(@PathVariable Long id, @RequestParam TipoPlano novoPlano) {
        try {
            UsuarioEntity usuarioAtualizado = usuarioService.alterarPlano(id, novoPlano);
            UsuarioResponse response = mapperParaResponse(usuarioAtualizado);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private UsuarioResponse mapperParaResponse(UsuarioEntity usuario) {
        return new UsuarioResponse(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getTipoUsuario(),
                usuario.getTipoPlano()
        );
    }
}