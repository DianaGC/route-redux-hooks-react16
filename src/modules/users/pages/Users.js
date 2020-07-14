import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersById } from '../actions/actions';
import Card from '../components/Card';

const Users =() =>{
    const dispatch = useDispatch();
    const users = useSelector((state)=> state.users.usersById);
    console.log('......',users)

    useEffect(() => dispatch(fetchUsersById(1)),[]);

    return (
        <>
        {
            users.map(user =>{ 
                console.log(user)
                return <Card key={user.id} data={user}></Card>
            }
            )
        }
        </>
    )
}

export default Users;