import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  dashboard_id: yup.string().nullable().required(),
});
