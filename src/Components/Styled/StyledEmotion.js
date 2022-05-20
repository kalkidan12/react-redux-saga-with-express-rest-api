import React from "react";
import styled from "@emotion/styled";

export const Button = styled.button`
	background-color: ${(props) => props.color};
	color: white;

	padding: 10px;
	border: none;
	cursor: pointer;
	margin-top: 10px;
	border-radius: 5px;
	font-weight: bold;
	font-size: 18;
`;
export const A = styled.a`
	text-decoration: none;
	color: white;
`;
export const TableLayout = styled.table`
	font-family: arial, sans-serif;
	width: 100%;
`;
export const TableHead = styled.thead`
	background-color: green;
	> th {
		padding: 10px;
	}
	color: white;
`;
export const TableRow = styled.tr`
	:nth-of-type(even) {
		background-color: #d6eeee;
	}
`;
export const TableData = styled.td`
	padding: 5px;
	color: black;
`;
