import * as yup from 'yup';

export const departmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.string().required(),
  phone_number: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
