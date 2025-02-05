import UserSearchBar from "./UserSearchBar";
import UserSearchList from "./UserSearchList";

export default function LeftBar() {
    return (
        <div className="p-4 border-r">
            <UserSearchBar />
            <UserSearchList />
        </div>
    )
}