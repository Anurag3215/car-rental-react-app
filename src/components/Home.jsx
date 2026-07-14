import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="container mt-4">

                {/* Hero Section */}
                <div className="bg-primary text-white p-5 rounded text-center">
                    <h1>Self-Drive Car Rental</h1>
                    <p className="lead">
                        Manage your rental fleet with ease.
                    </p>
                </div>

                {/* Features */}
                <div className="row mt-5">
                    <div className="col col-12 col-sm-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h4>🚗 Fleet Management</h4>
                                <p>Add and manage rental vehicles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h4>📍 City Wise</h4>
                                <p>Track vehicles across different cities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h4>💰 Rental Pricing</h4>
                                <p>Maintain daily rental charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
        </div>
    )
}

export default Home