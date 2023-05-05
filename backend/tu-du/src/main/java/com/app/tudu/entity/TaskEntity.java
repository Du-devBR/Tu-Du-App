package com.app.tudu.entity;

import com.app.tudu.entity._enum.EnumCategory;
import com.app.tudu.entity._enum.EnumStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tasks")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = true)
    private LocalDateTime createAt;

    private LocalDateTime startDate;


    private LocalDateTime endDate;

    @Enumerated(EnumType.STRING)
    private EnumStatus statusTask;

    @Enumerated(EnumType.STRING)
    private EnumCategory category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user", nullable = false, referencedColumnName = "id")
    private  UserEntity userEntity;
}
