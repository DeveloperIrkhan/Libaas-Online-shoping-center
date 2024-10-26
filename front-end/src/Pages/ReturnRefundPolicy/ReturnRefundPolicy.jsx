import React, { useState } from 'react';
import PageTitle from '../../Components/Heading/PageTitle';

const ReturnRefundPolicy = () => {

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='fa-1x md:text-2xl  mt-10 font-Aclonica flex justify-start'>
                <PageTitle title1={"Return & Refund"} title2={"Policy"} />
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-center leading-loose">
                <div className="w-3/4  text-gray-600">
                    <p>At Libaas.pk, we value your satisfaction with every purchase. If for any reason you are not fully satisfied with your product, we offer easy return and refund options, subject to the following terms and conditions:</p>
                    <div className="my-4">
                        <p className='text-gray-700 font-bold '>1. Return Eligibility</p>
                        <p>You can request a return if:</p>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>The item was purchased within the last 7 days.</p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>The product is in its original condition (unused, undamaged, and in its original packaging).</p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>You have the receipt or proof of purchase.</p>
                        </div>

                        <p>Certain items may not be eligible for returns:</p>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'><b>Sale items:</b> Products purchased during a sale are not eligible for returns</p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'><b>Perishable goods:</b> Items like food, flowers, or other perishable products cannot be returned</p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'><b>Personalized items:</b> Items like food, flowers, or other perishable products cannot be returned</p>
                        </div>

                        <p className='text-gray-700 font-bold '>2. How to Initiate a Return</p>
                        <p>To initiate a return, please follow these steps:</p>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>Contact our Customer Support team at [insert email/contact info] with </p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>Once your return request is approved, we will provide you with a </p>
                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>Pack the item securely, including all original packaging, tags,.</p>
                        </div>
                        <p className='text-gray-700 font-bold '>3. Refunds</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, excepturi.</p>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>lorem ipsum, dolor sit amet consectetur  adipisicing elit. Quos, excepturi.</p>

                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>lorem ipsum, dolor sit amet consectetur  adipisicing elit. Quos, excepturi.</p>

                        </div>
                        <div className="flex ml-4 items-center gap-3">
                            <p className={"min-w-3 h-3 border rounded bg-gray-600"}></p>
                            <p className='my-1'>lorem ipsum, dolor sit amet consectetur  adipisicing elit. Quos, excepturi.</p>

                        </div>
                        <p className='text-gray-700 font-bold '>4. Exchanges</p>
                        <p className='m-3 mx6'>We only replace items if they are defective or damaged. If you need to exchange a product for the same item, please contact us at [insert contact information].</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReturnRefundPolicy;
