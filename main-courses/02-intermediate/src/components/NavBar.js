import React, { useState } from 'react'
import { Link } from '@reach/router'
import { css, keyframes } from '@emotion/core'

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const NavBar = () => {
    const [emojiSize, setEmojiSize] = useState(60)
    const [speed, setSpeed] = useState(1)
    const [backgroundColor, setBackgroundColor] = useState()

    return (
        <header>
            <Link
                to="/"
                css={css`
                    margin-bottom: 1.2rem;
                `}
            >Adopt Me!</Link>
            <span
                role="img"
                aria-label="logo"
                onClick={() => {
                    setEmojiSize(emojiSize + 15)
                    setSpeed(speed * 0.9)
                }}
                css={css`
                    font-size: ${emojiSize}px;

                    &:hover {
                        animation: ${speed}s ${spin} linear infinite;
                    }
                `}>🐱</span>
        </header>
    )
}

export default NavBar