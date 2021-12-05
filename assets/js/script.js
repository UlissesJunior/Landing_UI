function validation() {
    let InputValue = document.getElementById("input")
    let limite = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    if(InputValue.value.match(limite)) {
        Swal.fire({
            title: "Cadastrado com sucesso!",
            icon: "success"
});
    } else if(InputValue.value == "") {
        Swal.fire({
            title: "Campo Vazio",
            icon: "warning"
        });
    } else {
        Swal.fire({
            title: "Email Inválido",
            icon: "error"
        });
    }
}

function validation2() {
    let InputValue = document.getElementById("input2")
    let limite = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    if(InputValue.value.match(limite)) {
        Swal.fire({
            title: "Cadastrado com sucesso!",
            icon: "success"
});
    } else if(InputValue.value == "") {
        Swal.fire({
            title: "Campo Vazio",
            icon: "warning"
        });
    } else {
        Swal.fire({
            title: "Email Inválido",
            icon: "error"
        });
    }
}

//Para transformar as 2 functions em 1, só levar em consideração o botão como ponto de referência