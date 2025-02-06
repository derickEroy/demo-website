import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedUsers } from "../../../core/configs/reduxConfig/slices/tempState";
import axiosInstance from "../../../core/configs/axiosConfig";

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useQuery({
        queryKey: [search],
        enabled: !!search,
        queryFn: async () => {
            if (!search) {
                dispatch(setSearchedUsers([]));
                return [];
            }
        
            const response = await axiosInstance.get(`/users/getUsers?email=${search}`);
            const data = response.data;
        
            dispatch(setSearchedUsers(data));
        
            return data;
        }
    });

    useEffect(() => {
        if (!search) dispatch(setSearchedUsers([]));
    }, [search, dispatch]);
      

    return (
        <input
            type='text'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}