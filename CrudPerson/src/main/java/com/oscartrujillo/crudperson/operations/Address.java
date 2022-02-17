package com.oscartrujillo.crudperson.operations;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_address")
public class Address implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="add_pk_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int add_pk_id;

    @Column(name="add_street")
    private String add_street;

    @Column(name="add_city")
    private String add_city;

    @Column(name="add_state")
    private String add_state;

    @Column(name="add_postal_code")
    private String add_postal_code;

    @Column(name="add_country")
    private String add_country;

    @Column(name="add_fk_per_pk_id")
    private int add_fk_per_pk_id;

    public int getAdd_fk_per_pk_id() {
            return add_fk_per_pk_id;
    }

    public void setAdd_fk_per_pk_id(int add_fk_per_pk_id) {
            this.add_fk_per_pk_id = add_fk_per_pk_id;
    }

    public int getAdd_pk_id() {
            return add_pk_id;
    }

    public void setAdd_pk_id(int add_pk_id) {
            this.add_pk_id = add_pk_id;
    }

    public String getAdd_street() {
            return add_street;
    }

    public void setAdd_street(String add_street) {
            this.add_street = add_street;
    }

    public String getAdd_city() {
            return add_city;
    }

    public void setAdd_city(String add_city) {
            this.add_city = add_city;
    }

    public String getAdd_state() {
            return add_state;
    }

    public void setAdd_state(String add_state) {
            this.add_state = add_state;
    }

    public String getAdd_postal_code() {
            return add_postal_code;
    }

    public void setAdd_postal_code(String add_postal_code) {
            this.add_postal_code = add_postal_code;
    }

    public String getAdd_country() {
            return add_country;
    }

    public void setAdd_country(String add_country) {
            this.add_country = add_country;
    }
}
