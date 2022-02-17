// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function setCriterio(num) {
    criterio = num;
}


function activarBotonConCheck(obj) {
    if (obj.checked)
        document.getElementById('usuarioContinuar').disabled = false;
    else
        document.getElementById('usuarioContinuar').disabled = true;
}

function guardarDatosPersonales() {

    var formulario = document.querySelector("#formularioDatosPersonales");
    var nombres = document.querySelector("#crearHVnombres");
    var apellido1 = document.querySelector("#crearHVapellido1");
    var apellido2 = document.querySelector("#crearHVapellido2");
    var nacionalidad = document.querySelector("#crearHVnacionalidadEscondido");
    var tipoDeDocumento = document.querySelector("#crearHVtipoDeDocumento");
    var numeroIdentificacion = document.querySelector("#crearHVnumeroIdentificacion");
    var fechaExpedicion = document.querySelector("#crearHVfechaExpedicion");
    var ciudadExpedicion = document.querySelector("#crearHVciudadExpedicion");
    var sexo = document.querySelector("#crearHVsexoEscondido");
    var grupoSanguineo = document.querySelector("#crearHVgrupoSanguineo");
    var factorRH = document.querySelector("#crearHVfactorRHEscondido");
    var libretaMilitar = document.querySelector("#crearHVlibretaMilitar");
    var distritoMilitar = document.querySelector("#crearHVdistritoMilitar");
    var claseMilitar = document.querySelector("#crearHVclaseLibreta");
    var fechaNacimiento = document.querySelector("#crearHVfechaNacimiento");
    var lugarNacimiento = document.querySelector("#crearHVlugarNacimiento");
    var estadoCivil = document.querySelector("#crearHVestadoCivil");
    var numeroHijos = document.querySelector("#crearHVnumeroHijos");
    var direccionResidencia = document.querySelector("#crearHVdirecionResidencia");
    var barrio = document.querySelector("#crearHVbarrio");
    var estrato = document.querySelector("#crearHVestrato");
    var telCelular = document.querySelector("#crearHVtelCelular");
    var telFijo = document.querySelector("#crearHVtelFijo");
    var correo = document.querySelector("#crearHVemail");
    var eps = document.querySelector("#crearHV-EPS");
    var pensiones = document.querySelector("#CrearHVfondoPensiones");
    var cesantias = document.querySelector("#crearHVfondoCesantias");
    var profesion = document.querySelector("#crearHVprofesion");
    var pkUsuario = document.querySelector("#pkUsuario");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        nombres: nombres.value,
        apellido1: apellido1.value,
        apellido2: apellido2.value,
        nacionalidad: nacionalidad.value,
        tipoDeDocumento: tipoDeDocumento.value,
        numeroIdentificacion: numeroIdentificacion.value,
        fechaExpedicion: fechaExpedicion.value,
        ciudadExpedicion: ciudadExpedicion.value,
        sexo: sexo.value,
        grupoSanguineo: grupoSanguineo.value,
        factorRH: factorRH.value,
        libretaMilitar: libretaMilitar.value,
        distritoMilitar: distritoMilitar.value,
        claseMilitar: claseMilitar.value,
        fechaNacimiento: fechaNacimiento.value,
        lugarNacimiento: lugarNacimiento.value,
        estadoCivil: estadoCivil.value,
        numeroHijos: numeroHijos.value,
        direccionResidencia: direccionResidencia.value,
        barrio: barrio.value,
        estrato: estrato.value,
        telCelular: telCelular.value,
        telFijo: telFijo.value,
        correo: correo.value,
        eps: eps.value,
        pensiones: pensiones.value,
        cesantias: cesantias.value,
        profesion: profesion.value,
        pkUsuario: pkUsuario.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
    .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
    .then(respuestaDecodificada => {

        var form = document.getElementById("formDatosPersonales");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].disabled = true;
        }
    });
}

