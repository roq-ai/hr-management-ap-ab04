import * as yup from 'yup';

export const jobPositionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  salary: yup.number().integer().required(),
  requirements: yup.string().required(),
  department_id: yup.string().nullable().required(),
});
