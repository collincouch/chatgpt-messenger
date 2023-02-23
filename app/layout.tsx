import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { SessionProvider } from "@/components/SessionProvider";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1"> {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
