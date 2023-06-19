import { getPageMarkdown } from "@/lib/api"

export const metadata = {
    title: 'about',
}

export default async function About() {
    const { html } = await getPageMarkdown('about.md')
    return (
        <div className="tiny">
            <h2> about </h2>
            <div className="mypic" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}