package com.app.tudu.controller;

import com.app.tudu.entity.TaskEntity;
import com.app.tudu.entity._enum.EnumCategory;
import com.app.tudu.exception.ResourceNotFoundException;
import com.app.tudu.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/users/{id}/tasks")
    public List<TaskEntity> getAllTasksByUserId(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findAllTasks(id);
    }

    @PostMapping("/users/{id}/tasks")
    public ResponseEntity<TaskEntity> createTask(@PathVariable Long id, @RequestBody TaskEntity task) throws ResourceNotFoundException {
        TaskEntity savedTask = service.saveTask(id, task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
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
