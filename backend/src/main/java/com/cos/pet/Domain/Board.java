package com.cos.pet.Domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Board {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long board_id;

  private String title;

  private String name;

  private String content;

}
