import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { CalendarViewDay, Create, EventNote, Image, SubscriptionsOutlined } from '@material-ui/icons';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser);
    const [input,setInput]= useState('');
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        });
    },[])
    


    const sendPost = (e) =>{
        e.preventDefault();
        if (input !==""){
           db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl: user.photoUrl ||"",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
        
        setInput("");

        }
        

    };

  return (
      <div className='feed'>
          <div className='feed__inputContainer'>
              <div className='feed__input'>
                  <Create />
                  <form>
                      <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                      <button onClick={sendPost} type='submit'>Sent</button>
                  </form>
              </div>
              <div className='feed__inputOptions'>
                  <InputOption Icon={Image} title='Photo' color='#70B5F9' />
                  <InputOption Icon={SubscriptionsOutlined} title='Video' color='#E7A33E' />
                  <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
                  <InputOption Icon={CalendarViewDay} title='Write article' color='#7FC15E' />
              </div>

          </div>
          <FlipMove>
          {posts.map(({id, data:{name, description, message,photoUrl}})=>(
              <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
          )

          )}
              
          </FlipMove>
          

      </div>
  
    )
};

export default Feed;
