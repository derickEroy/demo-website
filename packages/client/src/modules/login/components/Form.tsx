import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { loginCredentialsSchema } from '../validators/schemas';
import { userActions } from '../../../core/configs/reduxConfig';
import axiosInstance from '../../../core/configs/axiosConfig';
import type { AxiosError, AxiosResponse } from 'axios';
import type { ILoginCredentials, ISafeUser } from 'server/src/domain/types/dtos';
import type { IError } from 'server/src/domain/types/errors';

export default function Form() {
    const [show, setShow] = useState(false);

    const { register, handleSubmit, setError, formState: { errors }} = useForm<ILoginCredentials>({
        resolver: zodResolver(loginCredentialsSchema)
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { mutate } = useMutation({
        async mutationFn(data: ILoginCredentials) {
            return await axiosInstance.post('/users/login', data);
        },
        onSuccess(response: AxiosResponse<ISafeUser>) {
            dispatch(userActions.setValue(response.data));
            navigate({ to: '/' });
        },
        onError(error: AxiosError<IError>) {
            const data = error.response?.data;
            const credentials = data?.credentials;

            if (credentials && credentials.includes('password')) {
                setError('password', { message: data.message });
            }

            setError('root', { message: 'Login failed.' });
        }
    });

    return (
        <form onSubmit={handleSubmit((data) => mutate(data))}>
            { errors?.root && <small>{errors.root.message}</small> }
            <div>
                <label htmlFor='email'>Email</label>
                <input {...register('email')} type='text' id='email' />
                { errors?.email && <small>{errors.email.message}</small> }
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input {...register('password')} type={show ? 'text' : 'password'} />
                <button type='button' onClick={() => setShow(p => !p)}>Show</button>
                { errors?.password && <small>{errors.password.message}</small> }
            </div>
            <button>Login</button>
            <small>Don't have an account? <Link to='/register'>Create.</Link></small>
        </form>
    );
}