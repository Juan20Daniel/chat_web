import { useContext } from "react";
import ChatContext from "../../context/chatContext/ChatContext";
export const ChatZoneViewModel = () => {
    const { contact } = useContext(ChatContext);
  return { contact }
}