function editarDatosPersonales() {

    var formulario = document.querySelector("#formEditarDatosPersonales");
    var nombres = document.querySelector("#editarHVnombres");
    var apellido1 = document.querySelector("#editarHVapellido1");
    var apellido2 = document.querySelector("#editarHVapellido2");
    var nacionalidad = document.querySelector("#editarHVnacionalidadEscondido");
    var tipoDeDocumento = document.querySelector("#editarHVtipoDeDocumento");
    var numeroIdentificacion = document.querySelector("#editarHVnumeroIdentificacion");
    var fechaExpedicion = document.querySelector("#editarHVFechaExpedicion");
    var ciudadExpedicion = document.querySelector("#editarHVciudadExpedicion");
    var sexo = document.querySelector("#editarHVsexoEscondido");
    var grupoSanguineo = document.querySelector("#editarHVgrupoSanguineo");
    var factorRH = document.querySelector("#editarHVfactorRHEscondido");
    var libretaMilitar = document.querySelector("#editarHVlibretaMilitar");
    var distritoMilitar = document.querySelector("#editarHVdistritoMilitar");
    var claseMilitar = document.querySelector("#editarHVclaseLibreta");
    var fechaNacimiento = document.querySelector("#editarHVfechaNacimiento");
    var lugarNacimiento = document.querySelector("#editarHVlugarNacimiento");
    var estadoCivil = document.querySelector("#editarHVestadoCivil");
    var numeroHijos = document.querySelector("#editarHVnumeroHijos");
    var direccionResidencia = document.querySelector("#editarHVdirecionResidencia");
    var barrio = document.querySelector("#editarHVbarrio");
    var estrato = document.querySelector("#editarHVestrato");
    var telCelular = document.querySelector("#editarHVtelCelular");
    var telFijo = document.querySelector("#editarHVtelFijo");
    var correo = document.querySelector("#editarHVemail");
    var eps = document.querySelector("#editarHV-EPS");
    var pensiones = document.querySelector("#editarHVfondoPensiones");
    var cesantias = document.querySelector("#editarHVfondoCesantias");
    var profesion = document.querySelector("#editarHVprofesion");
    var pkEmpleado = document.querySelector("#pkEmpleado");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        nombres: nombres.value,
        apellido1: apellido1.value,
        apellido2: apellido2.value,
        nacionalidad: nacionalidad.value,
        tipoDeDocumento: tipoDeDocumento.value,
        numeroIdentificacion: numeroIdentificacion.value,
        fechaExpedicion: fechaExpedicion.value,
        ciudadExpedicion: ciudadExpedicion.value,
        sexo: sexo.value,
        grupoSanguineo: grupoSanguineo.value,
        factorRH: factorRH.value,
        libretaMilitar: libretaMilitar.value,
        distritoMilitar: distritoMilitar.value,
        claseMilitar: claseMilitar.value,
        fechaNacimiento: fechaNacimiento.value,
        lugarNacimiento: lugarNacimiento.value,
        estadoCivil: estadoCivil.value,
        numeroHijos: numeroHijos.value,
        direccionResidencia: direccionResidencia.value,
        barrio: barrio.value,
        estrato: estrato.value,
        telCelular: telCelular.value,
        telFijo: telFijo.value,
        correo: correo.value,
        eps: eps.value,
        pensiones: pensiones.value,
        cesantias: cesantias.value,
        profesion: profesion.value,
        pkEmpleado: pkEmpleado.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
    .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
    .then(respuestaDecodificada => {

        document.getElementById("guardadoDelEditar").innerHTML = respuestaDecodificada;
        
    });
}

function editarOtrosDatos() {
    var formulario = document.querySelector("#formEditarOtrosDatos");
    var pkEmpleado = document.querySelector("#pkEmpleado");
    var cargo = document.querySelector("#editarHVcargo");
    var salario = document.querySelector("#editarHVSalario");
    var fechaInicioContrato = document.querySelector("#editarHVFechaInicioContrato");
    var fechaFinContrato = document.querySelector("#editarHVFechaFinContrato");
    var tipoContrato = document.querySelector("#editarHVTipoContrato");
    var editarJefe = document.querySelector("#editarHVjefe");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        pkEmpleado: pkEmpleado.value,
        cargo: cargo.value,
        salario: salario.value,
        fechaInicioContrato: fechaInicioContrato.value,
        fechaFinContrato: fechaFinContrato.value,
        tipoContrato: tipoContrato.value,
        editarJefe: editarJefe.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.getElementById("guardadoDelEditarOtrosDatos").innerHTML = respuestaDecodificada;
        });
        
}

