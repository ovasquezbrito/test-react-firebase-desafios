import db from './firebaseConfig.js'
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc, query, where, updateDoc, increment } from 'firebase/firestore'


export const fetchPosts = async () => {
  const listas = []
  const postslist = collection(db, 'posts');
  const postSnapshot = await getDocs(postslist);
  postSnapshot.docs.map(doc => (
    listas.push({...doc.data(), id: doc.id})
  ))
  return listas;
};
export const createPost = async (newPost) => {

  try {
    const docref = await addDoc(collection(db, 'posts'),newPost)
    return docref
  } catch (error) {
    console.error("Error adding document: ", error);
  }

}
export const updatePost = async (id, updatePost) => {
  try {
    await setDoc(doc(db, "posts", id), updatePost);
  } catch (error) {
    console.log(error)
  }
};
export const deletePost = async (id) => {
  await deleteDoc(doc(db, "posts", id))
};
export const likePost = async (post) => {
  const washingtonRef = doc(db, "posts", post.id);
  await updateDoc(washingtonRef, {
    likeCount: increment(1)
  });
  
  post.likeCount = post.likeCount + 1
  return post;
};

export const getCompanies = async () => {
  const companyList = []
  const companyColletion = collection(db, 'sales');
  const companySnapshot = await getDocs(companyColletion);
  companySnapshot.docs.map(doc => (
    companyList.push({...doc.data(), id: doc.id})
  ))
  return companyList;
};

export const getDetailsCompany = async (nameCompany) => {
  const detailsCompanyList = []
  const saleRef = collection(db, "sales");
  const queryComapies = query(saleRef, where("nameAgency", "==", nameCompany));
  const detailsSnapshot = await getDocs(queryComapies);
  detailsSnapshot.docs.map(doc => (
    detailsCompanyList.push({...doc.data(), id: doc.id})
  ))
  return detailsCompanyList;
};
