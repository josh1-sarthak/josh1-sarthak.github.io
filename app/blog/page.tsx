import { getAllPosts } from "@/lib/api"
import Link from "next/link"

export const metadata = {
    title: 'blog',
}

export default async function Blog() {
    const allPosts = await getAllPosts()
    return (
        <section>
            <ul>
                {allPosts.map(post => {
                    const { id, date, title } = post
                    return (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                {date} - {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )  
}