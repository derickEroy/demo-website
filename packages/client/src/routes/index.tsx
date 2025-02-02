import { createFileRoute } from '@tanstack/react-router'
import { useProtectRoute } from '../core/customHooks/useProtectRoute'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/login', true);
  return <div>Hello "/"!</div>
}
