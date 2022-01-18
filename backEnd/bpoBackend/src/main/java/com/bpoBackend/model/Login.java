package com.bpoBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="bpo_user")
@Entity
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
	@Column
private String email;
	@Column
private String password;
}
