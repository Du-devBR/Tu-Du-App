package com.app.tudu.repository;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity.UserEntity;
import com.app.tudu.entity._enum.EnumCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
//    List<TaskEntity> findByCategory(EnumCategory category);

//    @Query("SELECT t FROM TaskEntity t JOIN t.user u WHERE U.id : id")

    @Query("SELECT t FROM TaskEntity t WHERE t.userEntity.id = :userId AND t.category = :category")
    List<TaskEntity> findByCategoryAndUser(@Param("userId")Long userId, @Param("category") EnumCategory category);
    List<TaskEntity> findByUserEntityId(Long id);
}
