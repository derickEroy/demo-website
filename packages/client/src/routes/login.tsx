import { createFileRoute } from '@tanstack/react-router';
import { useProtectRoute } from '../core/customHooks/useProtectRoute';
import Header from '../modules/login/components/Header';
import Form from '../modules/login/components/Form';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/', false);
  return (
    <div>
        <Header />
        <div>
            <Form />
        </div>
    </div>
  );
}