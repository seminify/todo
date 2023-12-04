package org.seminify.app.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "username"))
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class UserEntity {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private String id;
    @Column(updatable = false)
    private String username;
    private String password;
    private String role;
    private String authProvider;
}
