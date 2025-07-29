package org.seminify.application.service;

import java.util.List;

import org.seminify.application.entity.TodoEntity;
import org.seminify.application.repository.TodoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class TodoService {
    private final TodoRepository todoRepository;

    private void validate(TodoEntity todoEntity) {
        if (todoEntity == null) {
            var message = "entity cannot be null.";
            log.warn(message);
            throw new RuntimeException(message);
        }
        if (todoEntity.getUserId() == null) {
            var message = "unknown user";
            log.warn(message);
            throw new RuntimeException(message);
        }
    }

    public void post(TodoEntity todoEntity) {
        validate(todoEntity);
        todoRepository.save(todoEntity);
        log.info("entity id : {} is saved", todoEntity.getId());
    }

    @Transactional(readOnly = true)
    public List<TodoEntity> get(String userId) {
        return todoRepository.findByUserId(userId);
    }

    public void put(TodoEntity todoEntity) {
        validate(todoEntity);
        todoRepository.findById(todoEntity.getId()).orElseThrow().setTitle(todoEntity.getTitle())
                .setDone(todoEntity.getDone());
    }

    public void delete(TodoEntity todoEntity) {
        validate(todoEntity);
        todoRepository.deleteById(todoEntity.getId());
    }
}
