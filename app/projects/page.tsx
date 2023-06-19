import { getPageMarkdown } from "@/lib/api"

export const metadata = {
    title: 'projects',
}

export default async function Projects() {
    const { html } = await getPageMarkdown('projects.md')
    return (
        <div className="tiny">
            <h2> projects </h2>
            <div className="myprojects" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}