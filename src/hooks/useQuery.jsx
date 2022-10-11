import { database } from '../services/config/connectionFirebase';
import { ref, onValue, query, limitToLast, orderByChild, equalTo} from 'firebase/database';
import { useEffect, useState } from "react";


export const useListQuery = (table, filter={}) =>{

    //List whit result of data base
    const [list , setList] = useState([]);

    useEffect(() =>{ 
        loadList()
    }, [])

    //Doing query to database
    const loadList = () => {                
        let queryList = {};
        if(filter.key){
            queryList = query(
                ref(database, table), 
                orderByChild(filter.key), 
                equalTo(filter.value), 
                limitToLast(50)
            );
        }else{
            queryList = query(ref(database, table), limitToLast(50));
        }

        onValue(queryList, (snapshot) => {
            setList(snapshot.val()); 
        });
    }


    return list;
}


