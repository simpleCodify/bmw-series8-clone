import React, { Component } from "react";
import { Button } from "react-bootstrap";

const ColorButton = props => {
	return (
		<div className="mx-2">
			<Button onClick={props.buttonSelected} value={props.value} name={props.name} key={props.key} className="color-picker"></Button>
		</div>
	);
};

export default ColorButton;
