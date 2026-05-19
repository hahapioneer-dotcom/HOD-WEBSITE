import { Hanken_Grotesk, Archivo_Narrow } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    variable: '--font-hanken',
    display: 'swap',
});

const archivo = Archivo_Narrow({
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
});

export const metadata = {
    title: 'House of Directors | Creative Video Production Studio',
    description: 'From Concept to Camera We Do It All. Premium video production services for brands, businesses, and educational institutions across India and globally.',
    keywords: ['video production', 'creative studio', 'brand films', 'corporate videos', 'school videos', 'India'],
    authors: [{ name: 'House of Directors' }],
    openGraph: {
        title: 'House of Directors | Creative Video Production Studio',
        description: 'From Concept to Camera We Do It All',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en" className={`${hanken.variable} ${archivo.variable}`}>
            <body className="font-archivo">
                <div className="grain-overlay" />
                <Header />
                <PageTransition>
                    <main>{children}</main>
                </PageTransition>
                <Footer />
            </body>
        </html>
    );
}
