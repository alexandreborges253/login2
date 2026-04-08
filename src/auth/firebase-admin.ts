import * as admin from 'firebase-admin';
import * as path from 'path';

// O arquivo JSON é aquele que você baixou do Console do Firebase
//const serviceAccount = require(path.resolve(__dirname, '..', 'ponte-juridica-firebase-adminsdk-fbsvc-8598db6b2b.json'));
const serviceAccountPatch = path.resolve(process.cwd(), 'ponte-juridica-firebase-adminsdk-fbsvc-8598db6b2b.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPatch),
  });
}

export const authAdmin = admin.auth();