function guardarFamiliares() {
    var formulario = document.querySelector("#formularioFamiliares");
    var tipoFamiliar = document.querySelector("#crearHVtipoFamiliar");
    var nombreFamiliar = document.querySelector("#crearHVnombreFamiliar");
    var apellido1Familiar = document.querySelector("#crearHVapellido1Familiar");
    var apellido2Familiar = document.querySelector("#crearHVapellido2Familiar");
    var profesionFamiliar = document.querySelector("#crearHVprofesionFamiliar");
    var compartenDomicilio = document.querySelector("#crearHVcompartenDomicilioEscondido");
    var direccionFamiliar = document.querySelector("#crearHVdireccionFamiliar");
    var telFamiliar = document.querySelector("#crearHVtelefonoFamiliar");
    var empresaFamiliar = document.querySelector("#crearHVempresaFamiliar");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        tipoFamiliar: tipoFamiliar.value,
        nombreFamiliar: nombreFamiliar.value,
        apellido1Familiar: apellido1Familiar.value,
        apellido2Familiar: apellido2Familiar.value,
        profesionFamiliar: profesionFamiliar.value,
        compartenDomicilio: compartenDomicilio.value,
        direccionFamiliar: direccionFamiliar.value,
        telFamiliar: telFamiliar.value,
        empresaFamiliar: empresaFamiliar.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaFamiliaresGuardados").innerHTML = respuestaDecodificada;
            document.getElementById('formularioFamiliaresCompleto').reset();
        });
        
}

function guardarContactoEmergencia() {
    var formulario = document.querySelector("#formularioContactoEmergencia");
    var nombreEmergencia = document.querySelector("#crearHVnombreEmergencia");
    var apellido1Emergencia = document.querySelector("#crearHVapellido1Emergencia");
    var apellido2Emergencia = document.querySelector("#crearHVapellido2Emergencia");
    var parentescoEmergencia = document.querySelector("#crearHVparentescoEmergencia");
    var telEmergencia1 = document.querySelector("#crearHVtelefonoEmergencia1");
    var telEmergencia2 = document.querySelector("#crearHVtelefonoEmergencia2");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        nombreEmergencia: nombreEmergencia.value,
        apellido1Emergencia: apellido1Emergencia.value,
        apellido2Emergencia: apellido2Emergencia.value,
        parentescoEmergencia: parentescoEmergencia.value,
        telEmergencia1: telEmergencia1.value,
        telEmergencia2: telEmergencia2.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaContactoEmergenciaGuardado").innerHTML = respuestaDecodificada;

            var form = document.getElementById("formularioEmergenciaCompleto");
            var elements = form.elements;
            for (var i = 0, len = elements.length; i < len; ++i) {
                elements[i].disabled = true;
            }
        });
}

function guardarFormacionAcademica() {
    var formulario = document.querySelector("#formularioFormacionAcademica");
    var tipoFormacion = document.querySelector("#crearHVtipoFormacionAcademica");
    var tituloObtenido = document.querySelector("#crearHVtituloObtenido");
    var institucion = document.querySelector("#crearHVinstitucion");
    var ciudadEstudios = document.querySelector("#crearHVciudadEstudios");
    var anoCulminacion = document.querySelector("#crearHVanoCulminacion");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        tipoFormacion: tipoFormacion.value,
        tituloObtenido: tituloObtenido.value,
        institucion: institucion.value,
        ciudadEstudios: ciudadEstudios.value,
        anoCulminacion: anoCulminacion.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaFormacionAcademicaGuardado").innerHTML = respuestaDecodificada;
            document.getElementById('formularioFormacionAcademicaCompleto').reset();
        });
}

function guardarIdiomas() {
    var formulario = document.querySelector("#formularioIdiomas");
    var idioma = document.querySelector("#crearHVidioma");
    var certificadoIdioma = document.querySelector("#crearHVcertificadoIdioma");
    var nivelIdioma = document.querySelector("#crearHVnivelIdioma");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        idioma: idioma.value,
        certificadoIdioma: certificadoIdioma.value,
        nivelIdioma: nivelIdioma.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaIdiomasGuardado").innerHTML = respuestaDecodificada;
            document.getElementById('formularioIdiomasCompleto').reset();
        });
}

