'use client'
import React, { useState } from 'react'
import data from './products.json'
import './Products.scss'
import HeartButton from '../shared/HeartButton'
import Pagination from '../shared/Pagination'
export default function page() {
    const [currentPage, setCurrentPage] = useState<number | string>(1)
    const totalPages = 13

    const handlePageChange = (page: number | string) => {
        setCurrentPage(page)
    }
    return (
        <div className="products-container">
            <div className="products-wrapper">
                <div className="products-header">
                    <div className="products-header1">Результат</div>
                    <div className="products-header2">
                        Мы подобрали для вас наиболее подходящие средства
                    </div>
                </div>
                <div className="products-body">
                    {data.map((el, index) => {
                        return (
                            <div className="product-wrapper" key={el.id}>
                                <img className="product-image" src={el.image} />
                                <HeartButton />
                                <div className="product-name">{el.title}</div>
                                <div className="product-prices-wrapper">
                                    {el.oldPrice && (
                                        <div className="product-old-price">
                                            {el.oldPrice}
                                        </div>
                                    )}
                                    <div className="product-price">
                                        {el.price}
                                    </div>
                                    <div className="product-price curr">
                                        руб.
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination
                    currentPage={Number(currentPage)}
                    onPageChange={handlePageChange}
                    totalPages={totalPages}
                />
            </div>
        </div>
    )
}
