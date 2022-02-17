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
@Table(name="tbl_student")
public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="stu_pk_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int stu_pk_id;

    @Column(name="stu_number")
    private String stu_number;

    @Column(name="stu_average_mark")
    private double stu_average_mark;

    @Column(name="stu_fk_per_pk_id")
    private int stu_fk_per_pk_id;

    public int getStu_pk_id() {
        return stu_pk_id;
    }

    public void setStu_pk_id(int stu_pk_id) {
        this.stu_pk_id = stu_pk_id;
    }

    public String getStu_number() {
        return stu_number;
    }

    public void setStu_number(String stu_number) {
        this.stu_number = stu_number;
    }

    public double getStu_average_mark() {
        return stu_average_mark;
    }

    public void setStu_average_mark(double stu_average_mark) {
        this.stu_average_mark = stu_average_mark;
    }

    public int getStu_fk_per_pk_id() {
        return stu_fk_per_pk_id;
    }

    public void setStu_fk_per_pk_id(int stu_fk_per_pk_id) {
        this.stu_fk_per_pk_id = stu_fk_per_pk_id;
    } 
}