import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  check_in: yup.date().required(),
  check_out: yup.date().nullable(),
  total_hours: yup.number().integer().required(),
  status: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
