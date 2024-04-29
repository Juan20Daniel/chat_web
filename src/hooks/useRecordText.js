import { useRef, useEffect, useState } from 'react';
import { useWindowWidth } from './useWindowWidth';
export const useRecord = (text) => {
    const [ fullname, setFullName ] = useState(text);
    const { windowWidth } = useWindowWidth();
    const element = useRef();

    useEffect(() => {
        const replaceText = (startToReplace) => {
            element.current.title = text;
            const dividerText = fullname.split("");
            dividerText.splice(startToReplace, fullname.length - 1);
            const joinText = dividerText.join('');
            return setFullName(joinText.concat('...'));
        }
        const recordText = () => {
            if(fullname.length <= 22 || (windowWidth > 380 && windowWidth < 700)) {
                element.current.removeAttribute('title');
                return setFullName(text);
            }
            if(fullname.length > 25 && windowWidth > 700) replaceText(25);
            if(windowWidth <= 380) replaceText(20);
        }
        recordText();
    },[fullname, windowWidth, text]);
    return {element, fullname}
}