import { createFileRoute } from '@tanstack/react-router';
import { useProtectRoute } from '../core/customHooks/useProtectRoute';
import Header from '../modules/register/components/Header';
import Form from '../modules/register/components/Form';

export const Route = createFileRoute('/register')({
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