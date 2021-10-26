

import {render, screen, fireEvent} from '@testing-library/react'
import TableForm from './TableForm'



test('modal shows the children and a close button', () => {
    // Arrange
    const handleClose = jest.fn()
  
    // Act
    render(
      <TableForm onClose={handleClose} />
    )


    // // Assert
    // expect(getByText('test')).toBeTruthy()
  
    // Act
    const closeButton = screen.getByRole('button', { name: /close-button/i })
    fireEvent.click(closeButton)
  
    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

