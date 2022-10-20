const ScratchComponent = () => {
    return (
        <div className='space-y-5'>
            <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                <div className='shrink-0'>
                    <img className='h-20 w-20' src="" alt='ChitChat Logo' />
                </div>
                <div>
                    <div className='text-xl font-medium text-black'>ChitChat</div>
                    <p className='text-slate-500'>You have a new message!</p>
                </div>
            </div>

            <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm: sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                <img
                    className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
                    src='/erin-lindford.jpg'
                    alt="Woman's Face"
                />
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5'>
                        <p className='text-lg text-black font-semibold'>Erin Lindford</p>
                        <p className='text-slate-500 font-medium'>Product Engineer</p>
                    </div>
                    <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:-outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                        Message
                    </button>
                </div>
            </div>

            {/* responsive design */ }

            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
                <div className='md:flex'>
                    <div className='md:shrink-0'>
                        <img
                            className='h-48 w-full object-cover md:h-full md:w-48'
                            src='/building.avif'
                            alt='Modern building architecture'
                        />
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                            Company retreats
                        </div>
                        <a
                            href='#'
                            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                            Incredible accomodation for your team
                        </a>
                        <p className='mt-2 text-slate-500'>
                            Looking to take your team away on a retreat to enjoy awesome food
                            and take in some sunshine? We have a list of places to do just
                            that.
                        </p>
                    </div>
                </div>
            </div>
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                            <p className="text-lg leading-relaxed m-4 text-gray-600">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record maximum.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="./assets/img/team-1-800x800.jpg"
                                    className="shadow-lg rounded-full max-w-full mx-auto"

                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Web Developer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-twitter"></i></button
                                        ><button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"></i></button
                                        ><button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-dribbble"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="./assets/img/team-2-800x800.jpg"
                                    className="shadow-lg rounded-full max-w-full mx-auto"

                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Marketing Specialist
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-google"></i></button
                                        ><button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="./assets/img/team-3-800x800.jpg"
                                    className="shadow-lg rounded-full max-w-full mx-auto"

                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        UI/UX Designer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-google"></i></button
                                        ><button
                                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-twitter"></i></button
                                        ><button
                                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="./assets/img/team-4-470x470.png"
                                    className="shadow-lg rounded-full max-w-full mx-auto"

                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Founder and CEO
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-dribbble"></i></button
                                        ><button
                                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-google"></i></button
                                        ><button
                                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-twitter"></i></button
                                        ><button
                                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScratchComponent;