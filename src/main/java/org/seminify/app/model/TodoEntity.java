package org.seminify.app.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Todo")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TodoEntity {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private String id;
    private String userId;
    private String title;
    private boolean done;
}
