import React from 'react'
import {SectionPhonebook} from './Section.styled';

export default function Section({children}) {
    return (
      <SectionPhonebook className="sectionPhonebook">{children}</SectionPhonebook>
    )
  }