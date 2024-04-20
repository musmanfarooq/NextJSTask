import { users } from "@/helpers/constant";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter Email",
          value: "usman@mobiz.com",
        },
        password: {
          label: "Password",
          placeholder: "Enter Password",
          value: "mobiz",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const user = users.find((item) => item.email === item.email);
        if (
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
