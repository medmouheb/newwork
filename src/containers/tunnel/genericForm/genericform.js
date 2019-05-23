import React, {Component} from 'react';

import {Form} from 'react-bootstrap';

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
        type: "textarea",
        name:"textarea2 xx",
        label: "this is texterea ",
        placeholder: "write here ...",
        maxlength:5,
        required:true,
    },


]

class QuestionFormat extends Component {

    render() {
        return (
            <Form>
                {data.map(element => {
                    switch (element.type) {
                        case "input":
                            return (
                                <Form.Group>
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.inputType}
                                        name={element.name || ""}
                                        size={element.size || ""}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        pattern={element.pattern || ""}
                                        min={element.min || ""}
                                        max={element.max || ""}
                                        step={element.step || ""}
                                        placeholder={element.placeholder || ""}
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
                                        multiple={element.multiple || ""}
                                        name={element.name || ""}
                                        size={element.size || 5}
                                    >
                                        {element.options.map((el, i) => {
                                            return <option selected={i === element.selected}>{el}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            )
                            break;
                        case "textarea":
                            return (
                                <Form.Group>
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name={element.name || ""}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        placeholder={element.placeholder || ""}
                                    />
                                </Form.Group>
                            )
                            break;
                    }
                })}
                <input type="submit"/>
            </Form>
        )
    }
}

export default QuestionFormat