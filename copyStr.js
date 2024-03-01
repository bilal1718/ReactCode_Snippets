import {useState} from "react"
import styled from "styled-components";

const CopyToClipboard = ({ str = 'bilal' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(str)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

