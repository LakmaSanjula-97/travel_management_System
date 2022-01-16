import React, {Component} from 'react'
import {render, container} from '@testing-library/react'
import Component1 from '../Manage_Timetable/ViewTimetable'


describe("mock component test", () =>{

    test("mock component in react", () =>{
        const {container} = render(<Component1 />)
        console.log(container.outerHTML)
    })

    
})