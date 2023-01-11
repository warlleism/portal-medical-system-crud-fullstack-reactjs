import Swal from "sweetalert2";


class apiUtil {

    createData = async (url, formulario) => {

        const OptionsRegister = {
            body: JSON.stringify(formulario),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(url, OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: data.sucess,
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: data.error,
                    })
                }
            })
    }

    updateData = async (url, formulario) => {

        const OptionsRegister = {
            body: JSON.stringify(formulario),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(url, OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'edição feita com sucesso',
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Ops.. ocorreu um erro",
                    })
                }
            })
    }
}

export default apiUtil;