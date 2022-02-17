package com.oscartrujillo.crudperson.operations;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_person")
public class Person implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="per_pk_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int per_pk_id;

    @Column(name="per_name")
    private String per_name;

    @Column(name="per_phone_number")
    private String per_phone_number;

    @Column(name="per_email_address")
    private String per_email_address;

    public int getPer_pk_id() {
        return per_pk_id;
    }

    public void setPer_pk_id(int per_pk_id) {
        this.per_pk_id = per_pk_id;
    }

    public String getPer_name() {
        return per_name;
    }

    public void setPer_name(String per_name) {
        this.per_name = per_name;
    }

    public String getPer_phone_number() {
        return per_phone_number;
    }

    public void setPer_phone_number(String per_phone_number) {
        this.per_phone_number = per_phone_number;
    }

    public String getPer_email_address() {
        return per_email_address;
    }

    public void setPer_email_address(String per_email_address) {
        this.per_email_address = per_email_address;
    }
}