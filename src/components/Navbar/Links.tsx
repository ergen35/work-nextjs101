import Link from "next/link"

export function Links() {

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]

    return (
        <>
            {links.map((link, index) => <Link href={link.path} key={link.title}>{link.title}</Link>)}
        </>
    )
}