import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

const data = [
    {
        type: "input",
        inputType: "email",
        label: "give us your email little nigga",
        placeholder: "give email"
    },
    {
        type: "select",
        label: "select number",
        multiple: true,
        options: [1, 2, 3, 4],
        size: 3
    },
    {
        type: "textarea",
        label: "this is texterea ",
        placeholder: "write here ..."
    },
    {
        type: "checkbox",
        label: "fruits",
        list: [
            {
                label: "banana"
            },
            {
                label: "baa"
            },
            {
                label: "orange",
                checked: true
            },
            {
                label: "olive",
                disabled: true
            },
        ]
    }
]

class QuestionFormat extends Component {
    state={
        result:[],
    }
    render() {
        const handleModalChange=(index,value)=>{
            let tab=this.state.result
            tab[index]=value
            this.setState({result:tab})
        }
        const handleModalChangeCheckbox=(index,value)=>{
            let tab=this.state.result
            tab[index]=[...this.state.result[index]||[],value]
            this.setState({result:tab})
        }
        return (

            <Form>
                {data.map((element,index) => {
                    switch (element.type) {
                        case "input":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.inputType}
                                        name={element.name || ""}
                                        size={element.size || ""}
                                        readOnly={element.readOnly || false}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        pattern={element.pattern || ""}
                                        min={element.min || ""}
                                        max={element.max || ""}
                                        step={element.step || ""}
                                        placeholder={element.placeholder || ""}
                                        onChange={(e)=>{handleModalChange(index,e.target.value)}}
                                    />
                                </Form.Group>
                            )
                            break;
                        case "select":
                            return (
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name={element.name || ""}
                                        size={element.size || 5}
                                        onChange={(e)=>{handleModalChange(index,e.target.options[e.target.selectedIndex].value)}}
                                    >
                                        {element.options.map((el, i) => { return <option selected={i === element.selected}>{el}</option> })}
                                    </Form.Control>
                                </Form.Group>
                            )
                            break;
                        case "textarea":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name={element.name || ""}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        placeholder={element.placeholder || ""}
                                        onChange={(e)=>{handleModalChange(index,e.target.value)}}
                                        
                                    />
                                </Form.Group>
                            )
                            break;
                        case "checkbox":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label><br />
                                    {element.list.map(el => {
                                        return (
                                            <Form.Check
                                                onChange={(e)=>{if(e.target.checked){handleModalChangeCheckbox(index,el.label)}}}
                                                type="checkbox"
                                                inline
                                                disabled={el.disabled}
                                                checked={el.checked||false }
                                                label={el.label}
                                                onChange={(e)=>{e.target.checked=false}}
                                            />
                                        )
                                    })}
                                </Form.Group>
                            )
                    }
                })}
                <Button onClick={()=>{console.log(this.state.result.map((el,i)=>{return({label:data[i].label,el})}))}}></Button>
            </Form>


        )

    }
}
export default QuestionFormat