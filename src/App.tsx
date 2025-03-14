import './App.css'
import BeigeContainer from './components/BeigeContainer'
import WhiteRoundedBox from './components/WhiteRoundedBox'
import CTA from './components/CTA'

function App() {


  return (
    <div style={{ display: 'flex' }}>
      <BeigeContainer>
        <>
          <input placeholder={'search for ingredients'} style={{ fontSize: "20px", fontWeight: '600', background: 'white', color: 'black', borderRadius: '25px', border: 'none', padding: '10px 25px', margin: '20px', width: '80%' }} />
          <WhiteRoundedBox text={"tomato"} bells={100} />
          <WhiteRoundedBox text={"potato"} bells={300} />
          <CTA text={"find recipes"} />
        </>
      </BeigeContainer>
      <BeigeContainer>
        <>
          <div style={{ background: '#D88D31', width: '80%', borderRadius: '50px' }}><h1 style={{ color: '#702814' }}>Recipes</h1></div>
          <WhiteRoundedBox text={"tomato puree"} bells={3000} />
          <WhiteRoundedBox text={"potato potage"} bells={2500} />
          <div style={{ display: 'flex', width: '90%' }}>
            <CTA text={"get best profit"} />
            <WhiteRoundedBox text={""} bells={0} />
          </div>
        </>
      </BeigeContainer>
    </div>
  )


}



export default App