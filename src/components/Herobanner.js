import { HERO_IMAGE } from "../utils.js/image-cdn";

const Herobanner = () => {
    return (
        <section className="hero-banner bg-slate-100">
            <div className="container">
                <div className="grid grid-flow-col auto-cols-fr hero-content-wrapper">
                    <div className="hero-banner-text">
                        <h1 className="text-gray-700 text-8xl font-semibold mb-10">Delicious and Delight</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ut ante eget ligula tempus tincidunt.
                            Mauris consectetur, nunc non blandit condimentum, arcu est aliquet leo,
                            id lacinia felis libero ac eros.</p>

                        <a href="#" className="inline-block min-w-44 text-center bg-green-500 p-5 text-white rounded-full font-semibold ml-0 m-3">Order Now</a>
                        <a href="#" className="inline-block min-w-44 text-center bg-blue-500 p-5 text-white rounded-full font-semibold ml-0 m-3">Check Restraunts</a>
                    </div>
                    <div className="hero-banner-image">
                        <img src= {HERO_IMAGE} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herobanner; 