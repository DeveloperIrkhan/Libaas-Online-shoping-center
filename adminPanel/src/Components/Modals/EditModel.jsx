import React, { useEffect, useState } from 'react'
import { useAdminContext } from '../../oontext/AdminContext';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import { API_URL } from '../../App';
import CustomButton from '../CustomButtons/CustomButton'
import "../../App.css"
import Cookies from 'js-cookie'

const EditModel = () => {
    const { isModalOpen, setIsModalOpen, categoryId } = useAdminContext();
    const [updateCategory, setUpdateCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const getCategoryById = async (categoryId) => {
        try {
            setIsLoading(true)
            if (categoryId) {
                const response = await axios.get(`${API_URL}/category/get-category/${categoryId}`)
                if (response.data.success) {
                    setUpdateCategory(response.data.category.category)
                }
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false)

        }
    }
    const updateCategoryAsync = async () => {
        try {
            setIsLoading(true)
            const token = Cookies.get('accessToken');
            if (updateCategory) {
                console.log(updateCategory)
                const response = await axios.post(`${API_URL}/category/update-category/${categoryId}`,
                    { updateCategory }, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                if (response.data.success) {
                    console.log(response.data)
                    setUpdateCategory(response.data.category.category)
                }
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false)

        }
    }
    useEffect(() => {
        // console.log("categoryId", categoryId)
        getCategoryById(categoryId)
    }, [categoryId]);
    return (
        <div>

            {
                isModalOpen &&
                <div
                    className={`w-screen shadow-xl h-screen fixed top-0 left-0 flex justify-center items-center z-50 duration-500 transition-opacity ease-in-out bg-darkColor/70 backdrop-blur-sm ${isModalOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsModalOpen(false)}>
                    {isLoading && <Spinner />}
                    <div
                        className="relative bg-white w-4/5 md:w-1/2 h-auto p-5 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-4 text-xl text-black"
                        >
                            &times;
                        </button>
                        <p className="text-center text-lg text-black mt-4">Update Category</p>
                        <input
                            className="bg-white appearance-none border-2 mt-3
                            border-gray-200 rounded w-full py-2 px-4 
                            text-gray-700 leading-tight tracking-tighter focus:outline-none
                            focus:bg-white focus:border-blackColor"
                            type="text"
                            name='updateCategory'
                            value={updateCategory}
                            onChange={(e) => setUpdateCategory(e.target.value)} />
                        <div className="mt-4">
                            <button onClick={() => updateCategoryAsync()} className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-black duration-500">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditModel

