import { createFileRoute } from '@tanstack/react-router'
import { useProtectRoute } from '../core/customHooks/useProtectRoute'
import LeftBar from '../modules/index/components/LeftBar';
import Chatbox from '../modules/index/components/Chatbox';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  useProtectRoute('/login', true);
  return (
    <div className="grid grid-cols-[auto_1fr]">
        <LeftBar />
        <Chatbox />
    </div>
  );
}
