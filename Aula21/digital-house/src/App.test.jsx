import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { describe, expect } from "vitest"

import { FifteenthClass } from "./lessons/FifteenthClass"

describe('FifteenthClass component', () => {

    it('It should be rendered at screen', () => {
        const { getByText } = render(<FifteenthClass />)
        expect(getByText('Register addresses')).toBeInTheDocument()
    })

    it('Register flux', () => {

        const { getByLabelText, getByText } = render(<FifteenthClass />)
        const input = getByLabelText('cep')
        const submitButton = getByLabelText('submit-button')

        fireEvent.change(input, { target: { value: '01315000' } })
        fireEvent.click(submitButton)

        setTimeout(() => {
            expect(getByText('CEP: 01315-000')).toBeInTheDocument()
        }, 2000)

    })

})