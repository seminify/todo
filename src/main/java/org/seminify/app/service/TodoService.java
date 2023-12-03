package org.seminify.app.service;

import lombok.RequiredArgsConstructor;
import org.seminify.app.model.TodoEntity;
import org.seminify.app.persistence.TodoRepository;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TodoService {
//    public String testService() {
//        return "Test Service";
//    }

    private final TodoRepository repository;

    public String testService() {
        TodoEntity entity = TodoEntity.builder().title("My first todo item").build();
        repository.save(entity);
        TodoEntity savedEntity = repository.findById(entity.getId()).get();
        return savedEntity.getTitle();
    }
}
