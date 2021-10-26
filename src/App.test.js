import  'jest-dom/extend-expect'
import App from '../src/App'
import { render, screen, fireEvent, within } from './testUtils';
import userEvent from '@testing-library/user-event'



test("the form open when the Button is clicked", () => {

    
    })


    
test("can open the detail modal", () => {

        render(<App/>)
    
        //click on add Button
        userEvent.click(screen.getByRole('button', {name: /+/i}))

        // close Table Form successfully

        
    
            })