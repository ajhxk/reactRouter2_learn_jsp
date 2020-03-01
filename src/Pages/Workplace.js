import React from 'react';
import { Route, Link } from 'react-router-dom'
import Getup from './workplace/Getup'
import Money from './workplace/Money'

function Video () {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/getup/'>getup</Link></li>
                    <li><Link to='/workplace/money/'>money</Link></li>
                </ul>
            </div>

            <div className='videoContent'>
                <div>
                    <h3>职场软技能</h3>
                </div>
                <Route path='/workplace/getup/' component={Getup}></Route>
                <Route path='/workplace/money/' component={Money}></Route>
            </div>
        </div>
    )
}

export default Video;