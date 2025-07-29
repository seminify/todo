package org.seminify.application.dto;

import org.seminify.application.entity.TodoEntity;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TodoDTO {
    private Long id;
    private String title;
    private Boolean done;

    public TodoEntity todoEntity() {
        return new TodoEntity().setId(id).setTitle(title).setDone(done);
    }
}
