import React from 'react';
import './HomeContainer.css';

function HomeContainer () {
    return(
        <div className='back-color'>
            <div className='heading-container'>
                <h3>Easy steps to grow and engage</h3>
            </div>
            <div className='border-groups'>
                <div className='border-container'>
                    <div  className='inner-container'>
                        <div>
                            <p>Step 1</p>
                            <p>Choose quiz and start to develop</p>
                            <span>
                            Choose a quiz to suit any taste, from general knowledge to sports, 
                            from history to science! Enjoy engaging questions, test your knowledge,
                            and learn something new every day. Don't miss the chance to try our diverse
                            categories and become a true champion in quizzes!    
                            </span>
                        </div>
                         <div className='border-image'>
                            <img src="Choosing.jpg" alt="Choosing pic" />
                        </div>
                    </div>
                </div>
                <div className='border-container'>
                    <div  className='inner-container'>
                        <div>
                            <p>Step 2</p>
                            <p>A wide range of topics is available for discussion</p>
                            <span>
                            We strive to offer a diverse range of quizzes, ensuring that every user 
                            can find something tailored to their preferences and interests.    
                            </span>
                        </div>
                        <div className='border-image'>
                           <img src="Decide.jpg" alt="Decide" /> 
                        </div>
                    </div>
                </div>
                <div className='border-container'>
                    <div  className='inner-container'>
                        <div>
                            <p>Step 3</p>
                            <p>Create a positive learning environment</p>
                            <span>
                            We're committed to fostering an atmosphere where learning is enjoyable and inspiring.
                            By crafting quizzes with captivating questions and intriguing facts, 
                            we aim to make the learning experience truly immersive and enjoyable for everyone.    
                            </span>
                        </div>
                        <div className='border-image'>
                            <img src="funfacts.jpg" alt="facts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;