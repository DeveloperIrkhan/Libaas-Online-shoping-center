import React, { useEffect } from 'react'
import PageTitle from './../../../Components/Heading/PageTitle'
import Spinner from '../../../Components/Cards/Spinner/Spinner'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../App'
import { toast } from 'react-toastify'

const AddSubCategory = () => {
    const inputStyles = "bg-white border-2 mt-3 w-full border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor";

    const [isLoading, setIsLoading] = useState(false)
    const [subCategory, setSubCategory] = useState("")
    const [subcategories, setSubCategories] = useState([])
    const getSubCategories = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${API_URL}/subcategory/get-all-subcategory`)
            if (response.data.success) {
                const { message, subcategories } = response.data
                setSubCategories(subcategories)
            }
        } catch (error) {

        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getSubCategories();
    }, [setSubCategory])
    const onSubmitHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/subcategory/create-subcategory`, { subCategory })
            console.log(response)
            const { message, success } = response.data
            if (success) {
                toast.success(message)
            }
            else {
                toast.error(message)
            }
        } catch (error) {
            toast.error("error while creating sub category")

        }
        finally {
            getSubCategories()
            setIsLoading(false)
            setSubCategory("")
        }
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {isLoading && <Spinner />}
                <div>
                    <div className="py-3 w-full">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col items-start p-4 w-full md:w-1/2 border shadow-sm rounded-md">
                                <div className="font-Aclonica fa-1x md:text-md my-4 capitalize">
                                    <PageTitle title1="Add Sub" title2={"subcategory"} fontsize='text-sm' />
                                </div>
                                <input
                                    value={subCategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                    className={inputStyles}
                                    type="text"
                                    required
                                    placeholder="enter sub category"
                                />
                                <button
                                    type="submit"
                                    className="m-3 px-4 py-2 bg-slate-800 duration-150 hover:bg-slate-700 text-white rounded-md"
                                >
                                    Add Item
                                </button>
                            </div>
                            <div className="flex flex-col items-start p-4 w-full md:w-1/2 border shadow-sm rounded-md">
                                <div className="font-Aclonica text-sm my-4 capitalize">
                                    <PageTitle title1="Saved" title2={"sub Category"} fontsize='text-sm' />
                                </div>
                                <ul className="uppercase space-y-2">
                                    {subcategories && subcategories.map((subcategory) => (
                                        <li key={subcategory._id} className="animated-bullet">{subcategory.subCategory}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddSubCategory