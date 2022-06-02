import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQSU1T3Hxab7nS-BIZ9B07p5khvV3R9uo",
  authDomain: "react-coder-vivas.firebaseapp.com",
  projectId: "react-coder-vivas",
  storageBucket: "react-coder-vivas.appspot.com",
  messagingSenderId: "17491888944",
  appId: "1:17491888944:web:312bb35e54300558d3d6f5"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getCategories = async() => {

  const categoriesCollection = collection(db, 'categories');

  try {
    const res = await getDocs(categoriesCollection);
    const categories = res.docs.map(c => ({ id: c.id, ...c.data() }));
    return categories;
  } catch (error) {
    console.log('Ocurrió un error', error);
  }
}

export const getProducts = async(category = null) => {
  let productsCollection;

  if (category) {
    productsCollection = query(
      collection(db, 'products'),
      where('category', '==', category)
    );
  } else {
    productsCollection = collection(db, 'products');
  }

  try {
    const res = await getDocs(productsCollection);
    const products = res.docs.map(p => ({ id: p.id, ...p.data() }));
    return products;
  } catch (error) {
    console.log('Ocurrió un error', error);
  }
}

export const getProduct = async (id) => {
  const productRef = doc(db, 'products', id);

  try {
    const res = await getDoc(productRef);
    if (res.exists()) {
      const product = {id: res.id, ...res.data()};
      return product
    } else {
      return null;
    }
  } catch (error) {
    console.log('Ocurrió un error', error);
  }
}

export const setOrder = async(order) => {
  const ordersCollection = collection(db, 'orders');
  try {
    const { id } = await addDoc(ordersCollection, order)
    return id;
  } catch (error) {
    console.log('Ocurrió un error', error);
  }
}

export const updateProductStock = async(id, orderQuantity) => {
  const productRef = doc(db, 'products', id);
  try {
    const { stock } = await getProduct(id);
    const newStock = stock - orderQuantity;
    updateDoc(productRef, { stock: newStock });
  } catch (error) {
    console.log('Ocurrió un error', error);
  }
}