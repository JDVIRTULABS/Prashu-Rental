"use client"
import { useState } from "react"
import Image from "next/image"
import { FaCalendarAlt, FaTools, FaHeadset, FaTruck, FaUserShield, FaShieldAlt, FaTimes, FaBars } from "react-icons/fa"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="bg-[#f5f5f5]">
      {/* NAV */}
      <nav className="bg-[#171717] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Parushu Rental</h1>
          {/* Hamburger Icon for small screens */}
          <div className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul className={`flex space-x-6 sm:hidden ${menuOpen ? "block" : "hidden"}`}>
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#equipment" className="hover:text-blue-400">
                Equipment
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#rental-process" className="hover:text-blue-400">
                Rental Process
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#equipment" className="hover:text-blue-400">
                Equipment
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#rental-process" className="hover:text-blue-400">
                Rental Process
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#1c1c1c] text-white text-center py-16">
        <h1 className="text-4xl font-bold">Professional Construction Equipment Rentals</h1>
        <p className="mt-4 text-xl">
          Access top-quality construction equipment including JCB, Excavators, and Drilling Machines for your projects
          at competitive rates.
        </p>

        <div className="mt-8 flex justify-center space-x-12">
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Equipment Units</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p>Support</p>
          </div>
        </div>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          <a href="#equipment">View Equipment</a>
        </button>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-16 text-center bg-[#fff]">
        <h2 className="text-3xl font-bold text-[#171717]">Featured Equipment</h2>
        <p className="mt-4 text-xl text-[#171717]">Browse our premium selection of construction equipment</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <Image
              src="/images/JCB.JPG"
              alt="JCB"
              width={400}
              height={250}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#171717] mt-4">JCB</h3>
            <p className="text-[#171717]">Multi-purpose backhoe loader for diverse construction needs.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <Image
              src="/images/Excavator.jpg"
              alt="Excavator"
              width={400}
              height={250}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#171717] mt-4">Excavator</h3>
            <p className="text-[#171717]">Heavy-duty excavator for efficient earthmoving operations.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <Image
              src="/images/rockdrill.jpg"
              alt="Rock Drilling Machine"
              width={400}
              height={250}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#171717] mt-4">Rock Drilling Machine</h3>
            <p className="text-[#171717]">Professional equipment for rock drilling and mining operations.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <Image
              src="/images/drill.jpeg"
              alt="Drilling Machine"
              width={400}
              height={250}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#171717] mt-4">Drilling Machine</h3>
            <p className="text-[#171717]">Versatile drilling equipment for construction projects.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 lg:px-16 text-center bg-[#f5f5f5]">
        <h2 className="text-3xl font-bold text-[#171717]">Our Services</h2>
        <p className="mt-4 text-xl text-[#171717]">
          Comprehensive equipment rental solutions for your construction needs
        </p>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaCalendarAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">Flexible Rental Terms</h3>
            <p className="text-[#171717]">
              Choose from daily, weekly, or monthly rental options to match your project timeline and budget.
            </p>
          </div>
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaTools className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">Equipment Maintenance</h3>
            <p className="text-[#171717]">
              Regular maintenance and servicing included to ensure optimal equipment performance.
            </p>
          </div>
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaHeadset className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">24/7 Technical Support</h3>
            <p className="text-[#171717]">Round-the-clock assistance for any technical issues or emergencies.</p>
          </div>
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaTruck className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">Delivery & Pickup</h3>
            <p className="text-[#171717]">
              Convenient delivery and pickup services to and from your construction site.
            </p>
          </div>
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaUserShield className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">Operator Training</h3>
            <p className="text-[#171717]">Optional operator training and safety briefings for equipment operation.</p>
          </div>
          <div className="bg-[#fff] shadow-lg rounded-lg p-6">
            <FaShieldAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#171717]">Insurance Coverage</h3>
            <p className="text-[#171717]">Comprehensive insurance coverage for peace of mind during rental period.</p>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section id="equipment-catalog" className="py-16 text-center bg-[#fff]">
        <h2 className="text-3xl font-bold text-[#171717]">Equipment Catalog</h2>
        <p className="mt-4 text-xl text-[#171717]">Explore our complete range of construction equipment</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {/* JCB 3DX Equipment */}
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <div className="h-40 bg-gray-300 flex justify-center items-center rounded-lg mb-4">
              <Image
                src="/images/JCB.jpg"
                alt="JCB 3DX"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#171717]">JCB 3DX</h3>
            <p className="text-[#171717]">Operating Weight: 8000 kg, Engine Power: 76 HP</p>
            <p className="text-xl font-semibold text-[#171717] mt-2">₹2000/day</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>

          {/* CAT Excavator Equipment */}
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <div className="h-40 bg-gray-300 flex justify-center items-center rounded-lg mb-4">
              <Image
                src="/images/Excavator.jpg"
                alt="Excavator"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#171717]">CAT Excavator</h3>
            <p className="text-[#171717]">Operating Weight: 20000 kg, Bucket Capacity: 1.2m³</p>
            <p className="text-xl font-semibold text-[#171717] mt-2">₹3500/day</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>

          {/* Rock Drilling Machine */}
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <div className="h-40 bg-gray-300 flex justify-center items-center rounded-lg mb-4">
              <Image
                src="/images/rockdrill.jpg"
                alt="Rock Drilling Machine"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#171717]">Rock Drilling Machine</h3>
            <p className="text-[#171717]">Drilling Depth: 100m, Power: 75 kW</p>
            <p className="text-xl font-semibold text-[#171717] mt-2">₹2750/day</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>

          {/* Hydraulic Drilling Machine */}
          <div className="bg-[#f5f5f5] shadow-lg rounded-lg p-6">
            <div className="h-40 bg-gray-300 flex justify-center items-center rounded-lg mb-4">
              <Image
                src="/images/drill.jpeg"
                alt="Hydraulic Drilling Machine"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#171717]">Hydraulic Drilling Machine</h3>
            <p className="text-[#171717]">Max Drilling Diameter: 600mm</p>
            <p className="text-xl font-semibold text-[#171717] mt-2">₹2250/day</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Rent Now</button>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section id="rental-process" className="py-16 text-center bg-[#1c1c1c] text-white">
        <h2 className="text-3xl font-bold">Simple Rental Process</h2>
        <p className="mt-4 text-xl">Get your equipment in 4 easy steps</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Step 1: Select Equipment */}
          <div className="bg-[#171717] shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-400">1</h3>
            <h4 className="text-xl font-semibold mt-2">Select Equipment</h4>
            <p className="mt-2">Choose from our wide range of construction equipment.</p>
          </div>

          {/* Step 2: Get Quote */}
          <div className="bg-[#171717] shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-400">2</h3>
            <h4 className="text-xl font-semibold mt-2">Get Quote</h4>
            <p className="mt-2">Receive instant pricing and availability information.</p>
          </div>

          {/* Step 3: Confirm Booking */}
          <div className="bg-[#171717] shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-400">3</h3>
            <h4 className="text-xl font-semibold mt-2">Confirm Booking</h4>
            <p className="mt-2">Complete documentation and make payment.</p>
          </div>

          {/* Step 4: Receive Equipment */}
          <div className="bg-[#171717] shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-400">4</h3>
            <h4 className="text-xl font-semibold mt-2">Receive Equipment</h4>
            <p className="mt-2">Get delivery and start using your equipment.</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xl">Need help with the rental process?</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Our Team
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#171717]">About Our Company</h2>
          <p className="mt-4 text-xl text-[#171717]">
            With over 15 years of experience in construction equipment rentals, we've built our reputation on
            reliability, quality, and customer satisfaction. Our mission is to provide top-tier construction equipment
            solutions that help our clients complete their projects efficiently and safely.
          </p>

          <div className="mt-8">
            <ul className="list-disc text-left text-xl mx-auto text-[#171717] space-y-4 max-w-2xl">
              <li>Modern and well-maintained equipment fleet</li>
              <li>Expert technical support and maintenance team</li>
              <li>Competitive pricing and flexible rental terms</li>
            </ul>
          </div>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Parushu Rental</h3>
              <p className="mt-2">
                Your trusted partner in construction equipment rentals. Quality machinery for successful projects.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#home" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#equipment" className="hover:text-blue-400">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Equipment</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#jcb" className="hover:text-blue-400">
                    JCB
                  </a>
                </li>
                <li>
                  <a href="#excavator" className="hover:text-blue-400">
                    Excavator
                  </a>
                </li>
                <li>
                  <a href="#rock-drill" className="hover:text-blue-400">
                    Rock Drilling Machine
                  </a>
                </li>
                <li>
                  <a href="#drilling-machines" className="hover:text-blue-400">
                    Drilling Machines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Contact Info</h4>
              <p className="mt-2">Hyderabad</p>
              <p className="mt-2">+91 987654321</p>
              <p className="mt-2">info@example.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Parushu Rental. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="#privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-blue-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

