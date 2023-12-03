package org.seminify.app.persistence;

import org.seminify.app.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {
    List<TodoEntity> findByUserId(String userId);

    @Query("SELECT T FROM TodoEntity T WHERE T.userId = :userId")
    List<TodoEntity> findByUserIdQuery(String userId);
}
