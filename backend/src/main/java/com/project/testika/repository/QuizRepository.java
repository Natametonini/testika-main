package com.project.testika.repository;

import com.project.testika.entity.QuizEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<QuizEntity, Long> {
    
    // Busca todos os quizzes públicos (Banco de Questões Geral)
    List<QuizEntity> findByIsPublicoTrue();
    
    // Busca os quizzes criados por um usuário específico (Locais)
    List<QuizEntity> findByCriadorId(Long criadorId);
}