function guardarExperienciaLaboral() {
    var formulario = document.querySelector("#formularioExperienciaLaboral");
    var empresaEXP = document.querySelector("#crearHVempresaEXP");
    var cargoEXP = document.querySelector("#crearHVcargoEXP");
    var direccionEXP = document.querySelector("#crearHVdireccionEXP");
    var telEXP = document.querySelector("#crearHVtelefonoEXP");
    var ciudadEXP = document.querySelector("#crearHVciudadEXP");
    var paisEXP = document.querySelector("#crearHVPaisEXP");
    var caracterEXP = document.querySelector("#crearHVcaracterEscondido");
    var fechaInicioEXP = document.querySelector("#crearHVfechaInicioEXP");
    var fechaRetiroEXP = document.querySelector("#ingresoFechaRetiroEXP");
    var nombreJefeEXP = document.querySelector("#crearHVnombreJefeEXP");
    var cargoJefeEXP = document.querySelector("#crearHVcargoJefeEXP");
    var tipoContratoEXP = document.querySelector("#crearHVtipoContratoEXP");
    var motivoRetiroEXP = document.querySelector("#crearHVmotivoRetiroEXP");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        empresaEXP: empresaEXP.value,
        cargoEXP: cargoEXP.value,
        direccionEXP: direccionEXP.value,
        telEXP: telEXP.value,
        ciudadEXP: ciudadEXP.value,
        paisEXP: paisEXP.value,
        caracterEXP: caracterEXP.value,
        fechaInicioEXP: fechaInicioEXP.value,
        fechaRetiroEXP: fechaRetiroEXP.value,
        nombreJefeEXP: nombreJefeEXP.value,
        cargoJefeEXP: cargoJefeEXP.value,
        tipoContratoEXP: tipoContratoEXP.value,
        motivoRetiroEXP: motivoRetiroEXP.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaEXPGuardado").innerHTML = respuestaDecodificada;
            document.getElementById('tablaEXPCompleto').reset();
        });
}

function guardarVisas() {
    var formulario = document.querySelector("#formularioVisas");
    var paisVisa = document.querySelector("#crearHVpaisVisa");
    var numeroVisa = document.querySelector("#crearHVnumeroVisa");
    var fechaExpedicionVisa = document.querySelector("#crearHVfechaExpedicionVisa");
    var fechaCaducidadVisa = document.querySelector("#crearHVfechaCaducidadVisa");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        paisVisa: paisVisa.value,
        numeroVisa: numeroVisa.value,
        fechaExpedicionVisa: fechaExpedicionVisa.value,
        fechaCaducidadVisa: fechaCaducidadVisa.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaVisaGuardado").innerHTML = respuestaDecodificada;
            document.getElementById('formularioVisaCompleto').reset();
        });
}

function guardarGremios() {
    var formulario = document.querySelector("#formularioGremios");
    var gremio = document.querySelector("#CrearHVgremios");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
        gremio: gremio.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            document.querySelector("#tablaGremiosGuardado").innerHTML = respuestaDecodificada;
            document.getElementById('formularioGremiosCompleto').reset();
        });
}

function guardarFinalizar() {
    var formulario = document.querySelector("#formularioFinalizar");

    // Armar objeto con datos
    const datos = {
        formulario: formulario.value,
    };

    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
        method: "POST", // Enviar por POST
        body: datosCodificados, // En el cuerpo van los datos
    })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            window.location = 'hoja_vida.php';
        });
}

function infoAdjunto(fkTipoAdjunto, nombreAdjunto) {
    document.getElementById('CrearTipoAdjuntoEscondido').value = fkTipoAdjunto;
    document.getElementById('nombreTipoAdjunto').innerHTML = nombreAdjunto;
}

function infoAdjunto(fkTipoAdjunto, nombreAdjunto) {
    document.getElementById('CrearTipoAdjuntoEscondido').value = fkTipoAdjunto;
    document.getElementById('nombreTipoAdjunto').innerHTML = nombreAdjunto;
}

