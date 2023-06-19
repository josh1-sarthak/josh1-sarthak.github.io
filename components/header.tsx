import Link from "next/link";
import { Home } from 'react-feather';

export default function Header() {
    return (
        <header style={{ marginBottom: 100, display: 'flex', alignItems: 'center' }}>
            <Link href="/"><Home color="black" /></Link>
            <Link href="/blog">blog</Link>
            <Link href="/projects">projects</Link>
            <Link href="/uses">uses</Link>
            <Link href="/about">about</Link>
        </header>
    )
}