import api from "../../../core/configs/axiosConfig";
import { setUser } from "../../../core/configs/reduxConfig/slices/persistedState";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { rawUserSchema } from "../validators/schemas";
import type { AxiosError, AxiosResponse } from 'axios';
import type { IRawUser, ISafeUser } from "server/src/domain/types/dtos";
import type { IError } from 'server/src/domain/types/errors';

export default function Form() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register, 
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<IRawUser>({
        resolver: zodResolver(rawUserSchema)
    });
    
    const { mutate } = useMutation({
        mutationFn: async (data: IRawUser) => {
            return await api.post('/users/register', data);
        },
        onSuccess: (response: AxiosResponse<ISafeUser>) => {
            dispatch(setUser(response.data));
            navigate({ to: '/' });
        },
        onError: (error: AxiosError<IError>) => {
            const data = error.response?.data;
            const query = data?.query;
        
            if (query && 'email' in query) {
                setError('email', { message: data?.message });
            }
        
            setError('root', { message: 'Register failed.' });
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
            <button type='submit'>Create</button>
            <small>Already have an account? <Link to='/login'>Login.</Link></small>
        </form>
    );
}
