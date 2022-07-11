import React from 'react';
import 'bootstrap/dist/css/bootstrap.css' ;
import  ChatIds  from '../components/ChatFeed';
import  MessageCont from '../components/MessageForm';

const Home = () => {
    return (
        <div className='bg-info mt-5'>
            
            <h1 className="text-white">
                Chain-Chat
            </h1>
            
            <div className="row g-0 d-flex">
                <div className="col-4">
                    <ChatIds />
                </div>    
            
            
            <div className="col-8">
                    <MessageCont />
            </div>
            </div>
        </div>
        
    );
};

export default Home;

