import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export async function getAllOfCollection(collection: any) {
  let data: any[] = [];
  let querySnapshot = await firestore().collection(collection).get();
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}
export function getData(collection: any, doc: any, objectKey?: any) {
  if (!objectKey) {
    return firestore()
      .collection(collection)
      .doc(doc)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log(doc);
          
          return doc.data();
        } else {
          return false;
        }
      });
  } else {
    return firestore()
      .collection(collection)
      .doc(doc)
      .get()
      .then((doc: any) => {
        if (doc.exists && doc.data()[objectKey] != undefined) {
          return doc.data()[objectKey];
        } else {
          return false;
        }
      });
  }
}
export async function getDataArray(collection: any, doc: any, array: any, id: any) {
  console.log('ayayay');
  
  let data: any[] = [];
  let querySnapshot = await firestore()
    .collection(collection)
    .where('userId', '==', doc)
    .get();
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      data.push(doc.data());
      console.log('mila');
      
    } else {
      console.log('No document found!');
    }
  });
  console.log('Data',data);
  
  return data;
}
export async function getDataArray2(collection: any, array: any, id: any) {
  console.log(collection, array, id);

  let data: any[] = [];
  let querySnapshot = await firestore()
    .collection(collection)
    .where(array, '==', id)
    .get();
  console.log(querySnapshot, '-=-=-=');

  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}
export async function getDataCase(collection: any,) {
  let data: any[] = [];
  let querySnapshot = await firestore().collection(collection).get();
  querySnapshot.forEach(function (doc) {
    console.log(doc);
    
    if (doc.exists) {
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}
export async function saveData(collection: any, doc: any, jsonObject: any) {
  await firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
  //console.log("Document successfully written!");
}
export async function addData(collection: any, doc: any,collection1, jsonObject: any) {
  await firestore()
    .collection(collection)
    .doc(doc).collection(collection1).doc()
    .set(jsonObject, { merge: true })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
  //console.log("Document successfully written!");
}
export async function saveData1(collection: any, doc: any, jsonObject: any) {
  await firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject)
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
  //console.log("Document successfully written!");
}

export async function uploadImage(uri: any, path: any) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage().ref(path);
    const task: any = ref.put(blob);
    return new Promise((resolve, reject) => {
      task.on(
        'state_changed',
        (taskSnapshot: any) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        },
        (err: any) => {
          reject(err);
        },
        async () => {
          const url = await task.snapshot.ref.getDownloadURL();
          resolve(url);
          return url;
        },
      );
    });
  } catch (err) {
    console.log('uploadImage error: ' + err);
  }
}
export async function getSpecialties(collection: any, doc: any) {
  // console.log('ayayay');
  let temp=[];
 return firestore()
      .collection(collection)
      .doc(doc)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log('mila');
          // console.log(doc.data());
          // temp=[doc.data().selected]
          return doc?.data()
        } else {
          return false;
        }
      });
  // return temp;
  // return data;
}

export async function deleteBooking(bookingId: string) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection("Booking")
      .doc(bookingId).delete().then(() => {
        resolve("");
      });
  });
}

