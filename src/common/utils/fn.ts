interface scrollProps {
    ref:React.RefObject<HTMLInputElement>, 
    setter: (state: boolean) => void
}

export const scroll = (ref:scrollProps['ref'], setter:scrollProps['setter']) => {
    if (ref.current) {
        const coord =
            ref.current.getBoundingClientRect().top +
            window.scrollY;
        window.scrollTo({ top: coord, behavior: 'smooth' });
        setter(false);
    }
};


export function scrollToContacts(active: boolean, scrollFn: () => void){
  
    let timeout: any;
    if (active) {
        timeout = setTimeout(() => {
            scrollFn();
        }, 200);
    }
    return () => {
        clearTimeout(timeout);
    };
}