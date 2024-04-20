"use client";
import AuthProvider from "@/components/Auth/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/libs/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobiz Test",
  description: "Test for Mobiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let presistor = persistStore(store);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Provider store={store}>
            <PersistGate persistor={presistor}>
              <AuthProvider>{children}</AuthProvider>
            </PersistGate>
          </Provider>
        </main>
      </body>
    </html>
  );
}
