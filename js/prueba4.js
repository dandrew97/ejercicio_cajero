let usuarioIng, usuarioReg, contraseñaIng, contraseñaReg, saldo ;

usuarioIng = prompt ("Ingrese su usuario aquí")
usuarioReg = "andreacampos"
contraseñaIng = prompt ("Ingrese su contraseña aquí")
contraseñaReg = "1234"
saldo = "$1.000.000"

if (usuarioIng == usuarioReg && contraseñaIng == contraseñaReg) {
    alert ("Cuenta validada, su saldo es de " + " " + saldo)
} else {
    alert ("Usuario o contraseña incorrecta, tienes 3 intentos más")

    usuarioIng = prompt ("Ingrese su usuario aquí")
    usuarioReg = "andreacampos"
    contraseñaIng = prompt ("Ingrese su contraseña aquí")
    contraseñaReg = "1234"
    saldo = "$1.000.000"

    if (usuarioIng == usuarioReg && contraseñaIng == contraseñaReg) {
        alert ("Cuenta validada, su saldo es de " + " " + saldo)
    } else {
        alert ("Usuario o contraseña incorrecta, tienes 2 intentos más")
    }

    usuarioIng = prompt ("Ingrese su usuario aquí")
    usuarioReg = "andreacampos"
    contraseñaIng = prompt ("Ingrese su contraseña aquí")
    contraseñaReg = "1234"
    saldo = "$1.000.000"

    if (usuarioIng == usuarioReg && contraseñaIng == contraseñaReg) {
        alert ("Cuenta validada, su saldo es de " + " " + saldo)
    } else {
        alert ("Usuario o contraseña incorrecta, tienes 1 intentos más")
    }

    usuarioIng = prompt ("Ingrese su usuario aquí")
    usuarioReg = "andreacampos"
    contraseñaIng = prompt ("Ingrese su contraseña aquí")
    contraseñaReg = "1234"
    saldo = "$1.000.000"

    if ( usuarioIng == usuarioReg && contraseñaIng == contraseñaReg ) {
        alert ("Cuenta validada, su saldo es de " + " " + saldo)
    } else {
        alert ("Usuario o contraseña incorrecta, su cuenta ha sido bloqueada, por favor comunicarse con con la oficina central") 
    }
}