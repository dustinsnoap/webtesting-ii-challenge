import React from 'react'

const InningStats = ({stats}) =>
    <div className='inning'>
        <div className='stat'>
            <span className='title'>Inning</span>
            <span className='value'>{stats.inning}</span>
        </div>
        <div className='stat'>
            <span className='title'>Team Up</span>
            <span className='value'>{stats.team_names[stats.current_team]}</span>
        </div>
        <div className='stat'>
            <span className='title'>Runs</span>
            <span className='value'>{stats.runs}</span>
        </div>
        <div className='stat'>
            <span className='title'>Outs</span>
            <span className='value'>{stats.outs}</span>
        </div>
        <div className='stat'>
            <span className='title'>Strikes</span>
            <span className='value'>{stats.strikes}</span>
        </div>
        <div className='stat'>
            <span className='title'>Balls</span>
            <span className='value'>{stats.balls}</span>
        </div>
        <div className='stat'>
            <span className='title'>Hits</span>
            <span className='value'>{stats.hits}</span>
        </div>
        <div className='stat'>
            <span className='title'>Doubles</span>
            <span className='value'>{stats.doubles}</span>
        </div>
        <div className='stat'>
            <span className='title'>Triples</span>
            <span className='value'>{stats.triples}</span>
        </div>
        <div className='stat'>
            <span className='title'>Homeruns</span>
            <span className='value'>{stats.homeruns}</span>
        </div>
    </div>

export default InningStats