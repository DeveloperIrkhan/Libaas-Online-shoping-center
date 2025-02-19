import React, { useEffect, useState } from 'react'
import PageTitle from '../../Components/Heading/PageTitle'
import Spinner from '../../Components/Spinner/Spinner'
import axios from 'axios'
import { API_URL } from '../../App'
import { toast } from 'react-toastify'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Cookies from 'js-cookie'
import { useAdminContext } from '../../oontext/AdminContext'
import EditModel from '../../Components/Modals/EditModel'
import { addCategoryAsync, deleteCategoryAsync, getCagetories } from '../../utils/APIUtils'
const AddCategory = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const { isModalOpen, setIsModalOpen, categoryId, setCategoryId } = useAdminContext();

    const inputStyles = "bg-white border-2 mt-3 w-full border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor";
    const getCategories = async () => {
        const response = await getCagetories()
        if (response.success) {
            setCategories(response.categories)
        }
    }
    useEffect(() => {
        getCategories();
    }, [setCategories])
    const onSubmitHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        console.log("category from page", category)
        try {
            const response = await addCategoryAsync(category)
            console.log(response)
            const { message, success } = response
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
            setIsLoading(false)
            setCategory("")
            getCategories()
        }
    }

    const deleteCategory = async (id) => {
        setIsLoading(true)
        try {
            const response = await deleteCategoryAsync(id)
            const { message } = response
            toast.success(message ? message : "Category deleted successfully")
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
            getCategories()
        }

    }
    return (
        <>
            <EditModel />
            <form onSubmit={onSubmitHandler}>
                {isLoading && <Spinner />}
                <div>
                    <div className="py-3 w-full">
                        <div className="flex flex-col gap-4">
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
                            <div className="flex flex-col items-start py-3 p-0 md:p-4 w-full border shadow-sm rounded-md">
                                <div className="font-Aclonica text-sm p-4 capitalize">
                                    <PageTitle title1="Saved" title2={"Categories"} fontsize='text-sm' />
                                </div>
                                <table className="table-auto w-full">
                                    <thead className='uppercase space-y-2'>
                                        <tr>
                                            <th className="px-4 py-2 text-[10px] md:text-[15px]">Serial No</th>
                                            <th className="px-4 py-2 text-[10px] md:text-[15px]">Category Name</th>
                                            <th className="px-4 py-2 text-[10px] md:text-[15px]">Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-[10px] md:text-[15px]'>
                                        {categories && categories.map((category, index) => (
                                            <tr key={category._id} className="bg-gray-100">
                                                <td className="border px-4 py-2">{index + 1}</td>
                                                <td className="border px-4 py-2">{category.category}</td>
                                                <td className="border px-4 py-2">
                                                    <div className="flex justify-center items-center gap-4">
                                                        <span
                                                            onClick={() => {
                                                                setCategoryId(category._id);
                                                                setIsModalOpen(true);
                                                            }}
                                                            className='flex justify-center items-center text-white rounded-md w-6 h-6 bg-blue-400 duration-200 hover:bg-blue-600'>
                                                            <MdModeEdit />
                                                        </span>
                                                        <span onClick={() => deleteCategory(category._id)} className='flex justify-center items-center text-white rounded-md w-6 h-6 bg-red-400 duration-200 hover:bg-red-600'>
                                                            <RiDeleteBin5Fill />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default AddCategory