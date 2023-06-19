import { getPostById, getAllPosts } from "@/lib/api";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, date } = await getPostById(id);
  return (
    <article>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}