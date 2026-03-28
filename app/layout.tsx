import { CartProvider } from "components/cart/cart-context";
import Footer from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import { WelcomeToast } from "components/welcome-toast";
import { Outfit, Roboto_Mono } from "next/font/google";
import { getCart } from "lib/shopify";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${robotoMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-background font-display text-text-primary antialiased selection:bg-accent-subtle selection:text-text-primary"
      >
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster closeButton />
          <WelcomeToast />
        </CartProvider>
      </body>
    </html>
  );
}
