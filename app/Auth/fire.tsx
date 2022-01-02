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
export async function getDonors(){
 await firestore().collection('Users').where('BloodDonar', '!=', true).get().then((users) => {
   console.log(users);
   
    return users;
}).catch(()=>{
  return null;
})
}

