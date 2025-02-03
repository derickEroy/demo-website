import LeftBar from "../components/LeftBar";
import Chatbox from "../components/Chatbox";

export default function IndexPage() {
    return (
        <div className="grid grid-cols-[auto_1fr]">
            <LeftBar />
            <Chatbox />
        </div>
    )
}