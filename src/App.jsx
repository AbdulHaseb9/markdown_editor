import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setmarkdown] = useState('')

  return (
    <main className='container'>
      <div className="left-side">
        <textarea onChange={(e) => { setmarkdown(e.target.value) }} />
      </div>
      <div className="right-side">
        <a href="https://www.markdownguide.org/cheat-sheet/" target='_blank' className='cheatsheet-link'> Click to See markdown Cheatsheet </a>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </main>
  )
}

export default App
