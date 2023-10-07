import React, { useState } from 'react'
import './header.css'
import { BiUserCircle } from 'react-icons/bi'
import Toggle from '../Toggle/Toggle'
import ChangePassword from '../../components/changePassword/ChangePassword'

const Header = () => {
    const [index, setIndex] = useState(false)


    return (
        <div>
            <div className='header-section'>
                <div className='header-container'>
                    <div className='container-head'>
                        <h3>5G NWDAF | NWDAF-C</h3>
                    </div>
                    <div className='admin-section'>
                        <div className='container-head-3'>
                            <h3>Runtime environment</h3>
                            <h3 className='icon'><Toggle/></h3>
                        </div>



                        <div className='ul-login'>
                            <p className='icon' onClick={() => setIndex(true)} > <BiUserCircle /> </p>
                            <p onClick={() => setIndex(true)} > Admin </p>

                        </div>

                    </div>

                </div>
            </div>
            {
                index && (<div className='login-form' > <ChangePassword setIndex={setIndex} index={index} /> </div>)
            }
        </div >


    )
}

export default Header
