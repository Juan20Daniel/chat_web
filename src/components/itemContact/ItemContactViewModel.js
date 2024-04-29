import { useContext } from "react";
import ChatContext from "../../context/chatContext/ChatContext";

export const ItemContactViewModel = () => {
    const { isMovil, setIsActive } = useContext(ChatContext);
    const openChat = () => {
        if(isMovil) setIsActive(true);
    }
    const stopPropagation = e => e.stopPropagation();
    return {stopPropagation, openChat}
}
