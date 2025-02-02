import { createFileRoute } from '@tanstack/react-router'
import { useProtectRoute } from '../core/customHooks/useProtectRoute';
import RegisterPage from '../modules/register/pages/RegisterPage'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/', false);
  return <RegisterPage />;
}