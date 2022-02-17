package com.oscartrujillo.crudperson.operations;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_professor")
public class Professor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="pro_pk_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int pro_pk_id;

    @Column(name="pro_salary")
    private String pro_salary;

    @Column(name="pro_fk_per_pk_id")
    private int pro_fk_per_pk_id;

    public int getPro_pk_id() {
        return pro_pk_id;
    }

    public void setPro_pk_id(int pro_pk_id) {
        this.pro_pk_id = pro_pk_id;
    }

    public String getPro_salary() {
        return pro_salary;
    }

    public void setPro_salary(String pro_salary) {
        this.pro_salary = pro_salary;
    }

    public int getPro_fk_per_pk_id() {
        return pro_fk_per_pk_id;
    }

    public void setPro_fk_per_pk_id(int pro_fk_per_pk_id) {
        this.pro_fk_per_pk_id = pro_fk_per_pk_id;
    }
}