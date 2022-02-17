/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.oscartrujillo.crudperson.operations;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author o_tru
 */
@WebServlet(name = "ControlerCrud", urlPatterns = {"/ControlerCrud"})
public class ControlerCrud extends HttpServlet {
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ControlerCrud</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ControlerCrud at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String crudActionObj = request.getParameter("crudAction");
        switch (crudActionObj){
            case "createStudent" : createStudent(request, response);
            break;
            
            case "createProfessor" : createProfessor(request, response);
            break;
            
            case "listPersons" : listPersons(request, response);
            break;
        }
    }
    
    private void listPersons(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        List < Student > listStudent = DbOperations.readStudents();
        //List < Professor > listProfessor = DbOperations.readProfessors();
        request.setAttribute("listStudent", listStudent);
        //request.setAttribute("listProfessor", listProfessor);
        RequestDispatcher dispatcher = request.getRequestDispatcher("PersonList.jsp");
        dispatcher.forward(request, response);
    }
    
    private void createStudent(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String personName = request.getParameter("CrearEstudianteNombre");
        String phoneNumber = request.getParameter("CrearEstudianteTelefono");
        String emailAddress = request.getParameter("CrearEstudianteEmail");
        String studentNumber = request.getParameter("CrearEstudianteNumeroLista");
        String averageMarkString = request.getParameter("CrearEstudiantePromedio");
        float averageMark=Float.parseFloat(averageMarkString);
        
        Person personObj = new Person();
        personObj.setPer_name(personName);
        personObj.setPer_phone_number(phoneNumber);
        personObj.setPer_email_address(emailAddress);
        
        Student studentObj = new Student();
        studentObj.setStu_number(studentNumber);
        studentObj.setStu_average_mark(averageMark);
        
        DbOperations.createStudent(personObj, studentObj);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("StudentAdded.jsp?personName=" + personName);
        dispatcher.forward(request, response);
    }
    
    private void createProfessor(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String personName = request.getParameter("CrearProfesorNombre");
        String phoneNumber = request.getParameter("CrearProfesorTelefono");
        String emailAddress = request.getParameter("CrearProfesorEmail");
        String salary = request.getParameter("CrearProfesorSalario");
        
        Person personObj = new Person();
        personObj.setPer_name(personName);
        personObj.setPer_phone_number(phoneNumber);
        personObj.setPer_email_address(emailAddress);
        
        Professor professorObj = new Professor();
        professorObj.setPro_salary(salary);
        
        DbOperations.createProfessor(personObj, professorObj);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("ProfessorAdded.jsp?personName=" + personName);
        dispatcher.forward(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
