import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rawUserSchema } from "../validators/schemas";
import { Link } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import ToggledElement from "../../../core/components/ToggledElement";
import axiosInstance from "../../../core/configs/axiosConfig";
import FormErrorText from "../../../core/components/FormErrorText";
import type { AxiosError } from 'axios';
import type { IRawUser } from "server/src/domain/types/dtos";
import type { IError } from 'server/src/domain/types/errors';

export default function Form() {
    const { register, handleSubmit, setError, formState: { errors }} = useForm<IRawUser>({
        resolver: zodResolver(rawUserSchema)
    });
    
    const { mutate } = useMutation({
        async mutationFn(data: IRawUser) {
            return await axiosInstance.post('/users/register', data);
        },
        onError(error: AxiosError<IError>) {
            const data = error.response?.data;
            const query = data?.query;

            if (query && 'email' in query) {
                setError('email', { message: data?.message });
            }

            setError('root', { message: 'Register failed.' });
        }
    });

    const { toggle, Component: PasswordInput } = ToggledElement(
        'input',
        { ...register('password'), type: 'password', id: 'password' },
        { type: 'text' }
    );

    return (
        <form onSubmit={handleSubmit((data) => mutate(data))}>
            <FormErrorText targetKey='root' errors={errors} />
            <div>
                <label htmlFor='email'>Email</label>
                <input {...register('email')} type='text' id='email' />
                <FormErrorText targetKey='email' errors={errors} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <PasswordInput />
                <button type="button" onClick={toggle}>Show</button>
                <FormErrorText targetKey='password' errors={errors} />
            </div>
            <button type='submit'>Create</button>
            <small>Already have an account? <Link to='/login'>Login.</Link></small>
        </form>
    );
}
