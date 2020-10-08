import React from 'react'

export default class Services extends React.Component {

    render() {
        return (
            <div className="mx-16 py-24 bg-transparnet z-10">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-10">
                        <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-24">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md text-red-3 text-3xl">
                                            <i className="fas fa-gavel"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl leading-6 font-medium text-gray-900">Small Claims Court</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-800">
                                            Money or personal property claims with value up to $35000
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md text-red-3 text-3xl">
                                            <i className="fas fa-house-user"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl leading-6 font-medium text-gray-900">Landlord and Tenant Board</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-800">
                                            Representing Landlords and Tenants
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md text-red-3 text-3xl">
                                            <i className="fas fa-file-contract"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl leading-6 font-medium text-gray-900">Administrative Tribunals</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-800">
                                            Human Rights Tribunal of Ontario, Social benefits Tribunal, workplace safety and insurance board.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <span className="flex items-center justify-center h-12 w-12 rounded-md text-red-3 text-3xl">
                                            <i className="fas fa-stamp fa-lg"></i>
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl leading-6 font-medium text-gray-900">Notary and Commissioner of Oath Services</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-800">
                                            Documents preparation, Affidavits, and Canadian Pardons
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}