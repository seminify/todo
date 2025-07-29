package org.seminify.application.entity;

import org.seminify.application.dto.TodoDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Table(name = "todo")
@Data
@Accessors(chain = true)
public class TodoEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String userId;
    private String title;
    private Boolean done;

    public TodoDTO todoDTO() {
        return new TodoDTO().setId(id).setTitle(title).setDone(done);
    }
}
