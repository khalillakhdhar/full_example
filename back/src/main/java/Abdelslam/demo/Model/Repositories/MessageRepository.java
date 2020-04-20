/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Abdelslam.demo.Model.Repositories;

import Abdelslam.demo.Model.Entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author pro
 */
public interface MessageRepository extends CrudRepository<Message, Integer> {
    
}
