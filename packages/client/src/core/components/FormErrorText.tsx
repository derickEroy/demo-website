import { FieldErrors, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  errors: FieldErrors<T>;
  targetKey: keyof T | 'root';
}

export default function FormErrorText<T extends FieldValues>({ errors, targetKey }: Props<T>) {
  const error = errors[targetKey];
  return error ? <small>{error.message as string}</small> : null; 
}