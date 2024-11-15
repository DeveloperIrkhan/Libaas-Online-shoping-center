import React, { useEffect, useState } from 'react'
import PageTitle from './../../../Components/Heading/PageTitle'
import Spinner from '../../../Components/Cards/Spinner/Spinner'
import axios from 'axios'
import { API_URL } from '../../../App'
import { toast } from 'react-toastify'

const AddCategory = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])

    const inputStyles = "bg-white border-2 mt-3 w-full border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor";
    const getCategories = async () => {
        const response = await axios.get(`${API_URL}/category/get-categorys`)
        if (response.data.success) {
            setCategories(response.data.categories)
        }
    }
    useEffect(() => {
        getCategories();
    }, [setCategories])
    const onSubmitHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/category/create-category`, { category })
            const { message, success } = response.data
            if (success) {
                toast.success(message)
            }
            else {
                toast.error(message)
            }
        } catch (error) {
            toast.error("error while creating category")

        }
        finally {
            getCategories()
            setIsLoading(false)
            setCategory("")
        }
    }
    return (
        <form onSubmit={onSubmitHandler}>
            {isLoading && <Spinner />}
            <div>
                <div className="py-3 w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col items-start p-4 w-full md:w-1/2 border shadow-sm rounded-md">
                            <div className="font-Aclonica fa-1x md:text-md my-4 capitalize">
                                <PageTitle title1="Add" title2={"Category"} fontsize='text-sm' />
                            </div>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className={inputStyles}
                                type="text"
                                required
                                placeholder="Item Category"
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
                                <PageTitle title1="Saved" title2={"Categories"} fontsize='text-sm' />
                            </div>
                            <ul className="uppercase space-y-2">
                                {categories && categories.map((category) => (
                                    <li key={category._id} className="animated-bullet">{category.category}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default AddCategory