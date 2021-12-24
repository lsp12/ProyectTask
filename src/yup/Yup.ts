import * as yup from 'yup';

export const schema = yup.object().shape({
    tittle: yup.string().required("Campo obligatorio."),
    description: yup.string(),
    image: yup.string().url("Ingrese una url valida."),
    tads: yup.array()
});
