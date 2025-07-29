package org.seminify.application.controller;

import java.util.List;

import org.seminify.application.dto.TodoDTO;
import org.seminify.application.entity.TodoEntity;
import org.seminify.application.service.TodoService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequestMapping("todo")
@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @PostMapping
    public void post(@RequestBody TodoDTO todoDTO) {
        todoService.post(todoDTO.todoEntity().setUserId("unknown user"));
    }

    @GetMapping
    public List<TodoDTO> get() {
        return todoService.get("unknown user").stream().map(TodoEntity::todoDTO).toList();
    }

    @PutMapping
    public void put(@RequestBody TodoDTO todoDTO) {
        todoService.put(todoDTO.todoEntity().setUserId("unknown user"));
    }

    @DeleteMapping
    public void delete(@RequestBody TodoDTO todoDTO) {
        todoService.delete(todoDTO.todoEntity().setUserId("unknown user"));
    }
}
