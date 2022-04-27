import Swal from 'sweetalert2';

export const showAlert = ({
    title
}: {
    title: string
}) => {
    Swal.fire({
        title: title
    })
}
