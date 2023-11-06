'use client'
import './MainPage.scss'
import anketData from './shared/Utility'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const [activeQ, setActiveQ] = useState(1)
    const [selectedAnswers, setSelectedAnswers] = useState<{
        [key: number]: number | null
    }>({})

    const router = useRouter()
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswers((prevState) => ({
            ...prevState,
            [activeQ]: Number(e.target.value),
        }))
    }

    const handleBtnPrevClick = () => {
        setActiveQ(activeQ - 1)
    }
    const handleBtnNextClick = () => {
        if (activeQ !== 3) setActiveQ(activeQ + 1)
        else router.push('products')
    }
    return (
        <>
            <div className="main-container">
                <div className="main-header">
                    <div className="main-header-text1">
                        Онлайн-подбор средств для лица
                    </div>
                    <div className="main-header-text2">
                        Пройдите короткий тест и получите список наиболее
                        подходящих для вас косметических продуктов
                    </div>
                </div>

                <div className="main-body">
                    <div className="main-body-content">
                        <div className="main-dots-container">
                            <div
                                className={
                                    activeQ === 1
                                        ? 'main-dot active'
                                        : 'main-dot'
                                }
                            ></div>
                            <div
                                className={
                                    activeQ === 2
                                        ? 'main-dot active'
                                        : 'main-dot'
                                }
                            ></div>
                            <div
                                className={
                                    activeQ === 3
                                        ? 'main-dot active'
                                        : 'main-dot'
                                }
                            ></div>
                        </div>
                        {anketData.map((obj, index) => {
                            return (
                                <div
                                    key={obj.id}
                                    className={
                                        activeQ === index + 1
                                            ? 'main-qustion-container active'
                                            : 'main-qustion-container'
                                    }
                                >
                                    <div className="main-qustion-number">
                                        Вопрос {obj.id} из 3
                                    </div>
                                    <div className="main-question-text">
                                        {obj.question}
                                    </div>
                                    <div className="main-answers-container">
                                        {obj.answers.map((answer, index) => {
                                            return (
                                                <div
                                                    className="main-answer"
                                                    key={index + 1}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={answer.id.toString()}
                                                        value={index + 1}
                                                        checked={
                                                            selectedAnswers[
                                                                activeQ
                                                            ] ===
                                                            index + 1
                                                        }
                                                        onChange={
                                                            handleRadioChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={answer.id.toString()}
                                                    >
                                                        {answer.text}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                        <div className="main-btn-container">
                            {activeQ > 1 && (
                                <button
                                    className="main-btn prev"
                                    onClick={() => handleBtnPrevClick()}
                                >
                                    Назад
                                </button>
                            )}

                            <button
                                className="main-btn next"
                                onClick={() => handleBtnNextClick()}
                            >
                                {activeQ === 3 ? 'Узнать результат' : 'Дальше'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
