import { useGetData } from "../../hooks/useGetData";
export const ContactsViewModel = () => {
    const {data, notResult, elementLiRef, elementUlRef, hasMore, thereAreData} = useGetData('contacts');
    return { data, notResult, elementLiRef, elementUlRef, hasMore, thereAreData }
}
