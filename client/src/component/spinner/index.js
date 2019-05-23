import React from 'react';

import { Spin, Skeleton } from 'antd';
import './spinner.css';


const Spinner =()=>(

  <div
  style={{
    width: '100%',
    height: '100%',
    margin: 'auto',
    paddingTop: 300,
    textAlign: 'center',
  }}
>
  <Spin size="large" />
</div>
  
)

export default Spinner;
