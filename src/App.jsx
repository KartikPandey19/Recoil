import './App.css'
import { useRecoilValue,RecoilRoot, useSetRecoilState } from 'recoil';
import { countAtom,evenCount} from './store/atoms/count';

function App() {
  
  return <div>
    <RecoilRoot>
    <Count></Count>
    </RecoilRoot>
  </div>
   
   
}

function Count(){
  return (
    <div>
  <CountRender></CountRender>
  <Buttons></Buttons>
  <OddEven></OddEven>
    </div>
  )



}
function CountRender(){
  
  const count = useRecoilValue(countAtom);
  
  return <div>
    {count}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
return <div>
  <button onClick={()=>{
    setCount(count=>count+1)
  }}>Increase</button>
   <button onClick={()=>{
    setCount(count=>count-1)
  }}>Decrease</button>
</div>
}

function OddEven(){
  const count = useRecoilValue(evenCount);
  return <div>
  {count?null:"It is Even" }
  </div>
}










export default App
