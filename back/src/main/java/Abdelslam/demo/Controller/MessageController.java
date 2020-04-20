/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Abdelslam.demo.Controller;

import Abdelslam.demo.Model.Entities.Message;
import Abdelslam.demo.Model.Repositories.MessageRepository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author pro
 */
@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired MessageRepository messageRepository;
    @GetMapping()
    public List<Message> list() {
        return (List<Message>) this.messageRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Message get(@PathVariable Integer id) {
        return (Message) this.messageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Message", "id", id));
    }
    

    
    @PostMapping
    public Message post(@RequestBody Message message) {
        return this.messageRepository.save(message);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return this.delete(id);
    }
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Error message")
    public void handleError() {
    }
    
}
