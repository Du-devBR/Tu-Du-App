package com.app.tudu.controller;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity._enum.EnumCategory;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {
    private final TaskService service;

    @Autowired
    public TaskController(TaskService taskService) {
        this.service = taskService;
    }

    @GetMapping
    public List<TaskEntity> getAllTasks() {
        return service.findAllTasks();
    }

    @PostMapping
    public TaskEntity createTask(@RequestBody TaskEntity task) {
        return service.saveTask(task);
    }

    @PutMapping("/{id}")
    public void updateTask(@PathVariable Long id, @RequestBody TaskEntity updateTask) throws ResourceNotFoundException{
        service.updateTask(id, updateTask);
    }

    @DeleteMapping
    public void deleteTask(@RequestParam("id") Long id) throws ResourceNotFoundException{
        service.deleteTask(id);
    }

    @GetMapping("/{id}")
    public TaskEntity getTaskById(@PathVariable Long id) throws ResourceNotFoundException {
        return  service.findTaskById(id);
    }

    @GetMapping("/byCategory/{category}")
    public List<TaskEntity> getTasksByCategory(@PathVariable EnumCategory category){
        return  service.findTaskByCategory(category);
    }

}
