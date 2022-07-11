import 'bootstrap/dist/css/bootstrap.css' ;
import { Link } from 'react-router-dom' ;

const ChatIds = () => {
  let chatList = new Array (10).fill( "Yelefemi", 1);
  return (
     <div className="border border-white h-100 list-group">
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {chatList.map((singleChat, index) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/chatList/${index}`}
            key={index}
          >
            {singleChat}
          </Link>
        ))}
      </nav>
  
      
     </div>
       
  );
};

export default ChatIds; 

