import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Twitter X',
	description: 'Twitter X is a Twitter clone built by En',
	authors: [{ name: 'En', url: '' }],
	 icons: { icon: "/images/x.svg" },
	openGraph: {
		title: 'Twitter X',
		description: "Twitter X is a Twitter clone built by En",
		type: 'website',
		url: 'https://www.instagram.com/',
		locale: 'uz_UZ',
		images: 'https://media.graphassets.com/3XlUA3OBSjaQcMNFYnVv',
		countryName: 'Uzbekistan',
		siteName: 'En',
		emails: 'accaunoff99@gmail.com',
	},
	keywords: "Twitter, Twitter web, twitter clone, twitter web application, Ilon, Ilon Mask, En"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
