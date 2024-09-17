import { animateScroll as scroll } from 'react-scroll';
export const scrollBottom = () => {
    scroll.scrollToBottom({
        containerId:'messages',
        duration:0
    });
}