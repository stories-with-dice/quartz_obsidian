import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children }: QuartzComponentProps) {
  return <header><img src="https://i.imgur.com/Wi8Ku44.png"></img></header>;
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
