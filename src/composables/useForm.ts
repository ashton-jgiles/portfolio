import { reactive, ref } from "vue";

type Rules<T> = Partial<Record<keyof T, (val: any) => string | null>>;

export function useForm<T extends object>(initial: T, rules?: Rules<T>) {
  const fields = reactive<T>({ ...initial });
  const errors = reactive<Partial<Record<keyof T, string>>>({});
  const isSubmitting = ref(false);

  function validate(): boolean {
    if (!rules) {
      return true;
    }
    let valid = true;
    for (const key in rules) {
      const rule = rules[key];
      if (!rule) {
        continue;
      }
      const error = rule((fields as any)[key]);
      if (error) {
        (errors as any)[key] = error;
        valid = false;
      } else {
        delete (errors as any)[key];
      }
    }
    return valid;
  }

  function reset() {
    Object.assign(fields, initial);
    Object.keys(errors).forEach((k) => delete (errors as any)[k]);
  }

  function setError(field: keyof T, message: string) {
    (errors as any)[field] = message;
  }

  return { fields, errors, isSubmitting, validate, reset, setError };
}
