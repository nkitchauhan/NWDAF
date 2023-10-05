import React from 'react'
import './form.css';
import bg from '../../Assets/ai-generated-7999611_1280.png'
const Form = () => {
    return (
        <>
            <div className='form-container'>
                <div className='section-form'>
                    <div className='form-image'>
                        <img src={bg} alt='' />
                    </div>

                    <div className='section-name'>
                        <form className='form-effect'>
                            <label htmlFor=""><h1>NWDAF</h1> </label><br />
                            <div className="profile-input">
                                <label htmlFor="">Email</label><br />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="profile-input">
                                <label htmlFor="">Password</label><br />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="signUp">
                                <button type='Submit'>SignUp</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Form
