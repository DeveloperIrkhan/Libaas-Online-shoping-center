import React from 'react'
import CustomBtn from '../Components/CustomBtn'
import PageTitle from '../Components/Heading/PageTitle'

const Auth = () => {

    return (
        <div className="h-full w-full px-3 md:px-6 mt-4">
            <div className="text-[3.5vmin] font-Aclonica font-bold flex justify-center">
                <PageTitle title1={"Sign"} title2={"Up"} />
            </div>
            <div className="flex justify-center my-4 md:my-10">
                <form className="w-full max-w-md">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                            <input
                                className="bg-white appearance-none border-2
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-tighter focus:outline-none
                                focus:bg-white focus:border-blackColor"
                                type="text"
                                placeholder='example@example.com' />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                            <input
                                className="bg-white appearance-none border-2
                            border-gray-200 rounded w-full py-2 px-4 
                            text-gray-700 leading-tight tracking-tighter focus:outline-none
                            focus:bg-white focus:border-blackColor"
                                type="text"
                                placeholder='password please..'
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-end">
                        <div className="w-full flex justify-end items-end">
                            <CustomBtn className={"btn-dark"} onClickFun={() => console.log("")} text={"Sign up"} />
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Auth