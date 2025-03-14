import { ReactElement } from 'react'


const WhiteRoundedBox = ({ text, bells }: { text: string, bells: number }): ReactElement => {
    return (
        <div style={{ fontSize: "20px", fontWeight: '600', background: 'white', color: 'black', borderRadius: '25px', border: 'none', padding: '10px 25px', margin: '20px', width: '80%', display: 'flex', justifyContent: 'space-between' }}><div>{text}</div><div>{bells}</div></div>
    )
}

export default WhiteRoundedBox