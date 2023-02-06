const ldap = require("ldapjs")
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

async function authenticate(username: string, password: string) {
   const usuario = "uid=" + username + ",ou=people,dc=instituto,dc=extremadura,dc=es";
   const contra = password;
   const client = ldap.createClient({
     url: process.env.LDAP_HOST as string,
   });
   const entries: ldap.SearchEntry[] = [];
   console.log("client.bind");
   return new Promise((resolve, reject) => {
     client.bind(
       usuario as string,
       contra as string,
       //process.env.LDAP_DN as string,
       //process.env.LDAP_PASSWORD as string,
       (error) => {
         if (error) {
           console.log("client.bind");
           reject('LDAP bound failed' + usuario);
         } else {
           console.log("client.bind");
           const opts: ldap.SearchOptions = {
             //filter: `(&(sAMAccountName=${username}))`,
             filter: `(&(uid={username}))`,
             scope: 'sub',
             attributes: ['cn'],
           };

           client.search(
             process.env.LDAP_BASE_DN as string,
             opts,
             (err, res) => {
               if (err) {
                 reject(`User ${username} LDAP search error` + err);
               } else {
                 res.on('searchRequest', (searchRequest) => {
                   //console.log('searchRequest: ', searchRequest.messageID);
                 });
                 res.on('searchEntry', (entry) => {
                   reject(`Nombre Usuario:`);
                   entries.push(entry);
                   //const nombre_usuario = entry.cn as string;
                   reject(`Nombre Usuario:`);
                   client.bind(entry.cn, password, (err, res) => {
                     if (err) {
                       reject(`User ${username} username or password problem`);
                     } else {
                       resolve({
                         username: 'Francisco',
                       });
                     }
                   });
                 });
                 res.on('searchReference', (referral) => {
                   //console.log('referral: ' + referral.uris.join());
                 });
                 res.on('error', (err) => {
                   reject('LDAP SEARCH error');
                 });
                 res.on('end', (result) => {
                   //if (entries.length == 0) {
                     //reject(`User ${username} username or password problem`);
                   //}
                   resolve({
                     username,
                   });
                 });
               }
             }
           );
         }
       }
     );
   });
}


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "LDAP",
      credentials: {
        username: { label: "DN", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        credentials.username = "uid=" + credentials.username + ",ou=people,dc=instituto,dc=extremadura,dc=es";
        console.log('Url: ' + process.env.LDAP_HOST)
        //console.log('Username: ' + credentials.username)
        //console.log('Url: ' + credentials.password)
        // You might want to pull this call out so we're not making a new LDAP client on every login attemp
        const client = ldap.createClient({
          url: process.env.LDAP_HOST as string,
        })
        // Essentially promisify the LDAPJS client.bind function
        return new Promise((resolve, reject) => {
          client.bind(credentials.username, credentials.password, (error) => {
            if (error) {
              console.log('Username: ' + credentials.username)
              console.error("Failed")
              reject()
            } else {
              console.log("Logged in")
              resolve({
                username: credentials.username,
                password: credentials.password,
              })
            }
          })
        })
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const isSignIn = user ? true : false
      if (isSignIn) {
        token.username = user.username
        token.password = user.password
      }
      return token
    },
    async session({ session, token }) {
      return { ...session, user: { username: token.username } }
    },
  }
})
