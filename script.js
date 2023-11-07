const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics');
const { getStorage, ref, uploadBytes } = require('firebase/storage');
const {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  addDoc,
} = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: 'AIzaSyAgEC_G_ni6xVmU19W2BGQvKLFSqJxB7Yc',
  authDomain: 'adminunicom-77fd2.firebaseapp.com',
  databaseURL: 'https://adminunicom-77fd2-default-rtdb.firebaseio.com',
  projectId: 'adminunicom-77fd2',
  storageBucket: 'adminunicom-77fd2.appspot.com',
  messagingSenderId: '860031065903',
  appId: '1:860031065903:web:ee51dcdaed8819d6b7cbda',
  measurementId: 'G-8MZYMPG5KS',
};

(async function () {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  const storage = getStorage(app);
  // console.log('storage', storage);
  // const localFilePath = '1 – 37.jpg'; // Path to your local image file
  // const file = fs.readFileSync(localFilePath);

  const storageRef = ref(storage, 'images/image.jpg'); // Destination path in the Storage bucket

  // Upload file to Firebase Storage
  const localFilePath = '1 – 37.jpg'; // Path to your local image file
  const file = fs.readFileSync(localFilePath);
  const snapshot = await uploadBytes(storageRef, file);

  console.log('Uploaded a file:', snapshot.ref.fullPath);

  // Reported messeges here
  async function reports(collectionName) {
    const data = collection(database, collectionName);
    const dataSnapshot = await getDocs(data);
    const list = dataSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return list;
  }
  const messageReports = await reports('Reported_Chat_Messages');
  console.log('messageReports', messageReports);
  // const commentsReports = await reports('Reported_Comments_Data');
  // console.log('commentsReports', commentsReports);
  const postsReports = await reports('Reported_Posts_Data');
  console.log('postsReports', postsReports);

  async function getSingleDocument(collectionPath, docId, updateData = null) {
    const docRef = doc(database, collectionPath, docId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      if (updateData) {
        await updateDoc(docRef, updateData);
      }
      console.log('doc.data()', docSnapshot.data());
      return docSnapshot.data();
    } else {
      return null;
    }
  }
  const updateData = {
    block: true,
    isDeleted: true,
    gill: 'pizzaDone from code dynamically',
    blockReason: 'offensive message , ja tur ja',
  };

  const update = await getSingleDocument(
    'Users',
    messageReports[0].userId,
    updateData,
  );
  const postDeleted = await getSingleDocument('posts', postsReports[0].itemId, {
    isDeleted: true,
  });
  const resolveStatus = await getSingleDocument(
    'Reported_Posts_Data',
    postsReports[0].id,
    {
      status: 'resolved',
    },
  );
  console.log('update', update);
  console.log('resolveStatus', resolveStatus);
})();
