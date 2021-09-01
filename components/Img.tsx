import React, { useEffect } from 'react'
import lozad from 'lozad'

type img = React.RefObject<HTMLImageElement>;
type Props = {
    src: string,
    alt: string,
    style?: Object,
    className?: string
}

const Img: React.FC<Props> = ({
    src,
    style,
    className,
    alt
}) => {
    const imgRef: img = React.createRef();
    useEffect(() => {
        if (src) {
            const el = imgRef.current
            const observer = lozad('.lozad', {
                loaded: function (el: { classList: { add: (arg0: string) => void; }; }) {
                    // Custom implementation on a loaded element
                    el.classList.add('fade-img');
                }
            }); // lazy loads elements with default selector as '.lozad'
            observer.observe();
            if (el) {
                const dataSrc = el.getAttribute('data-src')
                if (dataSrc !== el.src && dataSrc && el.src) {
                    el.src = dataSrc
                    el.onerror = () => {
                        el.src = "/no-image.webp"
                    }
                }
                el.onerror = () => {
                    if (dataSrc === src) {
                        el.src = dataSrc
                        el.onerror = () => {
                            el.src = "/no-image.webp"
                        }
                    }
                }
                // const dataSrc = el.getAttribute('data-src')
                // if (dataSrc == src) {
                //     el.src = dataSrc
                // };
            }
        }
    }, [src])
    return (
        <img
            ref={imgRef}
            data-src={src ? src : '/no-image.webp'}
            src="/Transparent.webp"
            style={style}
            alt={alt}
            className={`lozad ${className ? className : ''}`}
        />
    )
}

export default Img