import { createArray } from "@utils/createArray";

interface Validation {
  field: string;
  value: string;
  regex: RegExp;
  message: string;
}

interface UseFormProps {
  validations: Validation[];
}

export function useForm({ validations }: UseFormProps) {
  let errors = {} as Record<string, string>;

  function setError(key: string, message: string) {
    errors = {
      ...errors,
      [key]: message,
    };
  }

  function removeError(key: string) {
    delete errors[key];
  }

  function checkData() {
    for (const validation of validations) {
      const { field, value, regex, message } = validation;

      if (value) {
        if (regex.test(value)) {
          removeError(field);
        } else {
          setError(field, message);
        }
      } else {
        removeError(field);
      }
    }
  }

  checkData();

  return { errors, hasErrors: !!createArray(errors).length };
}
