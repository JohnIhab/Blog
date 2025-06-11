import React from 'react'

export default function RecentPosts() {
    return (
        <div className='mt-10 px-40 py-16'>
            <p className='font-semibold text-xl mb-5'>Recents posts</p>
            <div className="recents grid grid-cols-3 gap-4">
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button style={{ backgroundColor: '#7F56D9' }} className="btn text-white mt-5">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button style={{ backgroundColor: '#7F56D9' }} className="btn text-white mt-5">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button style={{ backgroundColor: '#7F56D9' }} className="btn text-white mt-5">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
