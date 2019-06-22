import React from 'react'

import Wrapper from './style'

const Dashboard = props =>
    <Wrapper className='dashboard'>
        <div className='actions'>
            <button className='action' onClick={props.strike} >Strike</button>
            <button className='action' onClick={props.ball}>Ball</button>
            <button className='action'>Foul</button>
            <button className='action' onClick={props.hit}>Hit</button>
        </div>
    </Wrapper>

export default Dashboard