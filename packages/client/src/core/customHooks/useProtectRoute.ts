import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../configs/reduxConfig';

export function useProtectRoute(endpoint: string, shouldBeAuthenticated: boolean) {
    const user = useSelector((state: RootState) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (
            (user && !shouldBeAuthenticated) ||
            (!user && shouldBeAuthenticated)
        ) {
            navigate({ to: endpoint });
        }
    }, [user, shouldBeAuthenticated, endpoint, navigate]);
}