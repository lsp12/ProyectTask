import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup.string().required("titulo obligatorio."),
    description: yup.string().required("Descripcion obligatoria."),
    image: yup.string().url("Ingrese una url valida."),
    tads: yup.array(),
    type: yup.string().required("Tipo obligatorio."),

});
