import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

export default function LeftBar() {
    return (
        <div className="p-4 border-r">
            <SearchBar />
            <SearchList />
        </div>
    )
}