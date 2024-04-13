import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']});

export const metadata: Metadata = {
  title: "Security and System",
  description: "Somos una empresa dedicada a brindar soluciones integrales en el ámbito de diseño y desarrollo web, aplicaciones móviles, hosting, seguridad digital e infraestructura IT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
