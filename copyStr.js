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
  return (
    <Button onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
