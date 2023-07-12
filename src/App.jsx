// import './App.css'
// import Button from './components/Button'
import TestArea from './TestArea';
import { Button } from 'components-lib';

export default function App() {
  return (
    <main>
      hello
      <section>
        <Button className="bg-red-500 hover:bg-yellow-300" key="test" onClick={() => { console.log("hllo") }}>hello</Button>
      </section>
      <TestArea>
        <Button className="bg-green-500 hover:bg-yellow-300" key="test" onClick={() => { console.log("test") }}>hello world</Button>
      </TestArea>
    </main>
  )
}
