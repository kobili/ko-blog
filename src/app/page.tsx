import Layout from '@/components/Layout';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Home Page - Kobe Li",
    description: "Generated by create next app",
    viewport: "width=device-width, initial-scale=1",
    icons: "/favicon.ico",
}

export default function Home() {
    return (
        <Layout>
            <div className='flex flex-col items-center'>
                <h1 className='text-9xl my-9 text-slate-400 drop-shadow-md'>Kobe Li</h1>
                <Link href="/about" className='text-xl text-blue-400 drop-shadow-sm'>About Me</Link>
                <Link href="/blog/EB-https" className='text-xl text-blue-400 drop-shadow-sm'>Setting Up HTTPS on an AWS Elastic Beanstalk Express App</Link>
            </div>


        </Layout>
    )
}
