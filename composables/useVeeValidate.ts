import { useForm } from 'vee-validate';
import * as yup from 'yup';

interface FormValues {
  email: string;
  name: string;
  password: string;
}

export default function useVeeValidate() {
  // Define a validation schema
  const schema = yup.object().shape({
    email: yup.string().required('必填').email('錯誤的email格式'),
    name: yup.string().required('必填'),
    password: yup.string().required('必填').min(8, '密碼長度至少8個字元')
  });

  const { errors, useFieldModel } = useForm<FormValues>({
    validationSchema: schema
  });

  return {
    errors,
    useFieldModel
  };
}
