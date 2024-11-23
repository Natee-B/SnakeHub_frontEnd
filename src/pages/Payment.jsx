import React from 'react'
import Payment1 from '../components/user/Payment1'
import { useLocation } from 'react-router-dom';

export default function Payment() {
  const location = useLocation();
  const { el,token } = location.state || {};
  // console.log('el Payment Page', el)
  return (
    <div>
        <Payment1 SnakeDataProp={el} token={token} />
    </div>
  )
}
