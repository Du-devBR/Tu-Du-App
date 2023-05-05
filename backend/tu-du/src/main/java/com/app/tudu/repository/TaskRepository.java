package com.app.tudu.repository;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity._enum.EnumCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
    List<TaskEntity> findByCategory(EnumCategory category);
    List<TaskEntity> findByUserEntityId(Long id);
}
