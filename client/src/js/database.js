import { openDB } from "idb";

const indexedDB =
   window.indexedDB ||
   window.mozIndexedDB ||
   window.webkitIndexedDB ||
   window.msIndexedDB ||
   window.shimIndexedDB;

const initdb = async () =>
  openDB("zach", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("zach")) {
        console.log("zach database already exists");
        return;
      }
      db.createObjectStore("zach", { keyPath: "id", autoIncrement: true });
      console.log("zach database created");
    },
  });


export const putDb = async (content) => {
  const jateDb = await openDB("zach", 1);
  const tx = jateDb.transaction("zach", "readwrite");
  const store = tx.objectStore("zach");
  const request = store.put({ id: 1, jate: content });
  const result = await request;
  console.log(result);
};


export const getDb = async () => {
  const zachDB = await openDB("zach", 1);
  const tx = zachDB.transaction("zach", "readonly");
  const store = tx.objectStore("zach");
  const request = store.getAll();
  const result = await request;
  console.log(result);
  return result?.value;
};

initdb();
