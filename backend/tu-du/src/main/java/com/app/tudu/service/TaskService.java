package com.app.tudu.service;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity.UserEntity;
import com.app.tudu.entity._enum.EnumCategory;
import com.app.tudu.entity._enum.EnumStatus;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.repository.TaskRepository;
import com.app.tudu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;

    @Autowired
    UserRepository userRepository;

    public TaskEntity saveTask(Long id, TaskEntity task) throws ResourceNotFoundException {
        UserEntity user = userRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Usuario não encontrado"));
        task.setCreateAt(LocalDateTime.now());
        task.setUserEntity(user);
        return taskRepository.save(task);
    }

    public List<TaskEntity> findAllTasks(Long id) throws ResourceNotFoundException{
        UserEntity user = userRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Ususario não encontrado"));
        return taskRepository.findByUserEntityId(id);
    }

    public void updateTask(Long id, TaskEntity updateTask) throws ResourceNotFoundException{
        Optional<TaskEntity> taskEntity = taskRepository.findById(id);
        if(taskEntity.isPresent()){
            TaskEntity task = taskEntity.get();
            task.setStatusTask(updateTask.getStatusTask());

            if (updateTask.getStatusTask() ==  EnumStatus.INICIDADO) {
                task.setStartDate(LocalDateTime.now());
            }

            if (updateTask.getStatusTask() ==  EnumStatus.CONCLUIDO) {
                task.setEndDate(LocalDateTime.now());
            }
            taskRepository.save(task);
        }else {
            throw new ResourceNotFoundException("ID não cadastrado.");
        }
    }

    public void deleteTask(Long id) throws ResourceNotFoundException {
        taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Erro ao excluir a tarefa, id não existe."));
        taskRepository.deleteById(id);
    }

    public TaskEntity findTaskById(Long id) throws ResourceNotFoundException{

        TaskEntity task = taskRepository.findById(id).orElse(null);
        if(task == null){
            throw new ResourceNotFoundException("Tarefa não encontrada");
        }
        return task;

    }
    public List<TaskEntity> findTaskByCategory(EnumCategory category){
        return taskRepository.findByCategory(category);
    }

}
