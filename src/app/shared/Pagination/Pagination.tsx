'use client'
import React from 'react'
import './Pagination.scss'
const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number
    totalPages: number
    onPageChange: (page: number | string) => void
}) => {
    const generatePages = () => {
        const pages = []
        const maxVisiblePages = 5 // Максимальное количество видимых страниц

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
                for (let i = 1; i <= maxVisiblePages; i++) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            } else if (
                currentPage >=
                totalPages - Math.floor(maxVisiblePages / 2)
            ) {
                pages.push(1)
                pages.push('...')
                for (
                    let i = totalPages - maxVisiblePages + 3;
                    i <= totalPages;
                    i++
                ) {
                    pages.push(i)
                }
            } else {
                pages.push(1)
                pages.push('...')
                for (
                    let i = currentPage - Math.floor(maxVisiblePages / 2);
                    i <= currentPage + Math.floor(maxVisiblePages / 2);
                    i++
                ) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            }
        }

        return pages
    }

    return (
        <div className="pagination">
            {generatePages().map((page, index) => (
                <span
                    key={index}
                    className={page === currentPage ? 'active' : ''}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </span>
            ))}
        </div>
    )
}

export default Pagination
