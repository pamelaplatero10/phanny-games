import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-panel-administracion',
  styleUrl: './panel-administracion.css',
  templateUrl: './panel-administracion.html',
})
export class PanelAdministracion {
  seccion = 'cuentas';
  pestanaCuentas = 'usuarios';
  filtroCuentas = 'activas';
  pestanaContenido = 'novelas';
  pestanaReportes = 'reportes';

  busqueda = '';
  busquedaActividad = '';

  // DEMOSTRACIÓN DE LA CUENTA ADMINISTRATIVA ACTUAL
  nombreAdminActual = 'Administradora principal';
  fotoAdminActual = '👑';
  rolActual = 'Propietaria';
  correoAdminActual = 'admin@phannygames.com';
  mostrarEditarPerfil = false;
  nuevoNombreAdmin = '';
  nuevaFotoAdmin = '';
  nuevaContrasenaAdmin = '';
  confirmarContrasenaAdmin = '';

  // CUENTAS DE USUARIOS
  usuarios = [
    { id: 1, nombre: 'LunaNocturna', correo: 'luna@email.com', fecha: '10/10/2026', estado: 'Activo', foto: '🌙' },
    { id: 2, nombre: 'KitsuneBlue', correo: 'kitsune@email.com', fecha: '12/10/2026', estado: 'Suspendido', foto: '🦊' },
    { id: 3, nombre: 'EstrellaAzul', correo: 'estrella@email.com', fecha: '15/10/2026', estado: 'Desactivado', foto: '⭐' }
  ];

  // CUENTAS DE DESARROLLADORES
  desarrolladores = [
    { id: 1, nombre: 'MoonStudio', correo: 'moon@email.com', fecha: '05/09/2026', estado: 'Activo', foto: '🌌', novelas: 3, muros: 2 },
    { id: 2, nombre: 'BlueInk', correo: 'blueink@email.com', fecha: '18/09/2026', estado: 'Activo', foto: '🖋️', novelas: 2, muros: 1 },
    { id: 3, nombre: 'DreamWorks', correo: 'dream@email.com', fecha: '20/10/2026', estado: 'Desactivado', foto: '💫', novelas: 1, muros: 1 }
  ];

  // ADMINISTRADORES. LA CUENTA 1 ES LA PROPIETARIA.
  administradores = [
    { id: 1, nombre: 'Administradora principal', correo: 'admin@phannygames.com', fecha: '01/08/2026', foto: '👑', rol: 'Propietaria', estado: 'Activo' },
    { id: 2, nombre: 'Admin de apoyo', correo: 'apoyo@phannygames.com', fecha: '15/09/2026', foto: '🛡️', rol: 'Administrador', estado: 'Activo' }
  ];

  // CONTENIDO PARA MODERACIÓN
  novelas = [
    { id: 1, titulo: 'Bajo la luna', autor: 'MoonStudio', fecha: '02/10/2026', estado: 'Publicado', descripcion: 'Una historia de misterio que comienza bajo una luna azul.' },
    { id: 2, titulo: 'Ecos del pasado', autor: 'BlueInk', fecha: '08/10/2026', estado: 'Reportado', descripcion: 'Una novela sobre secretos familiares y recuerdos olvidados.' }
  ];

  muros = [
    { id: 1, titulo: 'Comunidad Bajo la luna', autor: 'MoonStudio', fecha: '05/10/2026', estado: 'Apelación en revisión', descripcion: 'Espacio de comunidad para compartir ilustraciones y comentarios de la novela.' },
    { id: 2, titulo: 'Rincón de historias', autor: 'DreamWorks', fecha: '11/10/2026', estado: 'En revisión', descripcion: 'Muro de fanarts y publicaciones de la comunidad.' }
  ];

  fanarts = [
    { id: 1, titulo: 'Noche estrellada', autor: 'LunaNocturna', fecha: '12/10/2026', estado: 'Apelación en revisión', imagen: '🌙✨', descripcion: 'Ilustración de una noche iluminada por estrellas.' },
    { id: 2, titulo: 'Personaje principal', autor: 'KitsuneBlue', fecha: '14/10/2026', estado: 'Reportado', imagen: '🦊🌌', descripcion: 'Ilustración del personaje principal de la novela.' }
  ];

  // REPORTES
  reportes = [
    { id: 1, elemento: 'Ecos del pasado', tipo: 'Novela', autor: 'BlueInk', motivo: 'Contenido inapropiado', fecha: '15/11/2026', estado: 'Pendiente', detalle: 'El usuario considera que algunos fragmentos incumplen las normas de la comunidad.' },
    { id: 2, elemento: 'LunaNocturna', tipo: 'Usuario', autor: 'Cuenta de usuario', motivo: 'Comportamiento inadecuado', fecha: '16/11/2026', estado: 'Pendiente', detalle: 'Se reportó el comportamiento de esta cuenta dentro de la comunidad.' },
    { id: 3, elemento: 'Personaje principal', tipo: 'Fanart', autor: 'KitsuneBlue', motivo: 'Uso indebido de contenido', fecha: '17/11/2026', estado: 'Revisado', detalle: 'Se solicita revisar la autoría y el uso de la ilustración.' }
  ];

