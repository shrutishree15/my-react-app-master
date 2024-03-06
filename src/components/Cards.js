import React from 'react'
import { CiTrophy } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import CardSingle from './CardSingle';

const Cards = () => {
  return (
    <div>
    <CardSingle
      count={9.8}
      numberOfStars={5}
      imageIcon= {<CiTrophy/>}
      imageDesc = "Best Choice"
      heading1=" WixPro 72-Inch Responsive Website Builder- "
      description1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
      heading2="Main highlights"
      description2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      buttonText="View"
      number={1}
      label="Exceptional"
      
    />

    <CardSingle
      count={9.5}
      
      imageDesc="Best Value"
      imageIcon= {<CiTrophy/>}
      heading1="SiteCraft 68-Inch Ultimate Web Design Studio-"
      description1=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
      heading2="Main highlights"
      description2="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
      buttonText="View"
      number={2}
      label="Excellent"
      numberOfStars={4.5}
    />

    <CardSingle
      count={9.3}
     
      imageDesc=""
      imageIcon= {<CiTrophy/>}
      heading1="WixPro 72-Inch Responsive Website Builder-"
      description1=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
      heading2="Main highlights"
      description2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      buttonText="View"
      number={3}
      label="Exceptional"
      numberOfStars={4}
    />

    <CardSingle
      count={9.1}
      imageIcon= {<CiTrophy/>}
      imageDesc=""
      heading1="CDK Resposive Builder:"
      description1=" An extensive library of widgets and apps, and detailed step-by-step guides"
      heading2="Main highlights"
      description2="9.9 building responsive, 8.9 Cool, 8.9 Docs"
      buttonText="View"
      number={4}
      label="Very Good"
      numberOfStars={3}
    />
  </div>
  )
}

export default Cards
