import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();

const listCategory = ref(db, 'category/');

onValue(listCategory, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
});

