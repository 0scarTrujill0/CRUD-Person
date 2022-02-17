<%-- 
    Document   : index
    Created on : 15/02/2022, 02:56:21 PM
    Author     : o_tru
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.oscartrujillo.crudperson.operations.ControlerCrud"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="css/bootstrap.min.css">   		
        <script src="js/bootstrap.min.js"></script>
        <title>CRUD Person</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1 class="title float-left">
                        CRUD de Personas
                    </h1>
                </div>
                <div class="col-6">
                    <div class="d-flex h-100 float-right">
                        <button type="button" class="btn btn-sm btn-outline-success align-self-center" data-toggle="modal" data-target="#modalCrearEstudiante">
                            Crear Estudiante
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-success align-self-center ml-2" data-toggle="modal" data-target="#modalCrearProfesor">
                            Crear Profesor
                        </button>
                    </div>  
                </div>
            </div>
            <hr class="mt-2 mb-3"/>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-student-tab" data-toggle="tab" href="#nav-student" role="tab" aria-controls="nav-student" aria-selected="true">Estudiantes</a>
                    <a class="nav-item nav-link" id="nav-professor-tab" data-toggle="tab" href="#nav-professor" role="tab" aria-controls="nav-professor" aria-selected="false">Profesores</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-student" role="tabpanel" aria-labelledby="nav-student-tab">
                    Lista de estudiantes
                </div>
                <div class="tab-pane fade" id="nav-professor" role="tabpanel" aria-labelledby="nav-professor-tab">
                    Lista de profesores
                </div>
            </div>
            <hr class="mt-2 mb-3"/>
            <div class="container footer">
                <div class="row">
                    <div class="col-12 text-center">
                        Copyright &#169; Oscar Trujillo 2022
                    </div>
                </div>
            </div>
        </div>
              
        <!-- Código de las modales para agregar -->
        <div class="modal fade" id="modalCrearEstudiante" tabindex="-1" role="dialog" aria-labelledby="modalCrearEstudiante" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Crear Estudiante</h5>
                    </div>
                    <div class="modal-body">
                        <form action="ControlerCrud" method="POST" id="formCrearEstudiante">
                            <input type="hidden" name="crudAction" id="crudAction" value="createStudent"/>
                            <table class="table table-borderless">
                                <tbody>    
                                    <tr>
                                        <td>
                                            <label for="CrearEstudianteNombre">Nombre:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearEstudianteNombre" name="CrearEstudianteNombre" placeholder="Nombre">
                                        </td>
                                        <td>
                                            <label for="CrearEstudianteTelefono">Tel&eacute;fono:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearEstudianteTelefono" name="CrearEstudianteTelefono" placeholder="Tel&eacute;fono">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="CrearEstudianteEmail">Email:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearEstudianteEmail" name="CrearEstudianteEmail" placeholder="Email">
                                        </td>
                                        <td>
                                            <label for="CrearEstudianteNumeroLista">N&uacute;mero en lista:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearEstudianteNumeroLista" name="CrearEstudianteNumeroLista" placeholder="N&uacute;mero en lista">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="CrearEstudiantePromedio">Promedio:</label>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control" id="CrearEstudiantePromedio" name="CrearEstudiantePromedio" placeholder="Promedio">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                </div>
                        </form>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="modalCrearProfesor" tabindex="-1" role="dialog" aria-labelledby="modalCrearProfesor" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Crear Profesor</h5>
                    </div>
                    <div class="modal-body">
                        <form action="ControlerCrud" method="POST" id="formCrearProfesor">
                            <input type="hidden" name="crudAction" id="crudAction" value="createProfessor"/>
                            <table class="table table-borderless">
                                <tbody>    
                                    <tr>
                                        <td>
                                            <label for="CrearProfesorNombre">Nombre:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearProfesorNombre" name="CrearProfesorNombre" placeholder="Nombre">
                                        </td>
                                        <td>
                                            <label for="CrearProfesorTelefono">Tel&eacute;fono:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearProfesorTelefono" name="CrearProfesorTelefono" placeholder="Tel&eacute;fono">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="CrearProfesorEmail">Email:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearEstudianteEmail" name="CrearProfesorEmail" placeholder="Email">
                                        </td>
                                        <td>
                                            <label for="CrearProfesorSalario">Salario:</label>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="CrearProfesorSalario" name="CrearProfesorSalario" placeholder="Salario">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                </div>
                        </form>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>