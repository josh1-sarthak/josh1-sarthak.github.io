import { getPageMarkdown } from "@/lib/api"

export const metadata = {
    title: 'uses',
}

export default async function Uses() {
    const { html } = await getPageMarkdown('uses.md')
    return (
        <div className="tiny">
            <h2> uses </h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}