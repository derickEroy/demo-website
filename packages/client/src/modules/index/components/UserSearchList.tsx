import { useSelector } from "react-redux";
import { useNavigate } from "@tanstack/react-router";
import type { RootState } from "../../../core/configs/redux/store";
import type { ISafeUser } from "server/src/domain/types/dtos";

export default function UserSearchList() {
    const searchedUsers = useSelector((state: RootState) => state.tempState.searchedUsers);
    const navigate = useNavigate();

    return (
        searchedUsers.length > 0 ? (
            <ul>
                {searchedUsers?.map((user: ISafeUser) => (
                    <li key={user._id}>
                        <button
                            type='button'
                            onClick={() => navigate({ to: user._id })}
                        >{user.email}</button>
                    </li>
                ))}
            </ul>
        ) : null
    )
}