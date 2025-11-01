import { useEffect, useState } from "react";

export function useForm(
  data: Record<string, any>,
  validations: {
    [key: string]: boolean;
  }[]
) {
  const [errors, setErrors] = useState<Partial<typeof data>>({});

  function getErrorMessage(key: keyof typeof data) {
    if (errors[key]) {
      return errors[key];
    }
  }

  function setError(key: string, message: string) {
    setErrors((prevState) => {
      if (!prevState[key]) {
        return {
          ...prevState,
          [key]: message,
        };
      }

      return prevState;
    });
  }

  function removeError(key: string) {
    setErrors((prevState) => {
      delete prevState[key];

      return prevState;
    });
  }

  useEffect(() => {
    //
  }, [data]);

  return { getErrorMessage };
}
