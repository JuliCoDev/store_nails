import { database } from '../../services/connectionFirebase';
import { ref, onValue} from 'firebase/database';
import { useEffect, useState } from "react";

export const useListQuery = (table) =>{

    const [list , setList] = useState([]);

    useEffect(() =>{ 
        loadList()
    }, [])

    const loadList = () => {
        
        const queryTable = ref(database, table);     
        
        onValue(queryTable, (snapshot) => {
            setList(snapshot.val());    
        });
    }


    return list;
}

