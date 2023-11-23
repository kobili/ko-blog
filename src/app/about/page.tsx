import { Metadata } from 'next'
import AboutPage from './AboutPage'


export const metadata: Metadata = {
    title: "About Me"
}

export default function Page() {
    return <AboutPage />
}