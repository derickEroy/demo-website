import { createFileRoute } from '@tanstack/react-router'
import { useProtectRoute } from '../core/customHooks/useProtectRoute';
import LoginPage from '../modules/login/pages/LoginPage'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/', false);
  return <LoginPage />
}