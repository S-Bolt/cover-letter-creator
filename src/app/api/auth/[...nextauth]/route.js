import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();
console.log("hello from ...nextauth route");
export const authOptions = {
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🔥 AUTH ROUTE HIT - Credentials received:", credentials);

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          console.log("❌ User not found");
          throw new Error("User not found");
        }

        const isValid = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) {
          console.log("❌ Invalid password attempt for:", credentials.email);
          throw new Error("Invalid password");
        }

        console.log("✅ User logged in successfully:", user);
        return { id: user.id, email: user.email, username: user.username };
      },
    }),
  ],

  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production" ? true : false,
        path: "/",
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("✅ Storing user data in token:", user);
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("📡 Generating session:", token);
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.username = token.username;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