  // APELACIONES
  apelaciones = [
    { id: 1, elemento: 'Comunidad Bajo la luna', autor: 'MoonStudio', motivo: 'Considero que la eliminación fue un error.', fecha: '16/11/2026', estado: 'Pendiente', tipo: 'Muro' },
    { id: 2, elemento: 'Noche estrellada', autor: 'LunaNocturna', motivo: 'El fanart es de mi propia autoría.', fecha: '17/11/2026', estado: 'Pendiente', tipo: 'Fanart' }
  ];

  // REGISTRO DE ACTIVIDAD
  actividades = [
    { id: 1, admin: 'Administradora principal', accion: 'Creación de administrador', elemento: 'Admin de apoyo', fecha: '17/11/2026 10:30', resultado: 'Correcto' },
    { id: 2, admin: 'Admin de apoyo', accion: 'Revisión de reporte', elemento: 'Ecos del pasado', fecha: '17/11/2026 09:15', resultado: 'Revisado' },
    { id: 3, admin: 'Administradora principal', accion: 'Moderación de fanart', elemento: 'Noche estrellada', fecha: '16/11/2026 18:20', resultado: 'Correcto' }
  ];

  // VENTANAS Y FORMULARIOS
  detalle: any = null;
  confirmacion: any = null;
  mostrarCrearAdmin = false;
  mostrarMensaje = false;
  mensaje = '';
  pasoAdmin = 1;
  nuevoNombre = '';
  nuevoCorreo = '';
  nuevaContrasena = '';
  confirmarContrasena = '';

  get cuentasMostradas() {
    let lista = this.pestanaCuentas === 'usuarios' ? this.usuarios : this.desarrolladores;

    return lista.filter(cuenta => {
      let coincideEstado = this.filtroCuentas === 'desactivadas'
        ? cuenta.estado === 'Desactivado'
        : cuenta.estado !== 'Desactivado';

      let coincideBusqueda =
        cuenta.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        cuenta.correo.toLowerCase().includes(this.busqueda.toLowerCase());

      return coincideEstado && coincideBusqueda;
    });
  }

  get actividadesMostradas() {
    return this.actividades.filter(actividad =>
      actividad.admin.toLowerCase().includes(this.busquedaActividad.toLowerCase()) ||
      actividad.accion.toLowerCase().includes(this.busquedaActividad.toLowerCase()) ||
      actividad.elemento.toLowerCase().includes(this.busquedaActividad.toLowerCase())
    );
  }

  cambiarSeccion(seccion: string) {
    if (seccion === 'actividad' && this.rolActual !== 'Propietaria') {
      this.mostrarAviso('La bitácora está disponible únicamente para la propietaria.');
      return;
    }
    this.seccion = seccion;
    this.busqueda = '';
  }

  abrirDetalle(item: any, tipo: string) {
    this.detalle = { ...item, tipo: tipo };
  }

  cerrarDetalle() {
    this.detalle = null;
  }

  abrirEditarPerfil() {
    this.nuevoNombreAdmin = this.nombreAdminActual;
    this.nuevaFotoAdmin = this.fotoAdminActual;
    this.nuevaContrasenaAdmin = '';
    this.confirmarContrasenaAdmin = '';
    this.mostrarEditarPerfil = true;
  }

  guardarPerfilAdmin() {
    if (!this.nuevoNombreAdmin.trim()) {
      this.mostrarAviso('Escribe un nombre para continuar.');
      return;
    }
    if (this.nuevaContrasenaAdmin && this.nuevaContrasenaAdmin !== this.confirmarContrasenaAdmin) {
      this.mostrarAviso('Las contraseñas no coinciden.');
      return;
    }

    this.nombreAdminActual = this.nuevoNombreAdmin;
    this.fotoAdminActual = this.nuevaFotoAdmin || '👑';

    let admin = this.administradores.find(item => item.id === 1);
    if (admin) {
      admin.nombre = this.nombreAdminActual;
      admin.foto = this.fotoAdminActual;
    }

    this.registrarActividad('Edición del perfil administrativo', this.nombreAdminActual, 'Correcto');
    this.mostrarEditarPerfil = false;
    this.mostrarAviso('Perfil actualizado en la demostración.');
  }

  cambiarEstadoCuenta(cuenta: any, accion: string) {
    if (accion === 'suspender') {
      cuenta.estado = 'Suspendido';
    } else if (accion === 'reactivar') {
      cuenta.estado = 'Activo';
    } else if (accion === 'desactivar') {
      cuenta.estado = 'Desactivado';
    }

    this.registrarActividad('Cambio de estado de cuenta', cuenta.nombre + ' · ' + cuenta.estado, 'Correcto');
    this.mostrarAviso('El estado de la cuenta se actualizó en la demostración.');
  }

