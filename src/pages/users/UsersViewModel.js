import { useGetData } from '../../hooks/useGetData';
export const UsersViewModel = () => {
    const {data, notResult, elementLiRef, elementUlRef, hasMore, thereAreData} = useGetData('users');
    return { data, notResult, elementLiRef, elementUlRef, hasMore, thereAreData }
}
