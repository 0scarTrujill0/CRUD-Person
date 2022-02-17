package com.oscartrujillo.crudperson.operations;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class DbOperations {

    static Session sessionObj;
    static SessionFactory sessionFactoryObj;

    private static SessionFactory buildSessionFactory() {
            Configuration configObj = new Configuration();
        try{
            configObj.configure("hibernate.cfg.xml");
        }
        catch(Exception sqlException) {
            System.out.println(sqlException.getMessage());
        }
            ServiceRegistry serviceRegistryObj = new StandardServiceRegistryBuilder().applySettings(configObj.getProperties()).build();
            sessionFactoryObj = configObj.buildSessionFactory(serviceRegistryObj);
            return sessionFactoryObj;
    }

    public DbOperations() {
        
    }

	// Método para crear un estudiante en la base de datos.
	public static void createStudent(Person personObj, Student studentObj) {
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                sessionObj.save(personObj);
                sessionObj.getTransaction().commit();

                sessionObj.beginTransaction();

                Query query = sessionObj.createQuery("FROM Person order by per_pk_id DESC");
                query.setMaxResults(1);
                Person lastPerson  = (Person) query.uniqueResult();

                studentObj.setStu_fk_per_pk_id(lastPerson.getPer_pk_id());

                sessionObj.save(studentObj);
                sessionObj.getTransaction().commit();

            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                    sessionObj.getTransaction().rollback();
                }
                sqlException.printStackTrace();
            }
        }
	
	// Método para crear un profesor en la base de datos.
        public static void createProfessor(Person personObj, Professor professorObj) {
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                sessionObj.save(personObj);
                sessionObj.getTransaction().commit();

                sessionObj.beginTransaction();

                Query query = sessionObj.createQuery("FROM Person order by per_pk_id DESC");
                query.setMaxResults(1);
                Person lastPerson  = (Person) query.uniqueResult();

                professorObj.setPro_fk_per_pk_id(lastPerson.getPer_pk_id());

                sessionObj.save(professorObj);
                sessionObj.getTransaction().commit();

            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                        sessionObj.getTransaction().rollback();
                }
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
        }
		
        // Método para crear una direccion en la base de datos.
        public static void createAddress(String street, String city, String state, String postalCode, String country, int personId) {
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                Address addressObj = new Address();
                addressObj.setAdd_street(street);
                addressObj.setAdd_city(city);
                addressObj.setAdd_state(state);
                addressObj.setAdd_postal_code(postalCode);
                addressObj.setAdd_country(country);
                addressObj.setAdd_fk_per_pk_id(personId);

                sessionObj.save(addressObj);
                sessionObj.getTransaction().commit();

            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                        sessionObj.getTransaction().rollback();
                }
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
        }
		
        // Método para editar un estudiante.	
        public static void updateStudent(String personName, String phoneNumber, String emailAddress, String studentNumber, float averageMark, int student_id) {		
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                Student studentObj = (Student) sessionObj.get(Student.class, student_id);
                studentObj.setStu_number(studentNumber);
                studentObj.setStu_average_mark(averageMark);
                int personId = studentObj.getStu_fk_per_pk_id();

                Person personObj = (Person) sessionObj.get(Person.class, personId);
                personObj.setPer_name(personName);
                personObj.setPer_phone_number(phoneNumber);
                personObj.setPer_email_address(emailAddress);

                sessionObj.update(studentObj);
                sessionObj.update(personObj);

                sessionObj.getTransaction().commit();
            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                    sessionObj.getTransaction().rollback();
                }
                    sqlException.printStackTrace();
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
        }
		
        // Método para editar un profesor.
        public static void updateProfessor(String personName, String phoneNumber, String emailAddress, String salary, int professor_id) {		
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                Professor professorObj = (Professor) sessionObj.get(Professor.class, professor_id);
                professorObj.setPro_salary(salary);
                int personId = professorObj.getPro_fk_per_pk_id();

                Person personObj = (Person) sessionObj.get(Person.class, personId);
                personObj.setPer_name(personName);
                personObj.setPer_phone_number(phoneNumber);
                personObj.setPer_email_address(emailAddress);

                sessionObj.update(professorObj);
                sessionObj.update(personObj);

                sessionObj.getTransaction().commit();
            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                    sessionObj.getTransaction().rollback();
                }
                sqlException.printStackTrace();
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
        }
				
        // Método para mostrar todos los estudiantes de la base de datos
        @SuppressWarnings("unchecked")
        public static List<Student> readStudents() {
            List<Student> studentsList = new ArrayList<Student>();		
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                studentsList = sessionObj.createQuery("from Student as stu inner join stu.Person as per").list();
            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                        sessionObj.getTransaction().rollback();
                }
                System.out.println(sqlException.getMessage());
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
            return studentsList;
        }
        
        // Método para mostrar todos los estudiantes de la base de datos
        @SuppressWarnings("unchecked")
        public static List<Professor> readProfessors() {
            List<Professor> professorList = new ArrayList<Professor>();	
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                professorList = sessionObj.createQuery("select per.per_name, per.per_phone_number, per.per_email_address, stu.stu_number, stu.stu_average_mark from Student stu INNER JOIN stu.stu_fk_per_pk_id per").list();
            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                        sessionObj.getTransaction().rollback();
                }
                sqlException.printStackTrace();
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
            return professorList;
        }
				
        // Método para eliminar un estudiante de la base de datos
        public static void deleteStudent(Integer student_id) {
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                Student studentObj = (Student) sessionObj.get(Student.class, student_id);
                int personId = studentObj.getStu_fk_per_pk_id();

                Person personObj = (Person) sessionObj.get(Person.class, personId);
                sessionObj.delete(studentObj);
                sessionObj.delete(personObj);

                sessionObj.getTransaction().commit();
            } catch(Exception sqlException) {
                if(null != sessionObj.getTransaction()) {
                    sessionObj.getTransaction().rollback();
                }
                sqlException.printStackTrace();
            } finally {
                if(sessionObj != null) {
                    sessionObj.close();
                }
            }
        }
				
        // Método para eliminar un profesor de la base de datos
        public static void deleteProfessor(Integer profesor_id) {
            try {
                sessionObj = buildSessionFactory().openSession();
                sessionObj.beginTransaction();

                Professor professorObj = (Professor) sessionObj.get(Professor.class, profesor_id);
                int personId = professorObj.getPro_fk_per_pk_id();

                Person personObj = (Person) sessionObj.get(Person.class, personId);
                sessionObj.delete(professorObj);
                sessionObj.delete(personObj);

                sessionObj.getTransaction().commit();
            } catch(Exception sqlException) {
                    if(null != sessionObj.getTransaction()) {
                        sessionObj.getTransaction().rollback();
                    }
                    sqlException.printStackTrace();
            } finally {
                    if(sessionObj != null) {
                        sessionObj.close();
                    }
            }
        }
    }