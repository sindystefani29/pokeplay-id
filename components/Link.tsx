import React from 'react'
import { useRouter } from 'next/router'

type Props = {
    href: string,
    activeClassName?: string,
    additionalClassName?: string
}

const activeLink: React.FC<Props> = ({
    children,
    href,
    activeClassName,
    additionalClassName
}) => {
    const router = useRouter()
    const className = router.pathname === href ? activeClassName : ''

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={`${additionalClassName} ${className}`}>
            {children}
        </a>
    )
}

export default activeLink