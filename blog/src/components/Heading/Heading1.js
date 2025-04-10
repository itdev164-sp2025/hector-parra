import React from "react";
import { BaseHeading } from "./Baseheading";

const Heading1 = props  => 
    <BaseHeading as="h1" fontSize={[3, 4, 5]} {...props}/>

export {Heading1 as H1}