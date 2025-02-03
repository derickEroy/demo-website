import { createFileRoute } from '@tanstack/react-router'
import { useProtectRoute } from '../core/customHooks/useProtectRoute'
import IndexPage from '../modules/index/pages/IndexPage';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/login', true);
  return <IndexPage />
}
