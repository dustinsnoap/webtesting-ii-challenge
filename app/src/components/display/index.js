import React from 'react'

import Wrapper from './style'
import InningStats from './inning_stats'

const Display = ({stats}) =>
    <Wrapper className='display'>
        <InningStats stats={stats}/>
        <div className='scores'>
            <div className='team'>
                <span className='name'>{stats.team_names[0]}</span>
                <span className='score'>{stats.scores[0]}</span>
            </div>
            <div className='team'>
                <span className='name'>{stats.team_names[1]}</span>
                <span className='score'>{stats.scores[1]}</span>
            </div>
        </div>
    </Wrapper>

export default Display