  verPerfilPublico(desarrollador: any) {
    this.detalle = {
      tipo: 'Perfil público del desarrollador',
      nombre: desarrollador.nombre,
      estado: desarrollador.estado,
      novelas: desarrollador.novelas,
      novelasPublicadas: this.novelas.filter(item => item.autor === desarrollador.nombre).map(item => item.titulo).join(', ') || 'Sin novelas publicadas en esta demostración',
      muros: desarrollador.muros,
      murosPublicados: this.muros.filter(item => item.autor === desarrollador.nombre).map(item => item.titulo).join(', ') || 'Sin muros publicados en esta demostración',
      descripcion: 'Vista de demostración del perfil que podría consultar un visitante de Phanny Games.'
    };
  }

  abrirConfirmacion(item: any, tipo: string, accion: string) {
    this.confirmacion = { item: item, tipo: tipo, accion: accion };
  }

  cancelarEliminar() {
    this.confirmacion = null;
  }

  confirmarEliminar() {
    let item = this.confirmacion.item;
    let tipo = this.confirmacion.tipo;
    let accion = this.confirmacion.accion;

    if (tipo === 'contenido') {
      item.estado = accion === 'restaurar' ? 'Publicado' : 'Eliminado';
      this.registrarActividad(accion === 'restaurar' ? 'Restauración de contenido' : 'Retiro de contenido', item.titulo, 'Correcto');
    }

    if (tipo === 'administrador') {
      if (item.id === 1 || item.id === 0) {
        this.mostrarAviso('La cuenta de la propietaria está protegida.');
        this.confirmacion = null;
        return;
      }
      item.estado = accion === 'reactivar' ? 'Activo' : 'Suspendido';
      this.registrarActividad(accion === 'reactivar' ? 'Reactivación de administrador' : 'Suspensión de administrador', item.nombre, 'Correcto');
    }

    this.confirmacion = null;
    this.mostrarAviso('Acción de demostración realizada correctamente.');
  }

  abrirCrearAdmin() {
    if (this.rolActual !== 'Propietaria') {
      this.mostrarAviso('Solo la propietaria puede crear administradores.');
      return;
    }
    this.mostrarCrearAdmin = true;
    this.pasoAdmin = 1;
    this.nuevoNombre = '';
    this.nuevoCorreo = '';
    this.nuevaContrasena = '';
    this.confirmarContrasena = '';
  }

  cancelarCrearAdmin() {
  this.mostrarCrearAdmin = false;
  this.pasoAdmin = 1;
}


  siguientePasoAdmin() {
    if (!this.nuevoNombre || !this.nuevoCorreo || !this.nuevaContrasena || !this.confirmarContrasena) {
      this.mostrarAviso('Completa todos los campos.');
      return;
    }
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      this.mostrarAviso('Las contraseñas no coinciden.');
      return;
    }
    this.pasoAdmin = 2;
  }

  guardarAdmin() {
    this.administradores.push({
      id: Date.now(),
      nombre: this.nuevoNombre,
      correo: this.nuevoCorreo,
      fecha: '18/11/2026',
      foto: '🛡️',
      rol: 'Administrador',
      estado: 'Activo'
    });

    this.registrarActividad('Creación de administrador', this.nuevoNombre, 'Demostración');
    this.mostrarCrearAdmin = false;
    this.mostrarAviso('Administrador agregado a la demostración.');
  }

  resolverReporte(reporte: any) {
    reporte.estado = 'Revisado';
    this.registrarActividad('Resolución de reporte', reporte.elemento, 'Revisado');
    this.mostrarAviso('Reporte marcado como revisado.');
  }

  resolverApelacion(apelacion: any, decision: string) {
    apelacion.estado = decision;

    if (decision === 'Aceptada') {
      if (apelacion.tipo === 'Novela') {
        let contenido = this.novelas.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Publicado';
      }
      if (apelacion.tipo === 'Muro') {
        let contenido = this.muros.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Publicado';
      }
      if (apelacion.tipo === 'Fanart') {
        let contenido = this.fanarts.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Publicado';
      }
    } else {
      if (apelacion.tipo === 'Novela') {
        let contenido = this.novelas.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Eliminado';
      }
      if (apelacion.tipo === 'Muro') {
        let contenido = this.muros.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Eliminado';
      }
      if (apelacion.tipo === 'Fanart') {
        let contenido = this.fanarts.find(item => item.titulo === apelacion.elemento);
        if (contenido) contenido.estado = 'Eliminado';
      }
    }

    this.registrarActividad('Resolución de apelación', apelacion.elemento, decision);
    this.mostrarAviso(decision === 'Aceptada'
      ? 'Apelación aceptada. El contenido se restauró en la demostración.'
      : 'Apelación rechazada. El contenido permanece retirado.');
  }

  registrarActividad(accion: string, elemento: string, resultado: string) {
    this.actividades.unshift({
      id: Date.now(),
      admin: this.nombreAdminActual,
      accion: accion,
      elemento: elemento,
      fecha: '18/11/2026',
      resultado: resultado
    });
  }

  mostrarAviso(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrarMensaje = true;
  }

  cerrarAviso() {
    this.mostrarMensaje = false;
  }
}

