import React from 'react';

const Contact = () => {
  return (
    <>
      <section id='Contact' className="  flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aboutSection ">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 font-sans text-white">
              Contact me
            </h2>
            <p className='text-base md:text-lg font-normal font-serif text-gray-400 text-center pt-3 mb-10'>
              Cultivating Connections: Reach Out and Connect with Me.
            </p>

            <div className="Details  p-8 rounded-lg shadow-lg">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="mt-1 block w-full border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="mt-1 block w-full  border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 sr-only">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="mt-1 block w-full  border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 sr-only">Service Of Interest</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
                      >
                        <option value="">Service Of Interest</option>
                        <option value="web-development">Web Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 sr-only">Timeline</label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      placeholder="Timeline"
                      className="mt-1 block w-full  border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="project-details" className="block text-sm font-medium text-gray-300 sr-only">Project Details...</label>
                    <textarea
                      id="project-details"
                      name="project-details"
                      rows="4"
                      placeholder="Project Details..."
                      className="mt-1 block w-full  border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;