function actualizarCriterio(competencia, criterio, calJefe, nivelAjuste, docente) {
    var cal = 0;
    var cals = 0;
    var critEmpleado = parseInt(document.getElementById("crit_emp_" + criterio).innerHTML, 10);
    var calEmpleado = parseInt(document.getElementById("cal-emp-" + competencia).dataset.calificacion, 10);
    var calJefe = parseInt(calJefe, 10);
    var eCompetencia = document.getElementsByName("competencia_" + competencia);

    for (var j = 0; j < eCompetencia.length; j++) {
        var crit = eCompetencia[j].querySelector("input:checked");
        crit !== null ? cal = parseInt(crit.value, 10) : cal = 0;
        cals = cals + cal;
    }
    if(nivelAjuste == 3) {
        cals = Math.round(cals * 2.8);
    } else if(nivelAjuste == 2) {
        cals = cals * 3.5;
        cals = Math.round(cals > 52.5 ? 70 : cals + 17.5);
    } else if(nivelAjuste == 1) {
        cals = cals * 3.5;
        cals = Math.round(cals > 35 ? 70 : cals + 35);
    }
    var def = cals + calEmpleado;

    document.getElementById("cal-def-" + competencia).className = "m-0 color-ajuste-alto";
    if (docente === false) {
        if(def < 80) {
            document.getElementById("cal-def-" + competencia).className = "m-0 color-ajuste-bajo";
            document.getElementById("header_acciones_" + competencia).style.display = "block";
            document.getElementById("texto_accion_" + competencia).dataset.mejora = "1";
            document.getElementById("fecha_accion_" + competencia).dataset.mejora = "1";
        } else {
            document.getElementById("cal-def-" + competencia).className = "m-0 color-ajuste-alto";
            document.getElementById("header_acciones_" + competencia).style.display = "none";
            document.getElementById("texto_accion_" + competencia).value = "";
            document.getElementById("fecha_accion_" + competencia).value = "";
            document.getElementById("texto_accion_" + competencia).dataset.mejora = "0";
            document.getElementById("fecha_accion_" + competencia).dataset.mejora = "0";
            mejoras[competencia]['accion'] = undefined;
            mejoras[competencia]['fecha'] = 'default';
        }
    } else {
        if(def < 80) {
            document.getElementById("cal-def-" + competencia).className = "m-0 color-ajuste-bajo";
            document.getElementById("texto_accion_" + competencia).dataset.mejora = "1";
            document.getElementById("fecha_accion_" + competencia).dataset.mejora = "1";
        } else {
            document.getElementById("cal-def-" + competencia).className = "m-0 color-ajuste-alto";
            document.getElementById("texto_accion_" + competencia).value = "";
            document.getElementById("fecha_accion_" + competencia).value = "";
        }
    }

    document.querySelector("#cal-jef-" + competencia).innerHTML = cals + "%";
    document.querySelector("#cal-def-" + competencia).dataset.calificacion = def;
    document.querySelector("#cal-def-" + competencia).innerHTML = def + "%";
    calificaciones[competencia] = def;
    totalEvaluacion();
}

function sumarPuntosEscalafon() {
    
    var A = parseInt(document.querySelector("#opcionA").value, 10);
    var B = parseInt(document.querySelector("#opcionB").value, 10);
    var C = parseInt(document.querySelector("#opcionC-1").value, 10) + parseInt(document.querySelector("#opcionC-2").value, 10);
    var D = parseInt(document.querySelector("#opcionD").value, 10);
    var E = parseInt(document.querySelector("#opcionE").value, 10);
    var F = parseInt(document.querySelector("#opcionF").value, 10);
    var G = parseInt(document.querySelector("#opcionG").value, 10);
    var H = parseInt(document.querySelector("#opcionH").value, 10);
    var I = parseInt(document.querySelector("#opcionI").value, 10);
    var J = parseInt(document.querySelector("#opcionJ").value, 10);
    var K = parseInt(document.querySelector("#opcionK").value, 10);
    var L = parseInt(document.querySelector("#opcionL").value, 10);
    
    var sumaPuntos = A + B + C + D + E+ F + G + H + I + J + K + L;
    
    if (sumaPuntos <= 200 && sumaPuntos >= 178)
    {
        var valorHora = 22262;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 177 && sumaPuntos >= 157)
    {
        var valorHora = 21216;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 156 && sumaPuntos >= 135)
    {
        var valorHora = 20171;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 134 && sumaPuntos >= 113)
    {
        var valorHora = 19316;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 112 && sumaPuntos >= 91)
    {
        var valorHora = 18452;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 90 && sumaPuntos >= 70)
    {
        var valorHora = 17637;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if (sumaPuntos <= 69 && sumaPuntos >= 46)
    {
        var valorHora = 16406;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
    else if(sumaPuntos <= 45 && sumaPuntos >= 0)
    {
        var valorHora = 13125;
        document.getElementById("totalPuntos").innerHTML = sumaPuntos + ' Puntos';
        document.getElementById("puntosEscalafon").value = sumaPuntos;
        document.getElementById("totalHora").innerHTML = '$' + valorHora;
        document.getElementById("valorHora").value = valorHora;
    }
}