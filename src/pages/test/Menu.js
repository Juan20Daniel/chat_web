import { Link } from 'react-router-dom';
import React from 'react';

export const Menu = () => {
  return (
    <div style={{position:'relative', boxShadow:'0 0.5rem 0.5rem black', width:'100%', height:'100vh', display:'flex', flexDirection:'column'}}>
      Menu
      <Link to="/user">User</Link>
      <Link to="/user2">User2</Link>
      <Link to="/user3">User3</Link>
      <Link to="/chat-zone">Chat-Zone</Link>
    </div>
  )
}
