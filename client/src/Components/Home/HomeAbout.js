import React from 'react'

function HomeAbout() {
  return (
    <div id="HomeAbout">
        <div className='About-Gallery'>
            <img src="./Images/k8-sWEpcc0Rm0U-unsplash.jpg" alt="" />
            <img src="./Images/adrien-olichon-ZgREXhl8ER0-unsplash.jpg" alt="" />
            <img src="./Images/jenn-kosar-jrWoDRmhwRY-unsplash.jpg" alt="" />
        </div>
        <div className='About-Body'>
            <h1>We do not cook,we create your emotions!</h1>
            <div className='desc'>
                <div className='div'>
                    <h1>01</h1>
                    <div className='desc-text'>
                        <h2>Menu for every taste</h2>
                        <p>Awesome recipes by the most talented chefs.</p>
                    </div>
                </div>
                <div className='div'>
                    <h1>02</h1>
                    <div className='desc-text'>
                        <h2>Always fresh ingredients</h2>
                        <p>restore the taste of the ingredients, and explore all kinds of delicious possibilities.</p>
                    </div>
                </div>
                <div className='div'>
                    <h1>03</h1>
                    <div className='desc-text'>
                        <h2>Experienced chefs</h2>
                        <p>They are ready to treat you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout