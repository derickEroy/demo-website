import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import type { RootState } from '../configs/reduxConfig/store';

export function useProtectRoute(endpoint: string, shouldBeAuthenticated: boolean) {
    const user = useSelector((state: RootState) => state.persistedState.user);
    const navigate = useNavigate();

    useEffect(() => {
        if ((user && !shouldBeAuthenticated) || (!user && shouldBeAuthenticated)) {
            navigate({ to: endpoint });
        }
    }, [user, shouldBeAuthenticated, endpoint, navigate]);
}