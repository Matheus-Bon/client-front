import "./globals.css";
// import { GlobalProvider } from "./ordering/OrderingProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body className='bg-slate-50'>
        {children}
      </body>

    </html>
  );
}
