package com.app.tudu.service;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity._enum.EnumCategory;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    TaskRepository repository;

    public TaskEntity saveTask(TaskEntity task) {
        return repository.save(task);
    }

    public List<TaskEntity> findAllTasks(){
        List<TaskEntity> tasks = repository.findAll();
        return tasks;
    }

    public void updateTask(Long id, TaskEntity updateTask) throws ResourceNotFoundException{
        Optional<TaskEntity> taskEntity = repository.findById(id);
        if(taskEntity.isPresent()){
            TaskEntity task = taskEntity.get();
            task.setCreateAt(updateTask.getCreateAt());
            task.setStartDate(updateTask.getStartDate());
            task.setEndDate(updateTask.getEndDate());
            task.setStatusTask(updateTask.getStatusTask());
            repository.save(task);
        }else {
            throw new ResourceNotFoundException("ID não cadastrado.");
        }
    }

    public void deleteTask(Long id) throws ResourceNotFoundException {
        repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Erro ao excluir a tarefa, id não existe."));
        repository.deleteById(id);
    }

    public TaskEntity findTaskById(Long id) throws ResourceNotFoundException{

        TaskEntity task = repository.findById(id).orElse(null);
        if(task == null){
            throw new ResourceNotFoundException("Tarefa não encontrada");
        }
        return task;

    }
    public List<TaskEntity> findTaskByCategory(EnumCategory category){
        return repository.findByCategory(category);
    }

}
